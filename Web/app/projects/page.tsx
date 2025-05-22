"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">My Projects</h1>
            <p className="text-muted-foreground">
              A collection of my work showcasing brand identity, web development, UI/UX design, 
              and other creative solutions for clients across various industries.
            </p>
          </div>
          
          <Tabs
            defaultValue="All"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-12"
          >
            <div className="flex justify-center">
              <TabsList className="inline-flex">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <Link href={project.link || "#"}>
                    <Button variant="link" className="p-0 h-auto font-normal group">
                      View Project
                      <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}