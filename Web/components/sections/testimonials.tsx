"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, activeIndex]);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">What Clients Say</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Testimonials from clients I've had the pleasure of working with.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-8">
                      <Quote className="h-8 w-8 text-primary/20 mb-6" />
                      <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-2 h-2 p-0 rounded-full ${
                  activeIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}