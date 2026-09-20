'use client'
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AboutPage from './about';
import Highlights from './highlights';
import Products from './products';
import ContactPage from './contact';

const roles = [
  {
    id: 'ROLE-01',
    status: 'DONE',
    title: 'Frontend Dev Intern',
    org: 'Purejim Limited',
    period: '2023 – 2024',
  },
  {
    id: 'ROLE-02',
    status: 'DONE',
    title: 'Frontend Developer',
    org: 'Zenon',
    period: '2024 – 2025',
  },
  {
    id: 'ROLE-03',
    status: 'DONE',
    title: 'Jr. Technical Project Coordinator',
    org: 'Africa Gaming Expo',
    period: '2025 – 2026',
  },
  {
    id: 'ROLE-04',
    status: 'IN PROGRESS',
    title: 'Technical Project Manager',
    org: "Keys Community · BrightBridge",
    period: '2026 – Present',
  },
  {
    id: 'ROLE-05',
    status: 'IN PROGRESS',
    title: 'Technical Project Manager',
    org: 'BrightBridge Connect',
    period: '2026 – Present',
  },

];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-ink overflow-hidden">
      {/* Header */}
      <header className="bg-ink/95 backdrop-blur border-b border-panel-line text-paper py-4 px-6 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="#home" className="font-display text-xl tracking-tight text-paper">
            Dorcas<span className="text-amber">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm ticket-eyebrow uppercase text-muted">
            <a href="#home" className="hover:text-amber transition">Home</a>
            <a href="#about" className="hover:text-amber transition">About</a>
            <a href="#highlights" className="hover:text-amber transition">Delivery</a>
            <a href="#projects" className="hover:text-amber transition">Work</a>
            <a href="#contact" className="hover:text-amber transition">Contact</a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none text-paper" aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden flex flex-col mt-4 gap-4 text-paper text-lg ticket-eyebrow uppercase">
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#highlights" onClick={() => setIsOpen(false)}>Delivery</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

          <div id="home" className="px-5">
        <section className="flex flex-col py-16 md:py-24 gap-14 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
  
  {/* Image */}
  <div className="shrink-0 relative">
    <div className="absolute -inset-3 rounded-full border-amber/40 border-2" />
    <img
      src="/headshot.png"
      alt="Dorcas Adeboye"
      className="relative aspect-[4/5] w-64 md:w-72 object-cover rounded-full border border-panel-line shadow-2xl"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col max-w-3xl">
    <h1 className="font-display text-4xl md:text-6xl leading-tight text-paper">
      Hi, I&rsquo;m{' '}
      <span className="text-amber">
        <Typewriter
          words={['Dorcas.']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>

    <p className="text-paper-dim text-lg md:text-xl leading-relaxed mt-6">
      I&rsquo;m a Technical Project Manager who started out as a frontend developer —
      and I never actually stopped. I coordinate delivery across product, engineering, design,
      and marketing, and I still build things: prototypes, quick UI mockups, working
      proof-of-concepts. I just found a way to fold it into how I manage delivery,
      instead of leaving it behind.
    </p>

    <div className="flex flex-wrap gap-4 pt-6">
      <a
        href="#contact"
        className="bg-amber text-ink font-semibold px-4 py-3 rounded-lg hover:bg-paper transition"
      >
        Let&rsquo;s talk
      </a>

      <a
        href="#highlights"
        className="border border-panel-line text-paper px-4 py-3 rounded-lg hover:border-amber hover:text-amber transition"
      >
        See what I&rsquo;ve delivered
      </a>
    </div>
  </div>

</div>
          {/* Signature element: career ticket board */}
          <div className="w-full">
            <p className="ticket-eyebrow text-xs uppercase text-muted mb-4">
              How I got here — filed as tickets, obviously
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role) => {
                const active = role.status === 'IN PROGRESS';
                return (
                  <div
                    key={role.id}
                    className={`rounded-2xl p-5 border transition-colors ${
                      active
                        ? 'bg-panel border-amber shadow-[0_0_0_1px_rgba(226,162,59,0.4)]'
                        : 'bg-ink-soft border-panel-line'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="ticket-eyebrow text-[11px] text-muted">{role.id}</span>
                      <span
                        className={`ticket-eyebrow text-[10px] px-2 py-0.5 rounded-full ${
                          active
                            ? 'bg-amber-soft text-amber animate-pulse'
                            : 'bg-panel-line text-muted'
                        }`}
                      >
                        {role.status}
                      </span>
                    </div>
                    <h3 className={`font-semibold text-base mb-1 ${active ? 'text-paper' : 'text-paper-dim'}`}>
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted">{role.org}</p>
                    <p className="text-xs text-muted mt-2">{role.period}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <AboutPage />
      <Highlights />
      <Products />
      <ContactPage />
    </div>
  );
}
