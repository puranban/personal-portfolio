'use client';

// Floating Header components
// CSS backdrop-filter, responsive design, ARIA accessibility,
// scroll-aware animations, content-width floating pill nav

import { useState, useEffect, useCallback, memo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { useTheme } from '@/lib/theme/context';
import { useIsMobile } from '@/hooks/use-media-query';
import { navigationSections } from '@/lib/data/portfolio';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sun,
  Moon,
  Monitor,
  Menu,
  X,
  Globe,
  Search,
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
}

// Memoized navigation link for performance
const NavLink = memo(function NavLink({
  href,
  label,
  onClick,
  isActive,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  isActive: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
        'hover:text-primary hover:bg-primary/5 focus-visible:text-primary',
        isActive
          ? 'text-primary bg-primary/10'
          : 'text-muted-foreground'
      )}
    >
      {label}
    </a>
  );
});

function Header({ onOpenSearch }: HeaderProps) {
  const { t, locale, setLocale, locales, localeNames } = useI18n();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isMobile = useIsMobile();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle scroll effect for header appearance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    // Update active section based on scroll position
    const sections = navigationSections.map((s) => s.id);
    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        {t.accessibility.skipToMain}
      </a>

      {/* Outer wrapper: fixed, full-width for centering, pointer-events-none so
          background content is fully clickable behind the header gap */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 px-4"
      >
        {/* Inner floating pill: content-width, pointer-events restored */}
        <header
          className={cn(
            'pointer-events-auto w-auto max-w-5xl',
            'rounded-2xl border transition-all duration-500',
            'px-4 sm:px-5',
            isScrolled
              ? 'bg-background/70 backdrop-blur-xl border-border/60 shadow-lg shadow-foreground/[0.03]'
              : 'bg-background/50 backdrop-blur-md border-transparent shadow-none'
          )}
          role="banner"
        >
          <div className="flex h-14 items-center gap-4">
            {/* Logo/Name */}
            <a
              href="#"
              className="shrink-0 text-base font-bold tracking-tight text-foreground hover:text-primary transition-colors"
              aria-label="Go to top"
            >
              {'<Puranban />'}
            </a>

            {/* Vertical separator - desktop only */}
            <div
              className="hidden lg:block h-5 w-px bg-border/60 shrink-0"
              aria-hidden="true"
            />

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigationSections.map((section) => (
                <NavLink
                  key={section.id}
                  href={section.href}
                  label={t.nav[section.translationKey]}
                  isActive={activeSection === section.id}
                />
              ))}
            </nav>

            {/* Spacer */}
            <div className="flex-1" aria-hidden="true" />

            {/* Actions cluster */}
            <div className="flex items-center gap-1">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onOpenSearch}
                aria-label={t.nav.search}
                className="hidden sm:flex h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Language Switcher */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t.nav.switchLanguage}
                    className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-1' align="end">
                  {locales.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => setLocale(loc)}
                      className={cn(locale === loc && 'bg-accent text-accent-foreground')}
                    >
                      {localeNames[loc]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Switcher */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t.nav.toggleTheme}
                    className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {resolvedTheme === 'dark' ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-1' align="end">
                  <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className={cn(theme === 'light' && 'bg-accent text-accent-foreground')}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className={cn(theme === 'dark' && 'bg-accent text-accent-foreground')}
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className={cn(theme === 'system' && 'bg-accent text-accent-foreground')}
                  >
                    <Monitor className="mr-2 h-4 w-4" />
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen
                    ? t.accessibility.closeMenu
                    : t.accessibility.menuToggle
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Overlay */}
      {/* Separate from header so it can go full-width while header stays pill-shaped */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={handleMobileNavClick}
          aria-hidden="true"
        />

        {/* Mobile menu panel */}
        <div
          className={cn(
            'absolute top-20 left-4 right-4 rounded-2xl bg-card border border-border shadow-xl',
            'transition-all duration-300',
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-4 scale-95'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col p-3 gap-1">
            {navigationSections.map((section) => (
              <a
                key={section.id}
                href={section.href}
                onClick={handleMobileNavClick}
                className={cn(
                  'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  activeSection === section.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {t.nav[section.translationKey]}
              </a>
            ))}
            <div className="h-px bg-border my-2" aria-hidden="true" />
            <Button
              variant="outline"
              onClick={() => {
                handleMobileNavClick();
                onOpenSearch();
              }}
              className="rounded-xl"
            >
              <Search className="mr-2 h-4 w-4" />
              {t.nav.search}
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
