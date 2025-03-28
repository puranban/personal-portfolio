'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navbarData } from '@/constants';

import { ModeToggle } from './ModeToggle';

import Logo from './Logo';
import MobileNav from './MobileNav';

const Header = () => {
  const pathname = window.location.hash;

  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're at the top
      setAtTop(currentScrollY < 20);

      // Only show the navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start(visible ? 'visible' : 'hidden');
  }, [controls, visible]);

  const navVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    hidden: { y: -100, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-6 md:px-16 lg:px-24",
        !atTop ? "backdrop-blur-xl bg-background/70 py-4" : "py-6"
      )}
      initial="visible"
      animate={controls}
      variants={navVariants}
    >
      <div className="flex items-center justify-between">
        <motion.a
          className="bg-hover/80 flex items-center gap-2 rounded-md"
          href="#home"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <div className=" z-10 text-foreground h-10 w-10 flex items-center justify-center rounded-md font-bold">
            P
          </div>
        </motion.a>

        <div className="flex items-center gap-6 md:gap-10">
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navbarData.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`
                  text-foreground/70 hover:text-hover transition-colors duration-300 flex items-center
                  ${pathname === item.href && "text-hover" }
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
              >
                {/* <span className="text-portfolioAccent font-mono mr-1 text-xs">{item.href}.</span> */}
                <span>{item.title}</span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <motion.a
              href="#resume"
              className="hidden md:inline-flex items-center justify-center h-9 px-4 py-2 border border-portfolioAccent text-portfolioAccent text-sm rounded hover:bg-portfolioAccent/10 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
      /* <header className="border-b border-b-hover bg-background text-white/80">
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

          NOTE: menu icon form small screens
          <div className="md:hidden" >
            <MobileNav pathname={pathname} />
          </div>
          <button
            aria-label="toggle"
            className="inline-flex md:hidden relative
            hover:text-hover transition-all duration-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu />
          </button>
        </Container>

      </header>
      */
  );
}
export default Header;
