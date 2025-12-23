import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import * as Icons from "lucide-react";

export default function Features() {
  const iconMap: Record<string, React.ComponentType<any>> = {
    BookOpen: Icons.BookOpen,
    Code: Icons.Code,
    Users: Icons.Users,
    Clock: Icons.Clock,
    Rocket: Icons.Rocket,
    Award: Icons.Award,
  };

  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.features.title}
          subtitle="What sets us apart from the rest"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {content.features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Icons.Star;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-8 hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-accent/30 to-green-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-green-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

