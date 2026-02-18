'use client';

// memo, useMemo, Card components, external link patterns

import { memo, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { certifications } from '@/lib/data/portfolio';
import type { Certification } from '@/lib/data/types';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Award, ExternalLink, Calendar } from 'lucide-react';

// Individual certification card
const CertificationCard = memo(function CertificationCard({
  certification,
  translations,
  index,
}: {
  certification: Certification;
  translations: {
    viewCredential: string;
    issuedBy: string;
    skills: string;
  };
  index: number;
}) {
  return (
    <AnimatedSection
      direction="up"
      delay={index * 100}
      as="article"
      className="h-full"
    >
      <Card className="group flex flex-col hover:border-primary/50 h-full transition-colors">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 text-primary shrink-0">
              <Award className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="font-semibold text-foreground group-hover:text-primary text-base leading-tight transition-colors">
                {certification.title}
              </CardTitle>
              <p className="mt-1 text-muted-foreground text-sm">
                {translations.issuedBy}{' '}
                <span className="font-medium text-foreground">
                  {certification.issuer}
                </span>
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 justify-between gap-4">
          <div>
            {/* Issue date */}
            <div className="flex items-center gap-2 mb-3 text-muted-foreground text-sm">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <time>{certification.issueDate}</time>
            </div>

            {/* Skills covered */}
            <p className="mb-2 text-muted-foreground text-xs">
              {translations.skills}
            </p>
            <div className="flex flex-wrap gap-1.5" role="list" aria-label={translations.skills}>
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary px-2 py-0.5 rounded text-secondary-foreground text-xs"
                  role="listitem"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* View credential link */}
          {certification.credentialUrl && (
            <Button variant="outline" size="sm" asChild className="w-fit">
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                {translations.viewCredential}
                <span className="sr-only">
                  for {certification.title} by {certification.issuer}
                </span>
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
});

function CertificationsSection() {
  const { t } = useI18n();

  const translations = useMemo(
    () => ({
      viewCredential: t.certifications.viewCredential,
      issuedBy: t.certifications.issuedBy,
      skills: t.certifications.skills,
    }),
    [t.certifications]
  );

  return (
    <section
      id="certifications"
      className="py-20 sm:py-32"
      aria-labelledby="certifications-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-5xl">
        <AnimatedSection direction="up">
          <h2
            id="certifications-title"
            className="mb-12 font-mono text-primary text-sm uppercase tracking-wider"
          >
            {t.certifications.title}
          </h2>
        </AnimatedSection>

        <div className="gap-6 grid sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              translations={translations}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(CertificationsSection);
