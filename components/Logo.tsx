import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
}

const Logo = (props: Props) => {
  const {
    className,
    title,
    subtitle,
  } = props;
  return (
    <div className="font-semibold text-2xl group">
      <Link href="/">
        <h2
          className={cn(
            className,
            "hover:text-hover cursor-pointer transition-all duration-300"
          )}
        >
          { title } <span className='text-lightSkyColor'> { subtitle } </span>
        </h2>
      </Link>
    </div>
  );
}
export default Logo;
