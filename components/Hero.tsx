"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { content } from "@/content/en";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-green-accent/10 border border-green-accent/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <span className="text-green-accent font-semibold text-xs sm:text-sm">
              ⚡ LIMITED SPOTS AVAILABLE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight px-2">
            <span className="bg-gradient-to-r from-white via-green-accent to-white bg-clip-text text-transparent">
              {content.hero.headline}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            {content.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 px-2">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group bg-green-accent text-navy px-6 py-3.5 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl font-bold text-base sm:text-lg lg:text-xl hover:bg-green-accent/90 transition-all duration-300 shadow-2xl shadow-green-glow hover:shadow-green-accent/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto hover:scale-105 active:scale-95"
            >
              {content.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/programs"
              className="bg-navy-light text-white border-2 border-green-accent px-6 py-3.5 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl font-bold text-base sm:text-lg lg:text-xl hover:bg-navy-lighter transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto hover:border-green-accent/70 hover:scale-105 active:scale-95"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              {content.hero.ctaSecondary}
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 mb-4 px-2">
            <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
            <span>{content.hero.microcopy}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8 text-center hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-1">
            <div className="text-4xl sm:text-5xl font-bold text-green-accent mb-2 sm:mb-3 bg-gradient-to-r from-green-accent to-green-400 bg-clip-text text-transparent">
              {content.hero.stats.sessions.value}
            </div>
            <div className="text-gray-300 text-base sm:text-lg font-semibold">
              {content.hero.stats.sessions.label}
            </div>
          </div>
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8 text-center hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-1">
            <div className="text-4xl sm:text-5xl font-bold text-green-accent mb-2 sm:mb-3 bg-gradient-to-r from-green-accent to-green-400 bg-clip-text text-transparent">
              {content.hero.stats.hours.value}
            </div>
            <div className="text-gray-300 text-base sm:text-lg font-semibold">
              {content.hero.stats.hours.label}
            </div>
          </div>
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8 text-center hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-1">
            <div className="text-gray-300 text-xs sm:text-sm mb-2 font-medium">
              {content.hero.stats.platform.value}
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-green-accent bg-gradient-to-r from-green-accent to-green-400 bg-clip-text text-transparent">
              {content.hero.stats.platform.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

