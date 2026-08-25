'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaUniversity, FaTools, FaAward } from 'react-icons/fa';

const skillGroups = [
  {
    category: 'Product & Delivery',
        skills: [
      'PRDs & User Stories',
      'Prototyping',
      'Agile / Scrum',
      'Sprint Planning',
      'Backlog Management',
      'Stakeholder Management',
      'Roadmapping',
      'Risk & Dependency Mgmt',
    ],
  },
  {
    category: 'QA & Process',
    skills: ['UAT Coordination', 'Test Case Design', 'Defect Management', 'Process Improvement'],
  },
  {
    category: 'Frontend Dev',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    skills: ['Jira', 'Notion', 'GitHub', 'Figma', 'Slack', 'Plane'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedAboutPage() {
  return (
    <section id="about" className="bg-ink py-16 md:py-24 px-5 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-paper text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-ink-soft border border-panel-line rounded-3xl p-8 md:p-12 space-y-10"
        >
          <motion.div variants={cardVariants} className="flex items-start gap-4">
            <FaUserCheck className="text-amber text-2xl mt-1 shrink-0" />
            <p className="text-paper-dim text-lg leading-relaxed">
           I&rsquo;m <span className="font-semibold text-paper">Dorcas Boluwatife Adeboye</span>,
              a Technical Project Manager based in Lagos. I got here the long way round —
              I started as a frontend developer, moved into project coordination because I
              kept being the person who could explain engineering to everyone else, and now
              I run delivery end to end: PRDs, sprint planning, QA/UAT, and keeping a room full
              of engineers, designers, and stakeholders pointed at the same goal. I never
              actually stopped developing, either — I still build prototypes and quick UI
              mockups, it&rsquo;s just folded into how I manage delivery now instead of being
              a separate job.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="flex items-start gap-4">
            <FaUniversity className="text-amber text-2xl mt-1 shrink-0" />
            <p className="text-paper-dim text-lg">
              <span className="font-medium text-paper">B.Sc. Computer Science</span> —
              <span className="font-semibold text-paper"> Lagos State University</span> (2021–2024)
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="flex items-start gap-4">
            <FaAward className="text-amber text-2xl mt-1 shrink-0" />
            <p className="text-paper-dim text-lg">
              <span className="font-medium text-paper">Professional Scrum Master I</span> — Scrum.org
              (100% pass score), plus a{' '}
              <span className="font-medium text-paper">Certificate in IT</span> from the British
              Computer Society.
            </p>
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold text-paper mb-6 flex items-center gap-2">
              <FaTools className="text-amber" />
              What I actually work with
            </h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {skillGroups.map((group, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="bg-panel rounded-xl p-5 border border-panel-line hover:border-amber transition duration-300"
                >
                  <p className="ticket-eyebrow text-xs text-amber mb-3 uppercase">
                    {group.category}
                  </p>
                  <ul className="space-y-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-paper-dim">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.p
            variants={cardVariants}
            className="pt-6 text-center text-amber font-medium text-lg"
          >
            Give me a messy backlog and a room full of opinions — I&rsquo;ll bring you a plan. 🚀
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
