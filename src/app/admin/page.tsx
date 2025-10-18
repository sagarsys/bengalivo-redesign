"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Save, X, Heart, Crown, Users, Settings, FileText, Cat } from "lucide-react";
import Link from "next/link";

// Mock data - in a real app, this would come from your backend
const mockKittens = [
  {
    id: 1,
    name: "Luna",
    age: "12 weeks",
    gender: "Female",
    color: "Brown Spotted",
    price: "$2,500",
    available: true,
    birthDate: "September 15, 2024",
    description: "Luna is a beautiful brown spotted Bengal with a playful personality.",
    parents: "Thunder & Storm"
  },
  {
    id: 2,
    name: "Phoenix",
    age: "10 weeks",
    gender: "Male",
    color: "Silver Spotted",
    price: "$2,800",
    available: true,
    birthDate: "October 1, 2024",
    description: "Phoenix is a stunning silver spotted Bengal with striking blue eyes.",
    parents: "Shadow & Mist"
  }
];

const mockRetiredCats = [
  {
    id: 1,
    name: "Thunder",
    age: "5 years",
    gender: "Male",
    color: "Brown Spotted",
    price: "$1,200",
    available: true,
    retirementDate: "November 2024",
    description: "Thunder is a magnificent retired stud with a gentle soul.",
    achievements: ["Grand Champion", "Best in Show 2022"]
  }
];

const mockBreederCats = [
  {
    id: 1,
    name: "Thunder",
    age: "4 years",
    gender: "Male",
    color: "Brown Spotted",
    status: "Active",
    description: "Thunder is our premier stud with exceptional genetics.",
    achievements: ["Grand Champion", "Best in Show 2023"],
    breedingHistory: "50+ successful breedings"
  }
];

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'kittens' | 'retired' | 'breeders'>('kittens');
  const [editingItem, setEditingItem] = useState<Record<string, unknown> | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Check if user is authenticated and is admin
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleEdit = (item: Record<string, unknown>) => {
    setEditingItem(item);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingItem({});
    setIsAddingNew(true);
  };

  const handleSave = () => {
    // In a real app, this would save to your backend
    console.log('Saving:', editingItem);
    setEditingItem(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: number) => {
    // In a real app, this would delete from your backend
    console.log('Deleting:', id);
  };

  const renderKittensTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Kittens Management</h2>
        <Button onClick={handleAddNew} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Kitten
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockKittens.map((kitten) => (
          <Card key={kitten.id} className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{kitten.name}</h3>
                  <Badge variant={kitten.available ? "default" : "secondary"}>
                    {kitten.available ? "Available" : "Reserved"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Age:</strong> {kitten.age}</p>
                  <p><strong>Gender:</strong> {kitten.gender}</p>
                  <p><strong>Color:</strong> {kitten.color}</p>
                  <p><strong>Price:</strong> {kitten.price}</p>
                  <p><strong>Parents:</strong> {kitten.parents}</p>
                </div>

                <p className="text-sm">{kitten.description}</p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(kitten)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(kitten.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderRetiredTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Retired Cats Management</h2>
        <Button onClick={handleAddNew} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Retired Cat
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockRetiredCats.map((cat) => (
          <Card key={cat.id} className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{cat.name}</h3>
                  <Badge variant={cat.available ? "default" : "secondary"}>
                    {cat.available ? "Available" : "Adopted"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Age:</strong> {cat.age}</p>
                  <p><strong>Gender:</strong> {cat.gender}</p>
                  <p><strong>Color:</strong> {cat.color}</p>
                  <p><strong>Price:</strong> {cat.price}</p>
                  <p><strong>Retired:</strong> {cat.retirementDate}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm">{cat.description}</p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(cat)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(cat.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderBreedersTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Breeder Cats Management</h2>
        <Button onClick={handleAddNew} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Breeder Cat
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockBreederCats.map((cat) => (
          <Card key={cat.id} className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{cat.name}</h3>
                  <Badge variant={cat.status === "Active" ? "default" : "secondary"}>
                    {cat.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Age:</strong> {cat.age}</p>
                  <p><strong>Gender:</strong> {cat.gender}</p>
                  <p><strong>Color:</strong> {cat.color}</p>
                  <p><strong>Breeding History:</strong> {cat.breedingHistory}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm">{cat.description}</p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(cat)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(cat.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {session.user?.name}!</p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="/admin/content">
                  <FileText className="mr-2 h-4 w-4" />
                  Content Management
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/cats">
                  <Cat className="mr-2 h-4 w-4" />
                  Cat Management
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
            <Button
              variant={activeTab === 'kittens' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('kittens')}
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Kittens
            </Button>
            <Button
              variant={activeTab === 'retired' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('retired')}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Retired Cats
            </Button>
            <Button
              variant={activeTab === 'breeders' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('breeders')}
              className="flex items-center gap-2"
            >
              <Crown className="h-4 w-4" />
              Breeder Cats
            </Button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {activeTab === 'kittens' && renderKittensTab()}
          {activeTab === 'retired' && renderRetiredTab()}
          {activeTab === 'breeders' && renderBreedersTab()}
        </motion.div>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {isAddingNew ? 'Add New' : 'Edit'} {activeTab.slice(0, -1)}
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setEditingItem(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={String(editingItem.name || '')} />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" defaultValue={String(editingItem.age || '')} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select defaultValue={String(editingItem.gender || '')}>
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
                    <Label htmlFor="color">Color</Label>
                    <Input id="color" defaultValue={String(editingItem.color || '')} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" defaultValue={String(editingItem.price || '')} />
                  </div>
                  <div>
                    <Label htmlFor="available">Status</Label>
                    <Select defaultValue={editingItem.available ? 'available' : 'unavailable'}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="unavailable">Unavailable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    defaultValue={String(editingItem.description || '')} 
                    rows={4}
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setEditingItem(null)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
