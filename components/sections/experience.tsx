'use client';

// useMemo, map/filter patterns, date formatting, complex layouts

import { memo, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { experiences } from '@/lib/data/portfolio';
import type { Experience } from '@/lib/data/types';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ExternalLink } from 'lucide-react';

// Format date string to readable format
function formatDate(dateString: string, locale: string): string {
  // const date = new Date(dateString);
  const [year, month] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1);

  return date.toLocaleDateString(locale === 'ne' ? 'en-US' : locale, {
    month: 'short',
    year: 'numeric',
  });
}

// Experience card component
const ExperienceCard = memo(function ExperienceCard({
  experience,
  locale,
  presentLabel,
  index,
}: {
  experience: Experience;
  locale: string;
  presentLabel: string;
  index: number;
}) {
  const dateRange = useMemo(() => {
    const start = formatDate(experience.startDate, locale);
    const end = experience.endDate
      ? formatDate(experience.endDate, locale)
      : presentLabel;
    return `${start} — ${end}`;
  }, [experience.startDate, experience.endDate, locale, presentLabel]);

  return (
    <AnimatedSection
      direction="up"
      delay={index * 100}
      as="article"
      className="relative gap-4 md:gap-8 grid md:grid-cols-[200px_1fr] pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div
        className="hidden md:block top-14 bottom-2 left-[199px] absolute bg-border border w-px"
        aria-hidden="true"
      />

      {/* Date column */}
      <div className="md:text-right">
        <time
          dateTime={experience.startDate}
          className="font-mono text-muted-foreground text-sm"
        >
          {dateRange}
        </time>
        <p className="mt-1 text-muted-foreground/60 text-xs">
          {experience.location}
        </p>
      </div>

      {/* Content column */}
      <div className="relative">
        {/* Timeline dot */}
        <div
          className="hidden md:block top-2 -left-[21px] absolute bg-primary rounded-full ring-4 ring-background w-2.5 h-2.5"
          aria-hidden="true"
        />

        <div className="group">
          <h3 className="mb-1 font-semibold text-foreground text-lg">
            {experience.position}
          </h3>
          <p className="mb-3 text-muted-foreground text-base">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                {experience.company}
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ) : (
              experience.company
            )}
          </p>

          <p className="mb-4 text-muted-foreground/80 text-sm leading-relaxed">
            {experience.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-4" role="list">
            {experience.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-muted-foreground text-sm"
              >
                <span
                  className="bg-primary mt-1.5 rounded-full w-1.5 h-1.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-secondary px-2.5 py-1 rounded-md font-medium text-secondary-foreground text-xs"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
});

function ExperienceSection() {
  const { t, locale } = useI18n();

  return (
    <section
      id="experience"
      className="bg-muted/30 py-20 sm:py-32"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-4xl">
        <AnimatedSection direction="up">
          <h2
            id="experience-title"
            className="mb-12 font-mono text-primary text-sm uppercase tracking-wider"
          >
            {t.experience.title}
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              locale={locale}
              presentLabel={t.experience.present}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ExperienceSection);
