import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
  id: string;
}

const SectionWrapper = (props: Props) => {
  const {
    children,
    id,
  } = props;
  return (
    <motion.section
      id={id}
      // className="h-screen w-full snap-start flex items-center justify-center"
      className="min-h-screen relative flex flex-col justify-center items-start px-6 md:px-16 lg:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
