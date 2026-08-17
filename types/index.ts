import { LucideIcon } from "lucide-react";

interface Business {
  id: number;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  url: string;
  category:
    | "Studio"
    | "Marketplace"
    | "Platform"
    | "Mobile App"
    | "E-Commerce"
    | "Service"
    | "Startup";
  tags: string[];
  upvotes: number;
  status:
    | "live"
    | "beta"
    | "coming-soon";
}


interface Projects {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  category: string;
  year: number;
  client?: string;
}

interface EcoItem {
  id: number;
  label: string;
  sublabel: string;
  url: string;
  icon: string;
  color: string;
  glow: string;
  orbit: 1 | 2 | 3;
  startDeg: number;
}

interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}


interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}


interface Category {
  id: string;
  name: string;
}

interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
}


export type {Business , Project, EcoItem, Testimonial, Category , Skill, Service , Projects}