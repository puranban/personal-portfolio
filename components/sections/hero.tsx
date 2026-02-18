'use client';

// CSS animations, responsive design, TypeScript typing,
// Next.js Image component, theme-aware styling

import { memo } from 'react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';
import { personalInfo, profilePhoto } from '@/lib/data/portfolio';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, FileText } from 'lucide-react';

function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center pt-16 min-h-screen"
      aria-labelledby="hero-title"
    >
      {/* Background gradient */}
      <div
        className="-z-10 absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="top-1/4 left-1/4 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96" />
        <div className="right-1/4 bottom-1/4 absolute bg-accent/5 blur-3xl rounded-full w-96 h-96" />
      </div>

      <div className="mx-auto px-4 sm:px-6 max-w-4xl text-center">
        {/* Circular Profile Photo */}
        <AnimatedSection direction="up" delay={0}>
          <div className="flex justify-center mb-8">
            <div className="group relative">
              {/* Decorative ring that adapts to theme */}
              <div
                className="absolute -inset-1 bg-primary/20 group-hover:bg-primary/30 blur-sm rounded-full transition-colors"
                aria-hidden="true"
              />
              <div className="relative shadow-xl rounded-full ring-4 ring-primary/30 ring-offset-4 ring-offset-background w-36 sm:w-44 h-36 sm:h-44 overflow-hidden">
                <Image
                  src={profilePhoto}
                  alt="Puranban - Senior Frontend Engineer and React/Next.js developer based in Canada"
                  width={176}
                  height={176}
                  className="w-full h-full object-center object-cover"
                  priority
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <p className="mb-4 font-mono text-primary text-sm sm:text-base">
            {t.hero.greeting}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <h1
            id="hero-title"
            className="mb-4 font-bold text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            {personalInfo.name}
          </h1>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={300}>
          <h2 className="mb-6 font-semibold text-muted-foreground text-2xl sm:text-3xl md:text-4xl">
            {t.hero.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={400}>
          <p className="mx-auto mb-4 max-w-2xl text-muted-foreground text-lg sm:text-xl text-balance leading-relaxed">
            {t.hero.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={500}>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground/80 text-base leading-relaxed">
            {t.hero.description}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={600}>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 w-4 h-4" />
                {t.hero.cta}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={personalInfo.resumeUrl}
                download="puranban_frontend_cv.pdf"
              >
                <FileText className="mr-2 w-4 h-4" />
                {t.hero.resumeBtn}
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection direction="up" delay={800}>
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 mt-16 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="font-medium text-sm">{t.nav.about}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default memo(HeroSection);
