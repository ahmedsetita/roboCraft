"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { content } from "@/content/en";
import { MessageCircle, Phone, Mail, Clock, ArrowRight, Instagram } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    level: "",
    package: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+20|0)?1[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = content.contact.form.validation.nameRequired;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = content.contact.form.validation.phoneRequired;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = content.contact.form.validation.phoneInvalid;
    }

    if (!formData.package) {
      newErrors.package = content.contact.form.validation.packageRequired;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp message
    let message = `Hello, I'm interested in RoboCraft Academy\n\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) {
      message += `Email: ${formData.email}\n`;
    }
    if (formData.level) {
      message += `Current Level: ${content.contact.form.levelOptions[formData.level as keyof typeof content.contact.form.levelOptions]}\n`;
    }
    message += `Program Interest: ${content.contact.form.packageOptions[formData.package as keyof typeof content.contact.form.packageOptions]}\n`;
    if (formData.message) {
      message += `\nMessage: ${formData.message}`;
    }

    // Encode and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201551559649?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in RoboCraft Academy");
    window.open(`https://wa.me/201551559649?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={content.contact.title}
          subtitle={content.contact.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">نموذج التسجيل</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  {content.contact.form.name} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-navy-lighter border border-navy-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  {content.contact.form.phone} <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-navy-lighter border border-navy-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent transition-colors"
                  placeholder="01XXXXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  {content.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-navy-lighter border border-navy-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="level"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  {content.contact.form.level}
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full bg-navy-lighter border border-navy-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent transition-colors"
                >
                  <option value="">Select level</option>
                  <option value="student">{content.contact.form.levelOptions.student}</option>
                  <option value="engineering">{content.contact.form.levelOptions.engineering}</option>
                  <option value="other">{content.contact.form.levelOptions.other}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="package"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  {content.contact.form.package} <span className="text-red-400">*</span>
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full bg-navy-lighter border border-navy-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent transition-colors"
                >
                  <option value="">Select program</option>
                  <option value="core">{content.contact.form.packageOptions.core}</option>
                  <option value="certificate">{content.contact.form.packageOptions.certificate}</option>
                  <option value="advanced">{content.contact.form.packageOptions.advanced}</option>
                </select>
                {errors.package && (
                  <p className="text-red-400 text-sm mt-1">{errors.package}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  {content.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-navy-lighter border border-navy-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent transition-colors resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-green-accent text-navy py-4 rounded-xl font-bold text-lg hover:bg-green-accent/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-green-glow hover:shadow-green-accent/50 hover:scale-105 active:scale-95"
              >
                {content.contact.form.submit}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Quick Contact */}
            <div className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-accent/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {content.contact.whatsapp.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {content.contact.whatsapp.description}
                  </p>
                </div>
              </div>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-accent text-navy py-3 rounded-lg font-bold hover:bg-green-accent/90 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {content.contact.whatsapp.button}
              </button>
            </div>

            {/* Contact Details */}
            <div className="bg-navy-light/50 backdrop-blur-sm border border-green-glow rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-green-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">الهاتف</p>
                  <a
                    href={`tel:${content.contact.info.phone}`}
                    className="text-white hover:text-green-accent transition-colors"
                  >
                    {content.contact.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-green-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                  <a
                    href={`mailto:${content.contact.info.email}`}
                    className="text-white hover:text-green-accent transition-colors"
                  >
                    {content.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-green-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Working Hours</p>
                  <p className="text-white">{content.contact.info.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-green-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <a
                    href={content.contact.info.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-accent transition-colors flex items-center gap-2 group"
                  >
                    Follow Us
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

