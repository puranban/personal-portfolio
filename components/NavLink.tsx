import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const pathname = usePathname();
  const {
    className,
    children,
    href,
  } = props;

  return (
    <Link
      className={cn(className,
        `relative group overflow-x-hidden hover:text-hover transition-all duration-300
        ${ pathname === href && "text-hover" }`
      )}
      href={href}
    >
      { children }
      <span
        className={
          `w-full h-px bg-hover inline-block absolute left-0 bottom-0 group-hover:translate-x-0 transition-all duration-300
          ${ pathname === href ? "translate-x-0" : "-translate-x-[105%]" }`
        }
      />
    </Link>
  );
}

export default NavLink;
