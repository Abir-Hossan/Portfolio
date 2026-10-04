import { useEffect, useState } from 'react';
export type Theme='light'|'dark';
export function useTheme(){const [theme,setTheme]=useState<Theme>(()=>document.documentElement.classList.contains('dark')?'dark':'light');useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark');localStorage.setItem('theme',theme)},[theme]);return{theme,toggleTheme:()=>setTheme(t=>t==='dark'?'light':'dark')}}
