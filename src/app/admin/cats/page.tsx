"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { ImageUpload } from '@/components/image-upload';
import Image from 'next/image';
import type { Cat } from '@/types';

export default function AdminCatsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingCat, setEditingCat] = useState<Cat | null>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    } else if (status === 'authenticated') {
      fetchCats();
    }
  }, [status, router]);

  const fetchCats = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cats');
      if (!res.ok) throw new Error('Failed to fetch cats');
      const data: Cat[] = await res.json();
      setCats(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (cat: Cat) => {
    setEditingCat(cat);
    setIsNew(false);
  };

  const handleAdd = () => {
    setEditingCat({
      id: '',
      name: '',
      fullName: '',
      nickname: '',
      type: 'kitten',
      gender: '',
      color: '',
      age: 0,
      price: '',
      description: '',
      achievements: '',
      father: '',
      mother: '',
      imageUrl: '',
      isAvailable: true,
      isFeatured: false,
    });
    setIsNew(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this cat?')) return;
    try {
      const res = await fetch(`/api/cats?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete cat');
      fetchCats();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCat) return;

    try {
      const method = isNew ? 'POST' : 'PUT';
      const url = isNew ? '/api/cats' : `/api/cats?id=${editingCat.id}`;
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCat),
      });
      if (!res.ok) throw new Error(`Failed to ${isNew ? 'add' : 'update'} cat`);
      setEditingCat(null);
      setIsNew(false);
      fetchCats();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (status === 'loading' || loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-destructive">Error: {error}</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cat Management</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add New Cat
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <Card key={cat.id} className="overflow-hidden">
            {cat.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{cat.name}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(cat)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(cat.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {cat.type} • {cat.gender} • {cat.color}
              </p>
              {cat.description && (
                <p className="text-sm line-clamp-3">{cat.description}</p>
              )}
              <div className="flex gap-2 mt-4">
                {cat.isAvailable && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Available
                  </span>
                )}
                {cat.isFeatured && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                    Featured
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingCat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {isNew ? 'Add New Cat' : 'Edit Cat'}
                <Button variant="ghost" size="sm" onClick={() => setEditingCat(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name *</label>
                    <Input
                      value={editingCat.name}
                      onChange={(e) => setEditingCat({ ...editingCat, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input
                      value={editingCat.fullName || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, fullName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nickname</label>
                    <Input
                      value={editingCat.nickname || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, nickname: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Type *</label>
                    <Select
                      value={editingCat.type}
                      onValueChange={(value) => setEditingCat({ ...editingCat, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitten">Kitten</SelectItem>
                        <SelectItem value="breeder">Breeder</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Gender</label>
                    <Select
                      value={editingCat.gender || ''}
                      onValueChange={(value) => setEditingCat({ ...editingCat, gender: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Color</label>
                    <Input
                      value={editingCat.color || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, color: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Age (weeks)</label>
                    <Input
                      type="number"
                      value={editingCat.age || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, age: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Price</label>
                    <Input
                      value={editingCat.price || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, price: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Father</label>
                    <Input
                      value={editingCat.father || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, father: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Mother</label>
                  <Input
                    value={editingCat.mother || ''}
                    onChange={(e) => setEditingCat({ ...editingCat, mother: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={editingCat.description || ''}
                    onChange={(e) => setEditingCat({ ...editingCat, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Achievements</label>
                  <Textarea
                    value={editingCat.achievements || ''}
                    onChange={(e) => setEditingCat({ ...editingCat, achievements: e.target.value })}
                    rows={2}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Image</label>
                  <ImageUpload
                    value={editingCat.imageUrl || ''}
                    onChange={(url) => setEditingCat({ ...editingCat, imageUrl: url })}
                    placeholder="Upload cat image"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isAvailable"
                      checked={editingCat.isAvailable}
                      onChange={(e) => setEditingCat({ ...editingCat, isAvailable: e.target.checked })}
                    />
                    <label htmlFor="isAvailable" className="text-sm">Available</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isFeatured"
                      checked={editingCat.isFeatured}
                      onChange={(e) => setEditingCat({ ...editingCat, isFeatured: e.target.checked })}
                    />
                    <label htmlFor="isFeatured" className="text-sm">Featured</label>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button type="submit">
                    <Save className="mr-2 h-4 w-4" />
                    {isNew ? 'Add Cat' : 'Update Cat'}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setEditingCat(null)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
