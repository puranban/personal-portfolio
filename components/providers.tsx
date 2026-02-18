'use client';

// Client Providers Wrapper
// Composition pattern, client component isolation

import type { ReactNode } from 'react';
import { ThemeProvider } from '@/lib/theme/context';
import { I18nProvider } from '@/lib/i18n/context';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <I18nProvider defaultLocale="en">{children}</I18nProvider>
    </ThemeProvider>
  );
}
