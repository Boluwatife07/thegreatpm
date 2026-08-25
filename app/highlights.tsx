"use client"
import dynamic from 'next/dynamic';

const AnimatedHighlights = dynamic(() => import('./components/highlights'), {
  ssr: false,
});

export default function Highlights() {
  return <AnimatedHighlights />;
}
