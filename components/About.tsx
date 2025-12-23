import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={content.about.title} />
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 font-medium">
              {content.about.description}
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            {content.about.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-navy-light/30 rounded-xl p-3 sm:p-4 border border-green-glow/30 hover:border-green-accent/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

