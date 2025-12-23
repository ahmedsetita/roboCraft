"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.faq.title}
          subtitle={content.faq.subtitle}
        />
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {content.faq.items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl overflow-hidden hover:border-green-accent transition-all duration-300 hover:shadow-xl hover:shadow-green-glow"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 flex items-center justify-between gap-4 hover:bg-navy-lighter/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.question}
                  </h3>
                  {openIndex === index && (
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {item.answer}
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

