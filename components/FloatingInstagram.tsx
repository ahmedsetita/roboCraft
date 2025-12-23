"use client";

import React from "react";
import { Instagram, MessageCircle, Linkedin } from "lucide-react";
import { content } from "@/content/en";

export default function FloatingSocial() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in RoboCraft Academy");
    window.open(`https://wa.me/201551559649?text=${message}`, "_blank");
  };

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-40 flex flex-col gap-3 sm:gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-green-accent hover:bg-green-accent/90 rounded-full flex items-center justify-center shadow-2xl shadow-green-glow hover:shadow-green-accent/50 transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-navy group-hover:scale-110 transition-transform" />
        <span className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-light text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none border border-green-glow">
          WhatsApp
        </span>
      </button>

      {/* Instagram Button */}
      <a
        href={content.footer.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-light text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none border border-green-glow">
          Follow Us
        </span>
      </a>

      {/* LinkedIn Button */}
      <a
        href={content.footer.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0077b5] hover:bg-[#006399] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#0077b5]/50 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Connect with us on LinkedIn"
      >
        <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-light text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none border border-green-glow">
          LinkedIn
        </span>
      </a>
    </div>
  );
}

