'use client';

// Date API, semantic HTML, accessibility

import { memo, useMemo } from 'react';
import { personalInfo } from '@/lib/data/portfolio';

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      className="py-8 border-border border-t"
      role="contentinfo"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {currentYear} {personalInfo.name}. Built with Next.js & React.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
              aria-label="Back to top"
            >
              Back to top
            </a>
          </div>
        </div>

        {/* Built with credits */}
        <p className="mt-4 text-muted-foreground/60 text-xs text-center">
          {'Designed & built by Puran ban with accessibility and performance in mind.'}
          <br />
          React, TypeScript, Next.js, Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
