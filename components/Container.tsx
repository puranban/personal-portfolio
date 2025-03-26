import { cn } from "@/lib/utils";

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
    <div className={cn(className, "px-5 max-w-screen-xl mx-auto w-full")}>
      { children }
    </div>
  )
};
export default Container;
