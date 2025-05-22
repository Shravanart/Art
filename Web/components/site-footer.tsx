import Link from "next/link";
import { Github, Twitter, Linkedin, Dribbble } from "lucide-react";
import { socialLinks, navItems } from "@/lib/data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "dribbble":
        return <Dribbble className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl">
              Portfolio
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Creating beautiful digital experiences with a focus on usability and aesthetics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services/design" className="text-muted-foreground hover:text-primary transition-colors">
                UI/UX Design
              </Link>
              <Link href="/services/development" className="text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </Link>
              <Link href="/services/branding" className="text-muted-foreground hover:text-primary transition-colors">
                Brand Identity
              </Link>
              <Link href="/services/consulting" className="text-muted-foreground hover:text-primary transition-colors">
                Consulting
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>San Francisco, CA</p>
              <p>
                <a href="mailto:hello@portfolio.com" className="hover:text-primary transition-colors">
                  hello@portfolio.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}