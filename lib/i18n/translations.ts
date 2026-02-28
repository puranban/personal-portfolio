// Translation Dictionaries
// Type-safe object literals, Record types

import type { Locale, TranslationKeys } from './types';

const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
      search: 'Search',
      toggleTheme: 'Toggle theme',
      switchLanguage: 'Switch language',
    },
    hero: {
      greeting: 'Hi, I am',
      title: 'Senior Frontend Engineer',
      subtitle: 'Architecting scalable, high-performance web applications.',
      description:
        'With 6+ years of experience building enterprise SaaS and data-driven platforms, I specialize in React and TypeScript architectures that balance performance, maintainability, and user experience.',
      cta: 'Let’s Connect',
      resumeBtn: 'View Resume',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'I’m a Senior Frontend Engineer with over six years of experience designing and scaling modern web applications. I specialize in React and TypeScript ecosystems, building frontend systems that are not only visually refined but architecturally strong and maintainable long-term.',
      paragraph2:
        'My work goes beyond implementing UI. I focus on system design, performance optimization, accessibility, and clean component architecture. I enjoy translating complex product requirements into intuitive, reliable user experiences—whether it’s enterprise SaaS platforms, geospatial data systems, or transactional applications.',
      paragraph3:
        'I believe great frontend engineering sits at the intersection of thoughtful design, predictable state management, and collaborative problem-solving. Outside of work, I continuously refine my craft by exploring emerging technologies, improving architectural patterns, and mentoring developers who want to grow into confident engineers.',
    },
    experience: {
      title: 'Work Experience',
      present: 'Present',
    },
    projects: {
      title: 'Selected Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      technologies: 'Technologies',
    },
    skills: {
      title: 'Skills & Technologies',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Platforms',
      soft: 'Soft Skills',
    },
    certifications: {
      title: 'Certifications',
      viewCredential: 'View Credential',
      issuedBy: 'Issued by',
      skills: 'Skills Covered',
    },
    cv: {
      title: 'Download CV',
      subtitle: 'Get a comprehensive overview of my experience, skills, and qualifications.',
      downloadBtn: 'Download CV (PDF)',
      description: 'My CV includes detailed work history, education, certifications, and a complete list of technical skills.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        'I am currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Say Hello',
    },
    accessibility: {
      skipToMain: 'Skip to main content',
      menuToggle: 'Toggle navigation menu',
      closeMenu: 'Close navigation menu',
    },
    search: {
      placeholder: 'Search sections...',
      noResults: 'No results found',
      sections: 'Sections',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      contact: 'Contact',
      search: 'Rechercher',
      toggleTheme: 'Changer le thème',
      switchLanguage: 'Changer de langue',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      title: 'Ingénieur Frontend',
      subtitle: 'Création d\'expériences numériques accessibles et pixel-perfect pour le web.',
      description:
        'Avec plus de 6 ans d\'expérience dans la création d\'applications React performantes, je me spécialise dans la création d\'interfaces utilisateur intuitives qui allient un design réfléchi à une ingénierie robuste.',
      cta: 'Me Contacter',
      resumeBtn: 'Télécharger CV',
    },
    about: {
      title: 'À Propos de Moi',
      paragraph1:
        'Je suis un ingénieur frontend passionné avec une expertise en React, TypeScript et les technologies web modernes. Mon parcours dans le développement logiciel a commencé par une curiosité sur la façon dont les produits numériques façonnent les expériences utilisateur.',
      paragraph2:
        'Actuellement, je me concentre sur la création d\'applications accessibles et performantes qui privilégient l\'expérience utilisateur. Je crois que les grands logiciels naissent de l\'intersection d\'un code propre, d\'un design réfléchi et d\'une profonde empathie pour les utilisateurs finaux.',
      paragraph3:
        'Quand je ne code pas, vous pouvez me trouver en train d\'explorer de nouvelles technologies, de contribuer à des projets open-source ou de mentorer des développeurs en herbe dans la communauté.',
    },
    experience: {
      title: 'Expérience Professionnelle',
      present: 'Présent',
    },
    projects: {
      title: 'Projets Sélectionnés',
      viewProject: 'Voir le Projet',
      viewCode: 'Voir le Code',
      technologies: 'Technologies',
    },
    skills: {
      title: 'Compétences & Technologies',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Outils & Plateformes',
      soft: 'Compétences Interpersonnelles',
    },
    certifications: {
      title: 'Certifications',
      viewCredential: 'Voir le certificat',
      issuedBy: 'Délivré par',
      skills: 'Compétences couvertes',
    },
    cv: {
      title: 'Télécharger CV',
      subtitle: 'Obtenez un aperçu complet de mon expérience, mes compétences et qualifications.',
      downloadBtn: 'Télécharger CV (PDF)',
      description: 'Mon CV comprend un historique détaillé de travail, formation, certifications et une liste complète de compétences techniques.',
    },
    contact: {
      title: 'Me Contacter',
      subtitle:
        'Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question ou que vous vouliez simplement dire bonjour, ma boîte de réception est toujours ouverte.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Dire Bonjour',
    },
    accessibility: {
      skipToMain: 'Aller au contenu principal',
      menuToggle: 'Basculer le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
    },
    search: {
      placeholder: 'Rechercher des sections...',
      noResults: 'Aucun résultat trouvé',
      sections: 'Sections',
    },
  },
  ne: {
    nav: {
      about: 'बारेमा',
      experience: 'अनुभव',
      projects: 'परियोजनाहरू',
      skills: 'सीपहरू',
      certifications: 'प्रमाणपत्रहरू',
      contact: 'सम्पर्क',
      search: 'खोज्नुहोस्',
      toggleTheme: 'थिम बदल्नुहोस्',
      switchLanguage: 'भाषा बदल्नुहोस्',
    },
    hero: {
      greeting: 'नमस्ते, म हुँ',
      title: 'Frontend Engineer',
      subtitle: 'वेबको लागि पहुँचयोग्य, पिक्सेल-परफेक्ट डिजिटल अनुभवहरू निर्माण गर्दै।',
      description:
        '६+ वर्षको अनुभवसहित प्रदर्शनकारी React अनुप्रयोगहरू बनाउँदै, म सोचपूर्ण डिजाइन र बलियो इन्जिनियरिङलाई मिलाउने सहज प्रयोगकर्ता इन्टरफेसहरू सिर्जना गर्नमा विशेषज्ञ छु।',
      cta: 'सम्पर्क गर्नुहोस्',
      resumeBtn: 'बायोडाटा डाउनलोड',
    },
    about: {
      title: 'मेरो बारेमा',
      paragraph1:
        'म React, TypeScript, र आधुनिक वेब प्रविधिहरूमा विशेषज्ञता भएको एक उत्साही फ्रन्टएन्ड इन्जिनियर हुँ। सफ्टवेयर विकासमा मेरो यात्रा डिजिटल उत्पादनहरूले प्रयोगकर्ता अनुभवहरूलाई कसरी आकार दिन्छ भन्ने जिज्ञासाबाट सुरु भयो।',
      paragraph2:
        'हाल, म प्रयोगकर्ता अनुभवलाई प्राथमिकता दिने पहुँचयोग्य, प्रदर्शनकारी अनुप्रयोगहरू निर्माण गर्नमा केन्द्रित छु। मलाई विश्वास छ कि उत्कृष्ट सफ्टवेयर सफा कोड, सोचपूर्ण डिजाइन, र अन्तिम प्रयोगकर्ताहरूको लागि गहिरो सहानुभूतिको चौराहाबाट आउँछ।',
      paragraph3:
        'जब म कोडिङ गरिरहेको छैन, तपाईं मलाई नयाँ प्रविधिहरू अन्वेषण गर्दै, खुला स्रोत परियोजनाहरूमा योगदान गर्दै, वा समुदायमा महत्वाकांक्षी विकासकर्ताहरूलाई मार्गदर्शन गर्दै पाउन सक्नुहुन्छ।',
    },
    experience: {
      title: 'कार्य अनुभव',
      present: 'वर्तमान',
    },
    projects: {
      title: 'चयनित परियोजनाहरू',
      viewProject: 'परियोजना हेर्नुहोस्',
      viewCode: 'कोड हेर्नुहोस्',
      technologies: 'प्रविधिहरू',
    },
    skills: {
      title: 'सीप र प्रविधिहरू',
      frontend: 'फ्रन्टएन्ड',
      backend: 'ब्याकएन्ड',
      tools: 'उपकरण र प्लेटफर्महरू',
      soft: 'सफ्ट स्किल्स',
    },
    certifications: {
      title: 'प्रमाणपत्रहरू',
      viewCredential: 'प्रमाणपत्र हेर्नुहोस्',
      issuedBy: 'जारी गर्ने',
      skills: 'समावेश गरिएका सीपहरू',
    },
    cv: {
      title: 'बायोडाटा डाउनलोड',
      subtitle: 'मेरो अनुभव, सीप र योग्यताहरूको विस्तृत अवलोकन प्राप्त गर्नुहोस्।',
      downloadBtn: 'बायोडाटा डाउनलोड (PDF)',
      description: 'मेरो बायोडाटामा विस्तृत कार्य इतिहास, शिक्षा, प्रमाणपत्रहरू र प्राविधिक सीपहरूको पूर्ण सूची समावेश छ।',
    },
    contact: {
      title: 'सम्पर्क गर्नुहोस्',
      subtitle:
        'म हाल नयाँ अवसरहरूको लागि खुला छु। तपाईंसँग प्रश्न छ वा केवल नमस्कार भन्न चाहनुहुन्छ भने, मेरो इनबक्स सधैं खुला छ।',
      email: 'इमेल',
      linkedin: 'लिंक्डइन',
      github: 'गिटहब',
      cta: 'नमस्कार भन्नुहोस्',
    },
    accessibility: {
      skipToMain: 'मुख्य सामग्रीमा जानुहोस्',
      menuToggle: 'नेभिगेसन मेनु टगल गर्नुहोस्',
      closeMenu: 'नेभिगेसन मेनु बन्द गर्नुहोस्',
    },
    search: {
      placeholder: 'खण्डहरू खोज्नुहोस्...',
      noResults: 'कुनै परिणाम फेला परेन',
      sections: 'खण्डहरू',
    },
  },
};

export default translations;
