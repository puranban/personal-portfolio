import { motion } from 'framer-motion';

import SectionWrapper from '@/components/SectionWrapper';
import Social from '@/components/Social';

function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        <div className="flex justify-center gap-8 mb-8 text-4xl font-semibold">
          <h2 className="shrink-0 text-4xl">
            <span>03.</span> Get In Touch
          </h2>
        </div>

        <motion.p
          className="text-foreground/70 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
          I&apos;ll do my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:puranban77@gmail.com"
            className="inline-flex items-center justify-center h-14 px-10 py-4 bg-transparent border border-foreground text-foreground rounded hover:bg-hover/10 transition-colors text-lg"
          >
            Say Hello
          </a>
        </motion.div>

        <div className="mt-16">
          <Social orientation="horizontal" />
        </div>

        <motion.p 
          className="text-foreground/50 text-sm mt-16 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Designed & Built by Puran Ban
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
export default Contact;
