'use client';

// Command Palette / Search Tree
// Dialog component, keyboard navigation, filtering, useCallback

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  type KeyboardEvent,
} from 'react';
import { useI18n } from '@/lib/i18n/context';
import { useDebounce } from '@/hooks/use-debounce';
import { useCommandK } from '@/hooks/use-keyboard-shortcut';
import { navigationSections } from '@/lib/data/portfolio';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import {
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
  Award,
  Search,
  Command,
} from 'lucide-react';

// Icon mapping for sections
const sectionIcons = {
  user: User,
  briefcase: Briefcase,
  folder: FolderOpen,
  code: Code,
  award: Award,
  mail: Mail,
} as const;

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  id: string;
  label: string;
  href: string;
  icon: keyof typeof sectionIcons;
}

function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const debouncedQuery = useDebounce(searchQuery, 150);

  // Register Cmd/Ctrl + K shortcut
  useCommandK(() => {
    onOpenChange(!open);
  });

  // Map navigation sections to searchable results
  const allResults = useMemo<SearchResult[]>(() => {
    return navigationSections.map((section) => ({
      id: section.id,
      label: t.nav[section.translationKey],
      href: section.href,
      icon: section.icon as keyof typeof sectionIcons,
    }));
  }, [t.nav]);

  // Filter results based on search query
  const filteredResults = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return allResults;
    }

    const query = debouncedQuery.toLowerCase();
    return allResults.filter(
      (result) =>
        result.label.toLowerCase().includes(query) ||
        result.id.toLowerCase().includes(query)
    );
  }, [allResults, debouncedQuery]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Reset state when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery('');
      setSelectedIndex(0);
    }
  }, [open]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredResults.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (filteredResults[selectedIndex]) {
            navigateToSection(filteredResults[selectedIndex]);
          }
          break;
        case 'Escape':
          event.preventDefault();
          onOpenChange(false);
          break;
      }
    },
    [filteredResults, selectedIndex, onOpenChange]
  );

  // Navigate to section and highlight
  const navigateToSection = useCallback(
    (result: SearchResult) => {
      onOpenChange(false);

      // Small delay to allow dialog to close
      setTimeout(() => {
        const element = document.getElementById(result.id);
        if (element) {
          // Smooth scroll to section
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Add highlight animation
          element.classList.add('highlight-section');
          setTimeout(() => {
            element.classList.remove('highlight-section');
          }, 3000);
        }
      }, 100);
    },
    [onOpenChange]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 p-0 sm:max-w-md overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{t.nav.search}</DialogTitle>
        </DialogHeader>

        {/* Search input */}
        <div className="flex items-center px-4 border-border border-b">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder={t.search.placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent px-3 focus:outline-none h-12 text-foreground placeholder:text-muted-foreground text-sm"
            autoFocus
            aria-label={t.search.placeholder}
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results"
            aria-activedescendant={
              filteredResults[selectedIndex]
                ? `result-${filteredResults[selectedIndex].id}`
                : undefined
            }
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 bg-muted px-1.5 py-0.5 rounded font-mono text-muted-foreground text-xs">
            <Command className="w-3 h-3" />K
          </kbd>
        </div>

        {/* Results */}
        <div
          id="search-results"
          role="listbox"
          className="p-2 max-h-[300px] overflow-y-auto"
        >
          {filteredResults.length > 0 ? (
            <>
              <p className="px-2 py-1.5 font-medium text-muted-foreground text-xs">
                {t.search.sections}
              </p>
              {filteredResults.map((result, index) => {
                const Icon = sectionIcons[result.icon] || User;
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={result.id}
                    id={`result-${result.id}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => navigateToSection(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-md w-full text-left transition-colors',
                      isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="font-medium text-sm">{result.label}</span>
                  </button>
                );
              })}
            </>
          ) : (
            <p className="px-2 py-8 text-muted-foreground text-sm text-center">
              {t.search.noResults}
            </p>
          )}
        </div>

        {/* Footer hint */}
        <div className="flex justify-between items-center bg-muted/50 px-4 py-2 border-border border-t text-muted-foreground text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-background px-1 py-0.5 border border-border rounded">
                ↑
              </kbd>
              <kbd className="bg-background px-1 py-0.5 border border-border rounded">
                ↓
              </kbd>
              <span className="ml-1">navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-background px-1.5 py-0.5 border border-border rounded">
                ↵
              </kbd>
              <span className="ml-1">select</span>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="bg-background px-1.5 py-0.5 border border-border rounded">
              esc
            </kbd>
            <span className="ml-1">close</span>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default memo(CommandPalette);
