import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsSection } from "@/components/sections/skills-section";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact-form";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <FeaturedProjects />
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Commission Your Own Artwork</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
            Get a unique, personalized artwork created just for you. From portraits to custom illustrations, bring your vision to life.
          </p>
          <Link href="/commissions">
            <Button size="lg" className="group">
              View Commission Options
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
      <Testimonials />
      <SkillsSection />
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Let's Create Something Together</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Have a project in mind? I'd love to hear about it. Get in touch and let's bring your vision to life.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}