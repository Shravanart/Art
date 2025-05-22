"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-6 md:gap-10">
        <Link href="/" className="font-bold text-xl">
          Portfolio
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="hidden md:flex items-center gap-2">
        <ThemeToggle />
        <Button>Get in Touch</Button>
      </div>

      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-6 animate-in fade-in-90 md:hidden">
          <nav className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button className="mt-4">Get in Touch</Button>
          </nav>
        </div>
      )}
    </div>
  );
}