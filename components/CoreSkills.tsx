import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { Code, Gauge, Zap, Network, Layers, Bug, Brain, Eye } from "lucide-react";

export default function CoreSkills() {
  const icons = [Code, Brain, Eye, Gauge, Zap, Network, Layers, Bug];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.skills.title}
          subtitle={content.skills.subtitle}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {content.skills.items.map((skill, index) => {
            const IconComponent = icons[index] || Code;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8 hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-accent/30 to-green-accent/10 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-green-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-accent transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

