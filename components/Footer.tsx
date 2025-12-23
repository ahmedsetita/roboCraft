import React from "react";
import { content } from "@/content/en";

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-navy-lighter py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">{content.footer.tagline}</p>
          <p className="text-gray-500 text-xs">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

