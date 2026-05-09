# Pau Monterosa — Portfolio Website

Personal portfolio website built with **Next.js**, **TypeScript** and **Tailwind CSS**, designed as a modern single-page experience with full-screen section navigation, dynamic gradient backgrounds and smooth transitions.

## Live Site

[Visit the portfolio](https://paumonterosa.github.io/Pau-Website/)

## Overview

This project is a personal portfolio focused on presenting my profile, background and technical interests through a clean and visually distinctive interface.

The website is structured as a single-page experience with full-screen sections, where each section has its own visual identity through custom SVG gradients and subtle motion effects.

The goal of the project is not only to showcase content, but also to reflect attention to design, frontend architecture and deployment workflow.

## Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **GitHub Pages** for deployment
- **GitHub Actions** for automated builds

## Features

- Full-page section-based navigation
- Responsive layout
- Dynamic SVG gradient backgrounds
- Smooth animated transitions
- Interactive visual effects
- Open Graph image generation
- Static deployment through GitHub Pages

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── opengraph-image.tsx
├── components/
│   ├── PageWrapper.tsx
│   └── pages/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── EducationPage.tsx
│       ├── ExperiencePage.tsx
│       ├── SkillsPage.tsx
│       ├── ProjectsPage.tsx
│       └── ContactPage.tsx
├── lib/
│   └── constants.ts
└── data/
    ├── projects.ts
    └── skills.ts

public/
├── gradients/
└── favicon.svg

## Local Development

###Requirements

- **Node.js 18** or higher
- **npm** installed


## Install dependencies

```bash
npm install

### Run the development server
```bash
npm run dev

Then open:
http://localhost:3000

## Production Build
To generate the production build:

```bash
npm run build

## Deployment
This site is configured for **static export** with Next.js and deployed through **GitHub Pages** using GitHub Actions.
The deployment flow is:


1. Push changes to the main branch
2. GitHub Actions installs dependencies and builds the project
3. Next.js exports the static site
4. GitHub Pages publishes the generated output


## Notes
This project uses a basePath and assetPrefix in production so that static assets load correctly under:
https://paumonterosa.github.io/Pau-Website/

## Author
**Pau Monterosa**
- GitHub: PauMonterosa
- LinkedIn: paumonterosa
- Email: paumonterosa@gmail.com

## License
This project is intended for personal portfolio use.

