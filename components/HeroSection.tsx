'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import Container from './Container';
import SectionWrapper from './SectionWrapper';
import AnimatedText from './AnimatedText';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  return (
    <SectionWrapper id="home"
      // className="h-dvh w-full mx-auto"
    >
      <Container className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left order-2 md:order-none">


          <div className="max-w-3xl">
            <motion.p
              className="font-mono text-portfolioAccent mb-5 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, my name is
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 overflow-hidden">
              <AnimatedText
                text="Puran Ban."
                className="text-hover leading-tight"
                delay={0.3}
                duration={0.04}
              />
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground/50 overflow-hidden">
              <AnimatedText 
                text="I build things for the web."
                className="leading-tight"
                delay={0.6}
                duration={0.04}
              />
            </h2>
            <motion.p
              className="text-foreground/70 text-base md:text-lg max-w-xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              I am a Front-end Developer specializing in building exceptional digital experiences.
              Currently, I am focused on creating accessible, human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Button variant="outline" className="rounded-3xl text-hover">
                Download cv
                <span> <Download /> </span>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="order-1 md:order-none mb-8 md:mb-0">
          <div className="h-full w-full relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.3, ease: "easeIn" }
              }}
            >
              <div className="w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten">
                <Image
                  src="/profile.png"
                  alt="puran ban"
                  priority
                  quality={100}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <ScrollIndicator targetId="about" />
    </SectionWrapper>
  );
}
export default HeroSection;
