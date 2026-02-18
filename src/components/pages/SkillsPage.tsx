'use client'

import { motion } from 'framer-motion'

type Group = {
  title: string
  items: string[]
}

const groups: Group[] = [
  {
    title: 'Programming',
    items: ['Python', 'MATLAB / Simulink', 'C++', 'SQL'],
  },
  {
    title: 'Tools',
    items: ['LaTeX / TikZ', 'Git', 'Docker', 'LabVIEW', 'Excel'],
  },
  {
    title: 'Focus',
    items: ['Biophysics', 'Signal Processing', 'Instrumentation', 'Optics / Photonics'],
  },
  {
    title: 'Languages',
    items: ['Catalan (Native)', 'Spanish (Native)', 'English (C1)', 'French (B1)'],
  },
]

export function SkillsPage() {
  return (
    <div className="space-y-8">
      {groups.map((g, gi) => (
        <motion.section
          key={g.title}
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: gi * 0.03, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-sm md:text-base font-semibold text-foreground-dim mb-3">
            {g.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {g.items.map((item) => (
              <span
                key={item}
                className="
                  px-6 py-3 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  text-base md:text-lg
                  text-foreground
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                  backdrop-blur-xl
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  )
}