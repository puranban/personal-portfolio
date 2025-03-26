import {AlignRight, ChartNoAxesGantt } from "lucide-react";
import { navbarData } from "@/constants";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import NavLink from "./NavLink";

interface Props {
  pathname?: string;
}

const MobileNav = (props: Props) => {
  const { pathname } = props;
  return (
    <Sheet>
      <SheetTrigger className="relative group h-6 w-6 flex items-center justify-center">
        <AlignRight
          className="absolute transition-all duration-500 ease-in-out transform group-hover:opacity-0 group-hover:translate-x-3"
        />

        <ChartNoAxesGantt
          className="absolute transition-all duration-300 ease-in-out transform opacity-0 group-hover:opacity-100"
        />
      </SheetTrigger>
      <SheetContent className="text-accent">
        <SheetTitle hidden />
        <SheetDescription hidden />
        <div>logo</div>
        <nav className="flex flex-col justify-center items-center gap-5">
          {navbarData?.map((link, i) => (
            <NavLink
              className="text-2xl text-white capitalize"
              key={i}
              href={link.href}
            >
              { link.title }
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
