"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tracks } from "@/content/tracks";
import { Clock, ArrowRight, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function ProgramsPage() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Program Tracks"
          subtitle="Choose your learning path. Master robotics step by step."
        />

        {/* Track Selector */}
        <div className="mb-12">
          <div className="bg-navy-light/50 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-2 inline-flex gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track)}
                className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  selectedTrack.id === track.id
                    ? "bg-green-accent text-navy shadow-lg shadow-green-glow"
                    : "text-gray-300 hover:text-green-accent hover:bg-navy-lighter"
                }`}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Track Info */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {selectedTrack.name}
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-6 leading-relaxed">
              {selectedTrack.shortDescription}
            </p>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Learning Outcomes:</h3>
              <ul className="space-y-2">
                {selectedTrack.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Sessions ({selectedTrack.sessions.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {selectedTrack.sessions.map((session, index) => (
              <Link
                key={session.id}
                href={`/programs/${selectedTrack.slug}/${session.slug}`}
                className="group bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-accent/20 text-green-accent px-3 py-1 rounded-full text-xs font-bold">
                    Session {index + 1}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{session.duration}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-accent transition-colors">
                  {session.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {session.subtitle}
                </p>
                <div className="flex items-center gap-2 text-green-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>View details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

