import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  challenge: string;
  solution: string;
  contribution: string;
  impact: string;
  link?: string;
  icon?: ReactNode;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Internship' | 'Leadership';
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}