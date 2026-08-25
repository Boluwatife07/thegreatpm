'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    img: '/pub.png',
    title: 'Pub Meals & Drinks Ordering App',
    description:
      'An interactive app for pubs that allows table-based food and drink ordering, with features like bill-splitting, dietary filters, and personalized suggestions.',
    tech: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    link: 'https://pub-meal-and-drinks-application.vercel.app/menu',
    code: 'https://github.com/Boluwatife07/pub-meal-and-drinks-application',
  },
  {
    img: '/sentiment analysis.png',
    title: 'Cyberbullying Detection System',
    description:
      'A sentiment analysis system that uses six different ML classifiers to detect and flag harmful or abusive content in text messages.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'React'],
    link: 'https://anti-cyberbullying-system-c4cr.vercel.app/',
    code: 'https://github.com/Boluwatife07/anti-cyberbullying-system',
  },
  {
    img: '/psnl.png',
    title: 'Company Website',
    description:
      'A professional website built for a company to showcase services, team, and contact information, with responsive design and smooth animations.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
    link: 'https://pinholeservicesniglimited.netlify.app/',
    code: 'https://github.com/Boluwatife07/PSNL-web',
  },
  {
    img: '/e-commerce.png',
    title: 'E-commerce Website',
    description:
      'A modern online shopping platform featuring product pages, filtering. Built with React and styled using Tailwind.',
    tech: ['HTML', 'Tailwind CSS', 'React'],
    link: 'https://e-commerce-weld-two-37.vercel.app/',
    code: 'https://github.com/Boluwatife07/e-commerce',
  },
  {
    img: '/peng.png',
    title: 'Event Planning Website',
    description:
      'A company website that allows people to plan their dream events from the comfort of their devices.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    code: 'https://github.com/Boluwatife07/peng-v2',
  },
  {
    img: '/portfolio.png',
    title: 'Portfolio Website',
    description:
      'A personal portfolio site that highlights my skills, experience, and projects built with a mobile-first approach and smooth animations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    code: 'https://github.com/Boluwatife07/portfolio',
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedProjectsPage() {
  return (
    <section id="projects" className="bg-ink py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-paper"
          >
            Things I&rsquo;ve Built
          </motion.h2>
          <p className="text-muted max-w-2xl mx-auto">
            The frontend work that got me here — still my go-to when a plan needs a
            working prototype instead of another slide.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="bg-ink-soft rounded-3xl p-6 transition cursor-pointer border border-panel-line hover:border-amber"
            >
              <img src={project.img} alt="" className="rounded-lg" />
              <h3 className="text-xl font-semibold text-paper mb-2 mt-4">{project.title}</h3>
              <p className="text-paper-dim text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-amber-soft text-amber text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-amber hover:text-paper flex items-center gap-1"
                >
                  Live <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-paper flex items-center gap-1"
                >
                  Code <FaCode className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
