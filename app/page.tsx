"use client";

import { Download } from "lucide-react";

import Container from "@/components/Container";
import HeroPhoto from "@/components/HeroPhoto";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <section className="h-full w-full mx-auto">
        <Container className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left order-2 md:order-none">
            <ScrollAnimation>
              <span className="text-xl">Software Developer </span>
              <h1 className="heading-3 mb-6">
                Hello I am
                <br />
                <span className="text-hover"> Puran Ban </span>
              </h1>
              <p className="max-w-[500px] text-white/80 mb-6">
                I excel at crafting elegant digital experience and
                I am proficient in various programming languages and technologies.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-3">
                <Button variant="outline" className="rounded-3xl text-hover">
                  Download cv
                  <span> <Download /> </span>
                </Button>

                <Social />
              </div>
            </ScrollAnimation>
          </div>

          <div className="order-1 md:order-none mb-8 md:mb-0">
            <HeroPhoto />
          </div>
        </Container>
      </section>
    </main>
  );
}
