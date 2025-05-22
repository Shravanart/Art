import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SkillsSection } from "@/components/sections/skills-section";
import { Testimonials } from "@/components/sections/testimonials";

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter mb-6">About Me</h1>
              <div className="space-y-4 text-lg">
                <p>
                  Hi, I'm a passionate designer and developer with over 8 years of experience creating beautiful, functional digital experiences.
                </p>
                <p>
                  My journey began with a degree in Design from California Institute of Arts, followed by years of hands-on experience working with startups and established brands alike.
                </p>
                <p>
                  I specialize in creating user-centered designs that not only look beautiful but also solve real problems for real people. My approach combines aesthetic sensibility with technical expertise to deliver solutions that exceed expectations.
                </p>
                <p>
                  When I'm not designing or coding, you can find me hiking, photographing landscapes, or experimenting with new cooking recipes.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="Portrait" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      
      <SkillsSection />
      
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Professional Journey</h2>
            <div className="space-y-12">
              <div className="relative pl-8 border-l">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <h3 className="text-xl font-semibold">Senior Designer</h3>
                  <p className="text-muted-foreground mb-2">Creative Agency • 2020 - Present</p>
                  <p>
                    Lead the design team in creating brand identities, websites, and digital products for clients across various industries. Implemented design systems and workflows that improved team efficiency by 35%.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                  <p className="text-muted-foreground mb-2">Tech Startup • 2017 - 2020</p>
                  <p>
                    Designed user interfaces for mobile applications and web platforms. Conducted user research and usability testing to refine products. Collaborated with developers to ensure design implementation quality.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <h3 className="text-xl font-semibold">Graphic Designer</h3>
                  <p className="text-muted-foreground mb-2">Design Studio • 2015 - 2017</p>
                  <p>
                    Created visual assets for print and digital media. Developed brand identities and marketing materials for small businesses and nonprofits. Managed client relationships and project timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
    </>
  );
}