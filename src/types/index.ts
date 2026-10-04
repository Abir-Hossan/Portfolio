import type { LucideIcon } from 'lucide-react';
export interface NavigationItem { label:string; href:string }
export interface ExpertiseItem { title:string; description:string; icon:LucideIcon }
export interface Project { title:string; description:string; image:string; href:string }
export interface Testimonial { name:string; role:string; quote:string; initials:string }
export interface SocialLink { label:string; href:string; icon:LucideIcon }
