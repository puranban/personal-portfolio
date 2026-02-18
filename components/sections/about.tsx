'use client';

// Semantic HTML, accessibility patterns, responsive layout

import { memo } from 'react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';
import { personalInfo, profilePhoto } from '@/lib/data/portfolio';
import { AnimatedSection } from '@/components/ui/animated-section';
import { MapPin, Briefcase } from 'lucide-react';

function AboutSection() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="py-20 sm:py-32"
      aria-labelledby="about-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-4xl">
        <AnimatedSection direction="up">
          <h2
            id="about-title"
            className="mb-8 font-mono text-primary text-sm uppercase tracking-wider"
          >
            {t.about.title}
          </h2>
        </AnimatedSection>

        <div className="gap-12 grid md:grid-cols-3">
          {/* Main content */}
          <div className="space-y-6 md:col-span-2">
            <AnimatedSection direction="up" delay={100}>
              <p className="text-foreground text-lg leading-relaxed">
                {t.about.paragraph1}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.about.paragraph2}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.about.paragraph3}
              </p>
            </AnimatedSection>
          </div>

          {/* Sidebar info */}
          <AnimatedSection
            direction="right"
            delay={400}
            className="space-y-6"
          >
            {/* Photo in sidebar for about section */}
            <div className="border border-border rounded-lg overflow-hidden">
              <Image
                src={profilePhoto}
                alt="Puranban - Frontend Engineer working at a coffee shop"
                width={400}
                height={400}
                className="w-full h-auto object-cover aspect-square"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>

            <div className="bg-card p-6 border border-border rounded-lg">
              <h3 className="sr-only">Quick Info</h3>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium text-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">Status</p>
                  <p className="font-medium text-foreground">
                    {personalInfo.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech stack highlight */}
            <div className="bg-primary/5 p-6 border border-primary/10 rounded-lg">
              <p className="mb-3 text-muted-foreground text-sm">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.skills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background px-2.5 py-1 border border-border rounded-md font-medium text-foreground text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
