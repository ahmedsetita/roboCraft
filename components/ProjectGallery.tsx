import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { content } from "@/content/en";

// Project images - each project has its unique image
const projectImages = [
  {
    id: 1,
    title: "Smart Robot Arm",
    description: "6-DOF robotic arm with precision control",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "AI-Powered Vision Robot",
    description: "Computer vision robot with object detection and recognition",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Autonomous Rover",
    description: "Self-navigating robot with obstacle avoidance",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Computer Vision System",
    description: "Real-time image processing and pattern recognition",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "IoT Sensor Network",
    description: "Connected sensor system with real-time monitoring",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "AI Drone Control",
    description: "Intelligent drone with computer vision and autonomous navigation",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&h=800&fit=crop&q=90",
  },
  {
    id: 7,
    title: "Line Following Robot",
    description: "Precision line tracking with PID control",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Smart Home with AI",
    description: "AI-powered home automation with computer vision",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Machine Learning Robot",
    description: "Robot that learns and adapts using AI algorithms",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80",
  },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Real Projects. Real Results."
          subtitle="See what you'll build. These are actual projects from our students."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-navy-light/80 to-navy-light/40 backdrop-blur-sm border-2 border-green-glow rounded-2xl overflow-hidden hover:border-green-accent transition-all duration-300 hover:shadow-2xl hover:shadow-green-glow hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-accent/90 text-navy px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  View Project
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg px-2">
            These are just examples. You'll build your own unique projects.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-accent text-navy px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-green-accent/90 transition-all duration-300 shadow-2xl shadow-green-glow hover:shadow-green-accent/50 hover:scale-105 active:scale-95"
          >
            Start Building Your Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

