import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center mb-10 sm:mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
        <span className="bg-gradient-to-r from-white via-green-accent/80 to-white bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed px-4">{subtitle}</p>
      )}
    </div>
  );
}

