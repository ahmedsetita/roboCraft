import React from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/ar";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-6 hover:border-green-accent transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-green-accent mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="border-t border-navy-lighter pt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

