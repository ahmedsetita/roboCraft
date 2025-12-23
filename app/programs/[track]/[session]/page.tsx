"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tracks } from "@/content/tracks";
import { ArrowLeft, Clock, Target, BookOpen, Wrench, Package, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function SessionPage() {
  const params = useParams();
  const trackSlug = params.track as string;
  const sessionSlug = params.session as string;

  const track = tracks.find((t) => t.slug === trackSlug);
  const session = track?.sessions.find((s) => s.slug === sessionSlug);

  if (!track || !session) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Session Not Found</h1>
          <Link
            href="/programs"
            className="text-green-accent hover:text-green-accent/80 transition-colors"
          >
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello RoboCraft Academy, I want to enroll in: ${track.name}. Session of interest: ${session.title}. Name: ___ Phone: ___`
    );
    window.open(`https://wa.me/201551559649?text=${message}`, "_blank");
  };

  const sessionIndex = track.sessions.findIndex((s) => s.id === session.id) + 1;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Link href="/" className="hover:text-green-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-green-accent transition-colors">
              Programs
            </Link>
            <span>/</span>
            <Link
              href={`/programs#${track.slug}`}
              className="hover:text-green-accent transition-colors"
            >
              {track.name}
            </Link>
            <span>/</span>
            <span className="text-white">{session.title}</span>
          </div>
        </nav>

        {/* Back Button */}
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-green-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Curriculum</span>
        </Link>

        {/* Session Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-accent/20 text-green-accent px-4 py-2 rounded-full text-sm font-bold">
              Session {sessionIndex}
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>{session.duration}</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {session.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
            {session.subtitle}
          </p>
        </div>

        {/* Session Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Objectives */}
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-accent/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-green-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white">Objectives</h2>
            </div>
            <ul className="space-y-3">
              {session.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-accent/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white">Topics Covered</h2>
            </div>
            <ul className="space-y-3">
              {session.topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Build */}
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-accent/20 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-green-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white">What You'll Build</h2>
            </div>
            <ul className="space-y-3">
              {session.build.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-accent/20 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-green-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white">Deliverables</h2>
            </div>
            <ul className="space-y-3">
              {session.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-accent/20 to-green-accent/10 backdrop-blur-sm border-2 border-green-accent rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start This Session?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Enroll now and join the {track.name} program
          </p>
          <button
            onClick={openWhatsApp}
            className="group bg-green-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-accent/90 transition-all duration-300 shadow-2xl shadow-green-glow hover:shadow-green-accent/50 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            Enroll via WhatsApp
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

