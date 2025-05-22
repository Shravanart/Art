import { ProjectItem, Testimonial, SkillCategory, NavItem, SocialLink, ArtworkCategory } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Commissions",
    href: "/commissions",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/shravan_art_7777",
    icon: "instagram",
  },
];

export const artworkCategories: ArtworkCategory[] = [
  {
    id: "portraits",
    name: "Portraits",
    description: "Detailed portrait drawings capturing emotions and personality",
  },
  {
    id: "illustrations",
    name: "Illustrations",
    description: "Creative illustrations and concept art",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Portrait Study",
    description: "Detailed graphite portrait showcasing light and shadow play",
    imageUrl: "https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg",
    category: "Portraits",
    tags: ["Graphite", "Portrait", "Realism"],
    link: "/gallery/portrait-study",
  },
  {
    id: "2",
    title: "Character Illustration",
    description: "Original character design with dynamic pose and lighting",
    imageUrl: "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg",
    category: "Illustrations",
    tags: ["Digital", "Character Design", "Fantasy"],
    link: "/gallery/character-illustration",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emily Chen",
    role: "Client",
    company: "",
    content: "Shravan captured exactly what I envisioned for my portrait commission. The attention to detail and ability to capture emotions is remarkable.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Art Collector",
    company: "",
    content: "The quality of work is exceptional. Each piece shows incredible skill and artistic vision.",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Traditional",
    skills: [
      { name: "Graphite Drawing", level: 95 },
      { name: "Charcoal", level: 90 },
      { name: "Ink", level: 85 },
      { name: "Color Pencils", level: 90 },
    ],
  },
  {
    name: "Digital",
    skills: [
      { name: "Digital Painting", level: 85 },
      { name: "Character Design", level: 80 },
      { name: "Concept Art", level: 75 },
      { name: "Photo Manipulation", level: 70 },
    ],
  },
];

export const commissionPricing = [
  {
    id: "portrait",
    title: "Portrait Commission",
    description: "Detailed portrait drawing in graphite or charcoal",
    startingPrice: 150,
    deliverables: [
      "High-resolution digital scan",
      "Original artwork shipped",
      "2 rounds of revisions",
      "Certificate of authenticity"
    ],
    timeframe: "2-3 weeks",
  },
  {
    id: "illustration",
    title: "Custom Illustration",
    description: "Original illustration or character design",
    startingPrice: 200,
    deliverables: [
      "High-resolution digital file",
      "Multiple concept sketches",
      "3 rounds of revisions",
      "Commercial usage rights"
    ],
    timeframe: "1-2 weeks",
  },
];