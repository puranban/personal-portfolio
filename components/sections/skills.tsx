'use client';

// Grid layouts, data-driven rendering, visual skill indicators

import { memo, useMemo, useCallback } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { skillCategories } from '@/lib/data/portfolio';
import type { SkillCategory, SkillLevel } from '@/lib/data/types';
import { AnimatedSection } from '@/components/ui/animated-section';
import { cn } from '@/lib/utils';

// Skill level indicator component
const SkillLevelIndicator = memo(function SkillLevelIndicator({
  level,
}: {
  level: SkillLevel;
}) {
  const levels: Record<SkillLevel, { bars: number; label: string }> = {
    expert: { bars: 4, label: 'Expert' },
    advanced: { bars: 3, label: 'Advanced' },
    intermediate: { bars: 2, label: 'Intermediate' },
    learning: { bars: 1, label: 'Learning' },
  };

  const { bars, label } = levels[level];

  return (
    <div className="flex items-center gap-1" aria-label={`Skill level: ${label}`}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            'rounded-full w-1.5 h-1.5 transition-colors',
            i <= bars ? 'bg-primary' : 'bg-border'
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
});

// Single skill item
const SkillItem = memo(function SkillItem({
  name,
  level,
}: {
  name: string;
  level: SkillLevel;
}) {
  return (
    <div className="flex justify-between items-center hover:bg-muted/50 px-3 py-2 rounded-md transition-colors">
      <span className="text-foreground text-sm">{name}</span>
      <SkillLevelIndicator level={level} />
    </div>
  );
});

// Skill category card
const SkillCategoryCard = memo(function SkillCategoryCard({
  category,
  translatedName,
  index,
}: {
  category: SkillCategory;
  translatedName: string;
  index: number;
}) {
  return (
    <AnimatedSection
      direction="up"
      delay={index * 100}
      as="div"
      className="bg-card p-6 border border-border rounded-xl"
    >
      <h3 className="mb-4 font-semibold text-primary text-sm uppercase tracking-wider">
        {translatedName}
      </h3>
      <div className="space-y-1">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </AnimatedSection>
  );
});

function SkillsSection() {
  const { t } = useI18n();

  // Memoized translation getter
  const getTranslatedName = useCallback(
    (key: SkillCategory['translationKey']) => {
      return t.skills[key];
    },
    [t.skills]
  );

  // Skill level legend
  const legendItems = useMemo(
    () => [
      { level: 'expert' as const, label: 'Expert' },
      { level: 'advanced' as const, label: 'Advanced' },
      { level: 'intermediate' as const, label: 'Intermediate' },
      { level: 'learning' as const, label: 'Learning' },
    ],
    []
  );

  return (
    <section
      id="skills"
      className="bg-muted/30 py-20 sm:py-32"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-5xl">
        <AnimatedSection direction="up">
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-end gap-4 mb-12">
            <h2
              id="skills-title"
              className="font-mono text-primary text-sm uppercase tracking-wider"
            >
              {t.skills.title}
            </h2>

            {/* Legend */}
            <div
              className="flex flex-wrap gap-4 text-muted-foreground text-xs"
              role="legend"
              aria-label="Skill level indicators"
            >
              {legendItems.map(({ level, label }) => (
                <div key={level} className="flex items-center gap-2">
                  <SkillLevelIndicator level={level} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="gap-6 grid sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.translationKey}
              category={category}
              translatedName={getTranslatedName(category.translationKey)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
