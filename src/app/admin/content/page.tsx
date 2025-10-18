"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface PageContent {
  id: string;
  page: string;
  section: string;
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
}

export default function ContentManagement() {
  const { status } = useSession();
  const router = useRouter();
  const [content, setContent] = useState<PageContent[]>([]);
  const [editingItem, setEditingItem] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
      return;
    }
    
    if (status === 'authenticated') {
      fetchContent();
    }
  }, [status, router]);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content');
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: PageContent) => {
    setEditingItem({ ...item });
  };

  const handleSave = async () => {
    if (!editingItem) return;

    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingItem),
      });

      if (response.ok) {
        await fetchContent();
        setEditingItem(null);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this content?')) return;

    try {
      const response = await fetch(`/api/content?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchContent();
      }
    } catch (error) {
      console.error('Error deleting content:', error);
    }
  };

  const handleAddNew = () => {
    setEditingItem({
      id: '',
      page: 'home',
      section: '',
      title: '',
      subtitle: '',
      content: '',
      imageUrl: '',
      buttonText: '',
      buttonLink: '',
      order: 0,
      isActive: true,
    });
  };

  const handleCreate = async () => {
    if (!editingItem) return;

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingItem),
      });

      if (response.ok) {
        await fetchContent();
        setEditingItem(null);
      }
    } catch (error) {
      console.error('Error creating content:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.page]) {
      acc[item.page] = [];
    }
    acc[item.page].push(item);
    return acc;
  }, {} as Record<string, PageContent[]>);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Content Management</h1>
          <p className="text-muted-foreground">Manage your website content dynamically</p>
        </div>

        <Tabs defaultValue="home" className="space-y-6">
          <TabsList>
            {Object.keys(groupedContent).map((page) => (
              <TabsTrigger key={page} value={page}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groupedContent).map(([page, items]) => (
            <TabsContent key={page} value={page} className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">
                  {page.charAt(0).toUpperCase() + page.slice(1)} Content
                </h2>
                <Button onClick={handleAddNew} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Section
                </Button>
              </div>

              <div className="grid gap-4">
                {items
                  .sort((a, b) => a.order - b.order)
                  .map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{item.section}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {item.title || 'No title'}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(item)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {item.subtitle && (
                            <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                          )}
                          {item.content && (
                            <p className="text-sm">{item.content.substring(0, 100)}...</p>
                          )}
                          <div className="flex gap-2 text-xs text-muted-foreground">
                            <span>Order: {item.order}</span>
                            <span>•</span>
                            <span>Active: {item.isActive ? 'Yes' : 'No'}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    {editingItem.id ? 'Edit Content' : 'Add New Content'}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingItem(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="page">Page</Label>
                    <Select
                      value={editingItem.page}
                      onValueChange={(value) =>
                        setEditingItem({ ...editingItem, page: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="about">About</SelectItem>
                        <SelectItem value="contact">Contact</SelectItem>
                        <SelectItem value="kittens">Kittens</SelectItem>
                        <SelectItem value="breeders">Breeders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="section">Section</Label>
                    <Input
                      id="section"
                      value={editingItem.section}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, section: e.target.value })
                      }
                      placeholder="e.g., hero, kittens, featured"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={editingItem.title || ''}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, title: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    value={editingItem.subtitle || ''}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, subtitle: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={editingItem.content || ''}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, content: e.target.value })
                    }
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="buttonText">Button Text</Label>
                    <Input
                      id="buttonText"
                      value={editingItem.buttonText || ''}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, buttonText: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="buttonLink">Button Link</Label>
                    <Input
                      id="buttonLink"
                      value={editingItem.buttonLink || ''}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, buttonLink: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="order">Order</Label>
                    <Input
                      id="order"
                      type="number"
                      value={editingItem.order}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, order: parseInt(e.target.value) || 0 })
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={editingItem.isActive}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, isActive: e.target.checked })
                      }
                    />
                    <Label htmlFor="isActive">Active</Label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setEditingItem(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={editingItem.id ? handleSave : handleCreate}
                    className="flex items-center gap-2"
                  >
                    <Save className="h-4 w-4" />
                    {editingItem.id ? 'Save Changes' : 'Create Content'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
