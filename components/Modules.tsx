import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { CheckCircle } from "lucide-react";

export default function Modules() {
  return (
    <section id="modules" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.modules.title}
          subtitle={content.modules.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-10">
          {/* Core Modules */}
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-10 hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-8">
              {content.modules.core.title}
            </h3>
            <ul className="space-y-4">
              {content.modules.core.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extended Modules */}
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-10 hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-8">
              {content.modules.extended.title}
            </h3>
            <ul className="space-y-4">
              {content.modules.extended.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

