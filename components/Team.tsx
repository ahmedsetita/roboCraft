import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/ar";
import { User } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.team.title}
          subtitle={content.team.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.team.members.map((member, index) => (
            <div
              key={index}
              className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-6 text-center hover:border-green-accent transition-all duration-300"
            >
              <div className="w-20 h-20 bg-green-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-green-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-green-accent font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

