export type NavItem = {
  title: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  link?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type ArtworkCategory = {
  id: string;
  name: string;
  description: string;
};

export type CommissionTier = {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  deliverables: string[];
  timeframe: string;
};