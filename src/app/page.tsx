'use client'

import dynamic from 'next/dynamic'
import { PageWrapper } from '@/components/PageWrapper'
import { HomePage } from '@/components/pages/HomePage'

// dynamic pages (carrega només quan cal)
const AboutPage = dynamic(() => import('@/components/pages/AboutPage').then(m => m.AboutPage))
const EducationPage = dynamic(() => import('@/components/pages/EducationPage').then(m => m.EducationPage))
const ExperiencePage = dynamic(() => import('@/components/pages/ExperiencePage').then(m => m.ExperiencePage))
const SkillsPage = dynamic(() => import('@/components/pages/SkillsPage').then(m => m.SkillsPage))
const ProjectsPage = dynamic(() => import('@/components/pages/ProjectsPage').then(m => m.ProjectsPage))
const ContactPage = dynamic(() => import('@/components/pages/ContactPage').then(m => m.ContactPage))

export default function Home() {
  const pages = [
    {
      id: 'home',
      gradient: '/gradients/index.svg',
      glowColor: '#8f46db',
      isHome: true,
      content: (
        <HomePage
          onExplore={() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      ),
    },
    {
      id: 'about',
      title: 'About Me',
      description: "Nice to meet you — I'm Pau.",
      gradient: '/gradients/about.svg',
      glowColor: '#1de9ff',
      content: <AboutPage />,
    },
    {
      id: 'education',
      title: 'Education',
      description: 'My academic background',
      gradient: '/gradients/education.svg',
      glowColor: '#ff8c42',
      content: <EducationPage />,
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Research and industry exposure',
      gradient: '/gradients/experience.svg',
      glowColor: '#4f7cff',
      content: <ExperiencePage />,
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'Tools and technologies I use',
      gradient: '/gradients/skills.svg',
      glowColor: '#ff2e63',
      content: <SkillsPage />,
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Selected technical work',
      gradient: '/gradients/projects.svg',
      glowColor: '#1a4fff',
      content: <ProjectsPage />,
    },
    {
      id: 'contact',
      title: 'Contact',
      description: "Let's get in touch",
      gradient: '/gradients/contact.svg',
      glowColor: '#b5179e',
      content: <ContactPage />,
    },
  ]

  return <PageWrapper pages={pages} />
}



