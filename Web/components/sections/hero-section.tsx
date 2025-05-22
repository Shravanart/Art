"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const textRef = useRef<HTMLSpanElement>(null);
  const words = ["Artist", "Illustrator", "Creator"];
  
  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    
    const type = () => {
      const currentWord = words[currentIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        }
        typeSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }
        typeSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    type();
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm an <span ref={textRef} className="text-primary"></span>
                <span className="animate-blink">|</span>
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[600px]">
                Creating unique artworks that capture emotions and tell stories through detailed illustrations and portraits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/gallery">
                <Button size="lg" className="group">
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/commissions">
                <Button variant="outline" size="lg">
                  Commission Artwork
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative aspect-square max-w-[500px] w-full">
            <Image
              src="https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg"
              alt="Featured Artwork"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}