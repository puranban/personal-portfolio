// ============================================================================
// Portfolio Data Types
// Demonstrates: TypeScript interfaces, union types, readonly arrays
// ============================================================================

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly companyUrl?: string;
  readonly position: string;
  readonly startDate: string;
  readonly endDate: string | null; // null = present
  readonly description: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly location: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly image?: string;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly technologies: readonly string[];
  readonly category: ProjectCategory;
  readonly featured: boolean;
  readonly impact?: string;
}

export type ProjectCategory =
  | 'web-app'
  | 'mobile'
  | 'open-source'
  | 'design-system'
  | 'api';

export interface SkillCategory {
  readonly name: string;
  readonly translationKey: 'frontend' | 'backend' | 'tools' | 'soft';
  readonly skills: readonly Skill[];
}

export interface Skill {
  readonly name: string;
  readonly level: SkillLevel;
  readonly icon?: string;
}

export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'learning';

export interface SocialLink {
  readonly platform: 'github' | 'linkedin' | 'twitter' | 'email';
  readonly url: string;
  readonly label: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly location: string;
  readonly availability: string;
  readonly resumeUrl?: string;
  readonly socials: readonly SocialLink[];
  readonly skills: string[];

}

// Certification data
export interface Certification {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly issueDate: string;
  readonly credentialUrl?: string;
  readonly skills: readonly string[];
}

// Navigation section for search/command palette
export interface NavigationSection {
  readonly id: string;
  readonly label: string;
  readonly translationKey: keyof import('../i18n/types').TranslationKeys['nav'];
  readonly href: string;
  readonly icon: string;
}
