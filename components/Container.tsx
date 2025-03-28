import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: Props) => {
  const {
    children,
    className
  } = props;

  return (
    <motion.div className={cn(
      "relative w-full flex md:flex-row flex-col justify-center items-center",
      className,
    )}>
      { children }
    </motion.div>
  )
};
export default Container;
