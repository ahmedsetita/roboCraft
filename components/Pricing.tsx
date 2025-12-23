"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/ar";
import { Check, ArrowLeft } from "lucide-react";

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.pricing.title}
          subtitle={content.pricing.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Package */}
          <div className="bg-navy-light/50 backdrop-blur-sm border-2 border-green-accent rounded-xl p-8 hover:shadow-lg hover:shadow-green-glow transition-all duration-300 relative">
            <div className="absolute top-4 left-4 bg-green-accent text-navy px-3 py-1 rounded-full text-xs font-bold">
              الأكثر شعبية
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 mt-4">
              {content.pricing.core.title}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-accent">
                {content.pricing.core.price}
              </span>
              <span className="text-gray-400 mr-2">
                {content.pricing.core.currency}
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {content.pricing.core.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="w-full bg-green-accent text-navy py-3 rounded-lg font-bold hover:bg-green-accent/90 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {content.pricing.core.cta}
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Add-on */}
          <div className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-8 hover:border-green-accent transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.pricing.certificate.title}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-accent">
                {content.pricing.certificate.price}
              </span>
              <span className="text-gray-400 mr-2">
                {content.pricing.certificate.currency}
              </span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {content.pricing.certificate.description}
            </p>
            <button
              onClick={scrollToContact}
              className="w-full bg-navy-lighter text-white border-2 border-green-accent py-3 rounded-lg font-bold hover:bg-navy-light transition-all duration-200"
            >
              {content.pricing.certificate.cta}
            </button>
          </div>

          {/* Advanced Pack */}
          <div className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-8 hover:border-green-accent transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">
              {content.pricing.advanced.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {content.pricing.advanced.subtitle}
            </p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-green-accent">
                {content.pricing.advanced.price}
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {content.pricing.advanced.description}
            </p>
            <ul className="space-y-2 mb-8">
              {content.pricing.advanced.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-accent flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="w-full bg-navy-lighter text-white border-2 border-green-accent py-3 rounded-lg font-bold hover:bg-navy-light transition-all duration-200"
            >
              {content.pricing.advanced.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

