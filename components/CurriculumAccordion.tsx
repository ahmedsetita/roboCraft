"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { ChevronDown } from "lucide-react";

export default function CurriculumAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [part0Open, setPart0Open] = useState(false);

  const toggleSession = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.curriculum.title}
          subtitle={content.curriculum.subtitle}
        />
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {/* Part 0 - Free Foundation Course */}
          <div className="bg-gradient-to-br from-green-accent/20 to-green-accent/10 backdrop-blur-sm border-2 border-green-accent rounded-2xl overflow-hidden hover:border-green-accent transition-all duration-300 hover:shadow-xl hover:shadow-green-glow relative">
            <div className="absolute top-3 right-3 bg-green-accent text-navy px-3 py-1 rounded-full text-xs font-bold z-10">
              FREE
            </div>
            <button
              onClick={() => setPart0Open(!part0Open)}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 flex items-center justify-between gap-4 hover:bg-navy-lighter/50 transition-colors"
              aria-expanded={part0Open}
            >
              <div className="flex-1 text-left pr-8">
                <h3 className="text-lg font-bold text-white mb-1">
                  {content.curriculum.part0.title}
                </h3>
                {part0Open && (
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {content.curriculum.part0.description}
                  </p>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-green-accent flex-shrink-0 transition-transform duration-300 ${
                  part0Open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Sessions 1-16 */}
          {content.curriculum.sessions.map((session, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl overflow-hidden hover:border-green-accent transition-all duration-300 hover:shadow-xl hover:shadow-green-glow"
            >
              <button
                onClick={() => toggleSession(index)}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 flex items-center justify-between gap-4 hover:bg-navy-lighter/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {session.title}
                  </h3>
                  {openIndex === index && (
                    <p className="text-gray-400 text-sm mt-2">
                      {session.description}
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-green-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

