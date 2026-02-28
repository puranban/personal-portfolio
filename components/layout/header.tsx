'use client';

// Header Component with Navigation
// useState, useEffect, useCallback, event listeners, a11y

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
        'relative px-3 py-2 font-medium text-sm transition-colors',
        'hover:text-primary focus-visible:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {label}
      {isActive && (
        <span className="bottom-0 left-1/2 absolute bg-primary w-4 h-0.5 -translate-x-1/2" />
      )}
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

  // Handle scroll effect for header background
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

  // Close mobile menu on resize
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

      <header
        className={cn(
          'top-0 right-0 left-0 z-50 fixed transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <a
              href="#"
              className="font-bold text-foreground hover:text-primary text-lg tracking-tight transition-colors"
              aria-label="Go to top"
            >
              {'<Puranban />'}
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1"
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

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onOpenSearch}
                aria-label={t.nav.search}
                className="hidden sm:flex"
              >
                <Search className="w-4 h-4" />
              </Button>

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t.nav.switchLanguage}
                  >
                    <Globe className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-1' align="end">
                  {locales.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => setLocale(loc)}
                      className={cn(locale === loc && 'bg-accent')}
                    >
                      {localeNames[loc]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t.nav.toggleTheme}
                  >
                    {resolvedTheme === 'dark' ? (
                      <Moon className="w-4 h-4" />
                    ) : (
                      <Sun className="w-4 h-4" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-1' align="end">
                  <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className={cn(theme === 'light' && 'bg-accent')}
                  >
                    <Sun className="mr-2 w-4 h-4" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className={cn(theme === 'dark' && 'bg-accent')}
                  >
                    <Moon className="mr-2 w-4 h-4" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className={cn(theme === 'system' && 'bg-accent')}
                  >
                    <Monitor className="mr-2 w-4 h-4" />
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen
                    ? t.accessibility.closeMenu
                    : t.accessibility.menuToggle
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden top-full right-0 left-0 absolute bg-background border-border border-b transition-all duration-300',
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-2 p-4">
            {navigationSections.map((section) => (
              <a
                key={section.id}
                href={section.href}
                onClick={handleMobileNavClick}
                className={cn(
                  'px-4 py-3 rounded-lg font-medium text-base transition-colors',
                  activeSection === section.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {t.nav[section.translationKey]}
              </a>
            ))}
            <Button
              variant="outline"
              onClick={() => {
                handleMobileNavClick();
                onOpenSearch();
              }}
              className="mt-2"
            >
              <Search className="mr-2 w-4 h-4" />
              {t.nav.search}
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
