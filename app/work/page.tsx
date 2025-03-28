"use client";
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import SectionWrapper from "@/components/SectionWrapper";
import { cn } from '@/lib/utils';
import { LucideChevronRight } from 'lucide-react';
import { jobExperiences } from '@/constants/experiences';


const Work = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const jobDetailsData = useMemo(
    () => {
      const jobDetail = jobExperiences?.find((job) => job.id === activeTab);
      return {
        id: jobDetail?.id,
        company: jobDetail?.company,
        title: jobDetail?.title,
        period: jobDetail?.period,
        responsibilities: jobDetail?.responsibilities,
      };
    },
    [activeTab],
  );

  return (
    <SectionWrapper id="work">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="flex gap-8 mb-8 text-4xl font-semibold">
          <h2 className="shrink-0 text-4xl">
            <span>02.</span> Where I&apos;ve Worked
          </h2>
          <hr className="w-[35%] border-1 border-hover m-0 p-0 self-end" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible no-scrollbar border-b md:border-b-0 md:border-l border-foreground/20">
            {jobExperiences?.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn(
                  "px-4 py-3 min-w-fit text-sm whitespace-nowrap font-mono transition-all duration-300 hover:text-foreground hover:bg-white/5 hover:scale-50",
                  activeTab === exp.id
                    ? "text-foreground border-b-2 md:border-b-0 md:border-l-2 border-foreground"
                    : "text-foreground/70 border-b-2 md:border-b-0 md:border-l-2 border-transparent"
                )}
              >
                {exp.company.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[320px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-2"
            >
              <h3 className="text-xl font-medium mb-1">
                {jobDetailsData?.title}
                <span className="text-green-600">@ {jobDetailsData?.company}</span>
              </h3>
              <p className="text-sm text-foreground/70 font-mono mb-4">{jobDetailsData?.period}</p>

              <ul className="space-y-6">
                {jobDetailsData?.responsibilities?.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-foreground/80"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <span className="self-start text-foreground"><LucideChevronRight /></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Work;
