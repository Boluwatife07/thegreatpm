"use client"
import dynamic from 'next/dynamic';

const AnimatedProjectsPage = dynamic(() => import('./components/products'), {
  ssr: false,
});

export default function Projects() {
  return <AnimatedProjectsPage />;
}
