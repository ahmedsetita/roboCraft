"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { Rocket, Smartphone, Globe, Brain, Check, ArrowRight } from "lucide-react";

export default function TechTracks() {
  const icons = [Rocket, Smartphone, Globe, Brain];

  const openWhatsApp = (trackName: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in joining the waitlist for: ${trackName}`);
    window.open(`https://wa.me/201551559649?text=${message}`, "_blank");
  };

  return (
    <section id="tracks" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.techTracks.title}
          subtitle={content.techTracks.subtitle}
        />

        {/* Current Track */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-green-accent/20 to-green-accent/10 backdrop-blur-sm border-2 border-green-accent rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-green-glow transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-accent text-navy px-4 py-2 rounded-full text-xs font-bold z-10">
              {content.techTracks.current.status}
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-green-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {content.techTracks.current.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                  {content.techTracks.current.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {content.techTracks.current.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-200">
                      <Check className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-green-accent text-navy px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-accent/90 transition-all duration-300 shadow-xl shadow-green-glow hover:shadow-green-accent/50 hover:scale-105 active:scale-95"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Tracks */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {content.techTracks.comingSoon.map((track, index) => {
              const IconComponent = icons[index + 1] || Globe;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8 hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-2 relative"
                >
                  <div className="absolute top-4 right-4 bg-navy-light text-green-accent px-3 py-1 rounded-full text-xs font-bold border border-green-accent">
                    Coming Soon
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-accent/30 to-green-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-green-accent" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-accent transition-colors">
                    {track.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
                    {track.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {track.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-green-accent flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openWhatsApp(track.title)}
                    className="w-full bg-navy-light text-white border-2 border-green-accent px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-green-accent hover:text-navy hover:border-green-accent transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                  >
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

