'use client';

import { motion } from 'framer-motion';
import Social from '@/components/Social';
import Resume from './resume/page';
import Work from './work/page';
import Contact from './contact/page';
import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import About from './about/page';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />

      {/* Side Social Links */}
      <motion.div className="fixed bottom-0 left-6 z-20 hidden md:block">
        <Social orientation="vertical" />
      </motion.div>

      {/* Side Email */}
      <motion.div
        className="fixed bottom-0 right-6 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <a
            style={{ writingMode: 'vertical-rl' }}
            className="font-mono text-foreground/60 hover:text-hover tracking-widest writing-vertical transition-colors duration-300"
            href="mailto:puranban77@gmail.com"
          >
            puranban77@gmail.com
          </a>
          <div className="w-px h-24 bg-foreground/20 mt-4"></div>
        </div>
      </motion.div>

      <main>
        <HeroSection />
        <About />
        <Work />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
