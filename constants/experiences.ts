interface JobExperience {
  id: number;
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
}

export const jobExperiences: JobExperience[] = [
  {
    id: 1,
    company: "ToggleCorp Business Solution",
    title: "Frontend Developer",
    period: "October 2021 - December 2024",
    responsibilities: [
      "Led the development of 5 major applications features, improving user engagement through advanced UX designs",
      "Streamlined data migration with Firebase and cloud functions, resolving complex issues in data management",
      "Implemented dynamic maps and interactive forms using Mapbox GL JS, improving data visualization",
      "Authored comprehensive technical documentation and CI/CD guidelines, reducing onboarding time by 50%",
      "Collaborated with product and design teams to deliver features ahead of schedule",
      "Mentored junior developers in React best practices and modern frontend development patterns"
    ]
  },
  {
    id: 2,
    company: "Kagati Tech (Kunyo Co)",
    title: "Frontend Developer",
    period: "January 2021 - October 2021",
    responsibilities: [
      "Developed responsive e-commerce platforms using React and Next.js",
      "Built and integrated secure payment gateway interfaces handling 100+ daily transactions",
      "Implemented advanced state management solutions using Redux and Context API",
      "Created 20+ reusable React components, reducing development times",
      "Achieved 99% mobile responsiveness across all applications"
    ]
  },
  {
    id: 3,
    company: "Snigdh Tech Business Solution",
    title: "Jr. Frontend Developer",
    period: "January 2020 - December 2020",
    responsibilities: [
      "Developed responsive web applications using React.js and modern JavaScript",
      "Built and maintained HRMS and Accounting platforms serving business clients",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Collaborated in an Agile environment to deliver 7+ mobile-first applications"
    ]
  }
];
