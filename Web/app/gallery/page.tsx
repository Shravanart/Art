"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { artworkCategories, projects } from "@/lib/data";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === selectedCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Art Gallery</h1>
          <p className="text-muted-foreground">
            Explore my collection of artworks, from detailed portraits to creative illustrations.
          </p>
        </div>
        
        <Tabs
          defaultValue="all"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-12"
        >
          <div className="flex justify-center">
            <TabsList className="inline-flex">
              <TabsTrigger value="all">All Works</TabsTrigger>
              {artworkCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id.toLowerCase()}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((artwork) => (
            <Card key={artwork.id} className="overflow-hidden group">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2">
                    {artwork.category}
                  </Badge>
                  <h3 className="font-bold text-xl">{artwork.title}</h3>
                  <p className="text-muted-foreground">{artwork.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {artwork.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}