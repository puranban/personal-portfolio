'use client';

// useMemo filtering, Card components, image handling, a11y

import { memo, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { projects } from '@/lib/data/portfolio';
import type { Project } from '@/lib/data/types';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

// Project card component
const ProjectCard = memo(function ProjectCard({
  project,
  translations,
  index,
}: {
  project: Project;
  translations: {
    viewProject: string;
    viewCode: string;
    technologies: string;
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
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              {project.featured && (
                <span className="inline-flex items-center gap-1 mb-2 font-medium text-primary text-xs">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
              <CardTitle className="font-semibold text-foreground group-hover:text-primary text-lg transition-colors">
                {project.title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="mt-2 text-muted-foreground text-sm leading-relaxed">
            {project.longDescription || project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          {/* Impact metric */}
          {project.impact && (
            <div className="bg-primary/5 mb-4 p-3 border border-primary/10 rounded-md">
              <p className="text-foreground text-sm">
                <span className="font-medium">Impact:</span> {project.impact}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <p className="mb-2 text-muted-foreground text-xs">
              {translations.technologies}
            </p>
            <div className="flex flex-wrap gap-1.5" role="list">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary px-2 py-0.5 rounded text-secondary-foreground text-xs"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="gap-3 pt-0">
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                {translations.viewProject}
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 w-3.5 h-3.5" />
                {translations.viewCode}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </AnimatedSection>
  );
});

function ProjectsSection() {
  const { t } = useI18n();

  // Memoize filtered projects (featured first)
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, []);

  const translations = useMemo(
    () => ({
      viewProject: t.projects.viewProject,
      viewCode: t.projects.viewCode,
      technologies: t.projects.technologies,
    }),
    [t.projects]
  );

  return (
    <section
      id="projects"
      className="py-20 sm:py-32"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto px-4 sm:px-6 max-w-5xl">
        <AnimatedSection direction="up">
          <h2
            id="projects-title"
            className="mb-12 font-mono text-primary text-sm uppercase tracking-wider"
          >
            {t.projects.title}
          </h2>
        </AnimatedSection>

        <div className="gap-6 grid sm:grid-cols-2">
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              translations={translations}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProjectsSection);
