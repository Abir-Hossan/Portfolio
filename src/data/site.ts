import { BadgeCheck, Code2, Feather, Gem, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import type { NavigationItem, ExpertiseItem, Project, Testimonial, SocialLink } from '../types';
export const navigation:NavigationItem[]=[{label:'Home',href:'#home'},{label:'Portfolio',href:'#portfolio'},{label:'About me',href:'#about'},{label:'Testimonials',href:'#testimonials'}];
export const expertise:ExpertiseItem[]=[
{title:'Strategy & Direction',description:'Shape clear product strategy, creative direction and experiences that connect user needs with business goals.',icon:BadgeCheck},
{title:'Branding & Logo',description:'Build memorable visual identities with purposeful systems that remain coherent across every touchpoint.',icon:Gem},
{title:'UI & UX Design',description:'Design intuitive interfaces and thoughtful user journeys grounded in clarity, usability and visual craft.',icon:Feather},
{title:'Webflow Development',description:'Turn polished design systems into responsive, accessible and production-ready digital experiences.',icon:Code2}];
export const projects:Project[]=[
{title:'Ahuse',description:'A modern commerce experience with an editorial interface and clear conversion-focused product journeys.',image:'/images/project-ahuse.png',href:'#'},
{title:'App Dashboard',description:'A clean dashboard concept for managing profile data, content and day-to-day product activity.',image:'/images/project-dashboard.png',href:'#'},
{title:'Easy Rent',description:'A rental discovery experience that makes comparing spaces and taking action feel simple and direct.',image:'/images/project-rent.png',href:'#'}];
export const testimonials:Testimonial[]=[
{name:'Dianne Russell',role:'Starbucks',quote:'John brings rare clarity to complex product problems. The result felt polished, thoughtful and immediately usable.',initials:'DR'},
{name:'Kristin Watson',role:'Louis Vuitton',quote:'A strong design partner who listens carefully, moves with purpose and protects the details that make an experience work.',initials:'KW'},
{name:'Kathryn Murphy',role:'McDonald’s',quote:'The process was structured and collaborative, and the final system gave our team a much stronger foundation to build on.',initials:'KM'}];
export const socials:SocialLink[]=[{label:'Facebook',href:'#',icon:Facebook},{label:'Instagram',href:'#',icon:Instagram},{label:'Twitter',href:'#',icon:Twitter},{label:'LinkedIn',href:'#',icon:Linkedin}];
