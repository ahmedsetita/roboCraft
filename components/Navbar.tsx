"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { content } from "@/content/en";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: content.nav.home },
    { href: "#results", label: content.nav.results },
    { href: "#skills", label: content.nav.skills },
    { href: "#curriculum", label: content.nav.curriculum },
    { href: "#modules", label: content.nav.modules },
    { href: "#certificate", label: content.nav.certificate },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: content.nav.contact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/98 backdrop-blur-md shadow-2xl shadow-green-glow/20 border-b border-green-glow/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.jpeg"
                alt="RoboCraft Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-green-accent transition-colors hidden sm:inline">
              RoboCraft Academy
            </span>
            <span className="text-sm font-bold text-white group-hover:text-green-accent transition-colors sm:hidden">
              RoboCraft
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-green-accent transition-all duration-200 font-semibold text-xs xl:text-sm uppercase tracking-wider relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-green-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-green-accent sm:w-7 sm:h-7" />
            ) : (
              <Menu size={24} className="sm:w-7 sm:h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-green-glow/20 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 sm:py-6 space-y-2 sm:space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-gray-300 hover:text-green-accent transition-colors duration-200 font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:bg-navy-light/50 uppercase tracking-wider text-xs sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

