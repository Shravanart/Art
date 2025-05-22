import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  // Only show first 3 projects for the featured section
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px]">
              A selection of my recent work. Each project reflects my commitment to quality and creativity.
            </p>
          </div>
          <Link href="/projects" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
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
  );
}