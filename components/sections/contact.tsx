'use client';

// Accessibility, external links, social icons mapping

import { memo, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { personalInfo } from '@/lib/data/portfolio';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

// Icon mapping for social platforms
const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
} as const;

function ContactSection() {
  const { t } = useI18n();

  // Memoize social links rendering
  const socialLinks = useMemo(
    () =>
      personalInfo.socials.map((social) => {
        const Icon = socialIcons[social.platform];
        return (
          <a
            key={social.platform}
            href={social.url}
            target={social.platform !== 'email' ? '_blank' : undefined}
            rel={social.platform !== 'email' ? 'noopener noreferrer' : undefined}
            className="flex justify-center items-center bg-secondary hover:bg-primary rounded-full w-12 h-12 text-secondary-foreground hover:text-primary-foreground transition-colors"
            aria-label={social.label}
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
          </a>
        );
      }),
    []
  );

  return (
    <section
      id="contact"
      className="py-20 sm:py-32"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-2xl text-center">
        <AnimatedSection direction="up">
          <h2
            id="contact-title"
            className="mb-4 font-mono text-primary text-sm uppercase tracking-wider"
          >
            {t.contact.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h3 className="mb-6 font-bold text-foreground text-3xl sm:text-4xl text-balance">
            {"Let's work together"}
          </h3>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={300}>
          <Button size="lg" asChild className="mb-12">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 w-4 h-4" />
              {t.contact.cta}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={400}>
          <div className="flex justify-center items-center gap-4">
            {socialLinks}
          </div>
        </AnimatedSection>

        {/* Additional contact info */}
        <AnimatedSection direction="up" delay={500}>
          <div className="mt-12 pt-8 border-border border-t">
            <p className="text-muted-foreground text-sm">
              {personalInfo.email}
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              {personalInfo.location}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default memo(ContactSection);
