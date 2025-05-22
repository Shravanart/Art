"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">My Skills</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            A comprehensive overview of my professional skills and expertise.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <Tabs defaultValue={skillCategories[0].name.toLowerCase()} className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.name} 
                    value={category.name.toLowerCase()}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map((category) => (
                <TabsContent 
                  key={category.name} 
                  value={category.name.toLowerCase()}
                  className="space-y-6 animation-slide-up"
                >
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}