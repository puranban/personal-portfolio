import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const skills = [
  "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "React Native",
  "Next.js", "GraphQL", "Tailwind", "Redux", "Webpack", "Babel",
  "Git", "Docker", "Firebase", "Android Studio", "CI/CD", "Mapbox",
  "Jest", "React Testing Library", "Performance Optimization"
];

const About = () => {
  return (
    <SectionWrapper id="about" className="justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col justify-center"
      >
        <div className="flex gap-8 mb-8 text-4xl font-semibold">
          <h2 className="shrink-0 text-4xl">
            <span>01.</span> About Me
          </h2>
          <hr className="w-[35%] border-1 border-hover m-0 p-0 self-end" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12">
          <motion.div
            className="md:col-span-2 space-y-4 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hello! I am Puran, a frontend developer with 5 years of experience building exceptional web applications.
              My journey in software development has been driven by a passion for creating intuitive and efficient user interfaces.
            </p>

            <p>
              My expertise spans across modern frontend technologies, with a particular focus on React, TypeScript, and Next.js.
              I've successfully led the development of multiple applications, collaborating closely with cross-functional teams
              to deliver high-quality products that meet both user needs and business objectives.
            </p>

            <p>
              Throughout my career at companies like ToggleCorp, Kagati Tech, and Snigdh Tech,
              I've honed my skills in developing responsive web applications, optimizing performance,
              and implementing advanced state management solutions.
              I'm also experienced in mentoring junior developers and contributing to technical documentation.
            </p>

            <p>
              Here are some technologies I have been working with recently:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 pt-4">
              {skills.slice(0, 9).map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="h-4 w-4 text-portfolioAccent" />
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative group max-w-xs cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative rounded-md w-full max-w-xs mx-auto aspect-square">
              <div className="absolute border-2 border-foreground rounded-md translate-x-4 translate-y-4 inset-0 bg-hover/15 group-hover:bg-transparent z-0 ease-in duration-200"></div>
              <Image
                fill
                src="/about.png"
                alt="Puran Ban"
                className="object-cover rounded-md w-full h-full grayscale group-hover:grayscale-0 hover:-translate-y-1 hover:-translate-x-1 ease-out duration-200"
              />
            </div>
            {/* <div className="absolute -inset-2 border-2 border-portfolioAccent rounded-md -z-10 translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div> */}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
