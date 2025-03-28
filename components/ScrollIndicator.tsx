import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
  targetId: string;
}

export default function ScrollIndicator(props: Props) {
const  { targetId }: { targetId: string } = props;

  const scrollToNext = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 2,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }}
      onClick={scrollToNext}
    >
      <ChevronDown className="h-8 w-8 text-hover animate-bounce" />
    </motion.div>
  );
}
