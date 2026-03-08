'use client';

// Main Portfolio Page
// Component composition, state lifting, lazy loading patterns,
// JSON-LD structured data, code splitting with React.lazy

import { useState, Suspense, lazy, useCallback } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
// import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import CertificationsSection from '@/components/sections/certifications';
import CVDownloadSection from '@/components/sections/cv-download';
import ContactSection from '@/components/sections/contact';

// Lazy load command palette for code splitting
const CommandPalette = lazy(() => import('@/components/command-palette'));

// JSON-LD Structured Data for SEO (schema.org)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Puran Ban',
  url: 'https://www.puranban.com.np',
  jobTitle: 'Senior Frontend Engineer',
  phone: [
    '9059223253',
    '9840275475',
  ],
  'worksFor': [
    {
      '@type': 'Organization',
      name: 'Genese Solution'
    },
    {
      '@type': 'Organization',
      name: 'Togglecorp'
    },
    {
      '@type': 'Organization',
      name: 'Kagati.io',
    },
    {
      '@type': 'Organization',
      name: 'Snigdh tech',
    },
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Frontend Development',
    'Accessibility',
    'Web Performance',
    'UI/UX',
  ],
  sameAs: [
    'https://github.com/puranban',
    'https://linkedin.com/in/puranban',
  ],
  image: '/profile-photo.jpeg',
  // 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-11%20at%2010.19.04%20PM-UzFi0jRKTNTpzJIDEsszWiHREOgf4N.jpeg',
  address: {
    "@type": 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Oshawa',
    addressRegion: 'ON',
    postalCode: 'L1G 0B4',
    addressCountry: 'CA',
  },
  birthPlace: {
    '@type': 'Place',
    name: 'Kathmandu, Nepal'
  }
};

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header with search trigger */}
      <Header onOpenSearch={handleOpenSearch} />

      {/* Main content */}
      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <SkillsSection />
        <CertificationsSection />
        <CVDownloadSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette - Lazy loaded */}
      <Suspense fallback={null}>
        <CommandPalette open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      </Suspense>
    </>
  );
}
