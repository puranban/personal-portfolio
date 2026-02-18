'use client';

// CTA patterns, accessible download links, semantic HTML

import { memo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { personalInfo } from '@/lib/data/portfolio';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

function CVDownloadSection() {
  const { t } = useI18n();

  return (
    <section
      id="cv"
      className="py-16 sm:py-24"
      aria-labelledby="cv-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-3xl">
        <AnimatedSection direction="up">
          <div className="relative bg-card p-8 sm:p-12 border border-border rounded-2xl overflow-hidden text-center">
            {/* Subtle decorative background */}
            <div
              className="-z-10 absolute inset-0"
              aria-hidden="true"
            >
              <div className="top-0 right-0 absolute bg-primary/5 blur-3xl rounded-full w-64 h-64 -translate-y-1/2 translate-x-1/2" />
              <div className="bottom-0 left-0 absolute bg-primary/5 blur-3xl rounded-full w-64 h-64 -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="flex justify-center mb-6">
              <div className="flex justify-center items-center bg-primary/10 rounded-full w-14 h-14 text-primary">
                <FileText className="w-7 h-7" aria-hidden="true" />
              </div>
            </div>

            <h2
              id="cv-title"
              className="mb-3 font-bold text-foreground text-2xl sm:text-3xl text-balance"
            >
              {t.cv.title}
            </h2>

            <p className="mx-auto mb-2 max-w-lg text-muted-foreground text-base leading-relaxed">
              {t.cv.subtitle}
            </p>

            <p className="mx-auto mb-8 max-w-md text-muted-foreground/70 text-sm">
              {t.cv.description}
            </p>

            <Button size="lg" asChild>
              <a
                href={personalInfo.resumeUrl}
                download="puranban_frontend_cv.pdf"
                aria-label={`${t.cv.downloadBtn} - Puranban's resume`}
              >
                <Download className="mr-2 w-4 h-4" />
                {t.cv.downloadBtn}
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default memo(CVDownloadSection);
