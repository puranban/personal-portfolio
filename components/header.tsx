'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/constants";

import Container from "./Container";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-b-hover bg-background text-white/80">
      <Container className="py-5 flex justify-between items-center">
        <Logo title="Puran" subtitle="." />
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wide">
          {navbarData?.map((item) => (
            <Link
              className={
                `relative group overflow-x-hidden hover:text-hover transition-all duration-300
                ${ pathname === item?.href && "text-hover" }`
              }
              key={item.href}
              href={item.href}
            >
              {item.title}
              <span
                className={
                  `w-full h-px bg-hover inline-block absolute left-0 bottom-0 group-hover:translate-x-0 transition-all duration-300
                  ${ pathname === item?.href ? "translate-x-0" : "-translate-x-[105%]" }`
                }
              />
            </Link>
          ))}
          <Link
            className="text-sm bg-lightSkyColor/10 px-4 py-2 rounded-md border border-hover/10
            hover:bg-hover hover:border-hover hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="/resume.pdf"
          >
            Hire me
          </Link>
          <ModeToggle />
        </div>

        {/* NOTE: menu icon form small screens */}
        <div className="md:hidden" >
          <MobileNav pathname={pathname} />
      </div>
        {/* <button
          aria-label="toggle"
          className="inline-flex md:hidden relative
          hover:text-hover transition-all duration-300"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </button> */}
      </Container>

    </header>
  )
}
export default Header;
