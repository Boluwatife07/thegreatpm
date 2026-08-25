"use client"
import dynamic from 'next/dynamic';

const AnimatedAboutPage = dynamic(() => import('./components/animeabout'), {
  ssr: false,
});

export default function About() {
  return <AnimatedAboutPage />;
}
