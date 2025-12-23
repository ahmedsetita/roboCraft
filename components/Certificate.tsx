"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { Award, Check } from "lucide-react";

export default function Certificate() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="certificate" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.certificate.title}
          subtitle={content.certificate.subtitle}
        />
        <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-accent rounded-2xl p-10 md:p-14 max-w-4xl mx-auto shadow-2xl shadow-green-glow/50 hover:shadow-green-glow transition-all duration-300">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-accent/30 to-green-accent/10 rounded-xl flex items-center justify-center">
              <Award className="w-10 h-10 text-green-accent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Validate Your Expertise
              </h3>
              <p className="text-gray-200 text-lg">
                {content.certificate.description}
              </p>
            </div>
          </div>
          <ul className="space-y-4 mb-10">
            {content.certificate.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4 bg-navy/30 rounded-lg p-4 border border-green-glow/20">
                <Check className="w-6 h-6 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-lg font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToContact}
            className="group bg-green-accent text-navy px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-accent/90 transition-all duration-300 shadow-2xl shadow-green-glow hover:shadow-green-accent/50 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            {content.certificate.cta}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

