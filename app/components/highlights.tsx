'use client';

import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    id: 'DEL-01',
    org: 'Keys Community',
    role: 'Technical Project Manager',
    meta: 'London, UK · Remote · 2026 – Present',
    body:
      "I coordinate delivery across a pre-launch UK SaaS platform for neighbourhood communities — engineering, design, marketing and legal all touch this. Day to day that's PRDs and acceptance criteria, sprint planning and backlog refinement, QA/UAT, dependency tracking, and a stabilisation push aimed squarely at release reliability. I also work directly with our external dev vendor on delivery.",
    tags: ['PRDs', 'Sprint Planning', 'QA/UAT', 'Dependency Tracking'],
  },
  {
    id: 'DEL-02',
    org: 'BrightBridge Connect',
    role: 'Technical Project Manager',
    meta: 'Remote',
    body:
      "I hold the same kind of role at BrightBridge Connect, a pre-launch UK supported-living property sourcing platform — working directly with the founder across engineering, design, contracts, and property sourcing to keep delivery on track and priorities clear.",
    tags: ['Technical Delivery', 'Stakeholder Management', 'Founder Partnership'],
  },
  {
    id: 'DEL-03',
    org: 'Africa Gaming Expo',
    role: 'Junior Technical Project Coordinator',
    meta: 'Remote · 2025 – 2026',
    body:
      "Supported delivery for AGE and two sister businesses under the same CEO. Wrote user stories and acceptance criteria, coordinated QA/UAT across web and mobile, and led partnership conversations — including landing Kenya Airways as AGE 2026's official airline partner and project-managing AFRIPitch from end to end.",
    tags: ['Partnerships', 'QA/UAT', 'Project Management'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedHighlights() {
  return (
    <section id="highlights" className="bg-ink-soft py-16 md:py-24 px-5 md:px-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-paper"
          >
            Product &amp; Delivery
          </motion.h2>
          <p className="text-muted max-w-2xl mx-auto">
            The roadmap-and-roomful-of-people side of the job — where the code I write these
            days is mostly Jira tickets.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="bg-panel border border-panel-line rounded-2xl p-6 flex flex-col gap-4 hover:border-amber transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="ticket-eyebrow text-[11px] text-muted">{item.id}</span>
                <span className="ticket-eyebrow text-[10px] px-2 py-0.5 rounded-full bg-slate-soft text-slate">
                  DELIVERED
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-paper">{item.role}</h3>
                <p className="text-sm text-amber">{item.org}</p>
                <p className="text-xs text-muted mt-1">{item.meta}</p>
              </div>
              <p className="text-sm text-paper-dim leading-relaxed">{item.body}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-ink-soft text-muted border border-panel-line"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
