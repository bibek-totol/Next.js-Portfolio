"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      aria-label="Contact Information"
      id="contact-section"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Ambient background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for Freelance & Full-Time Roles
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let’s Work{" "}
            <span className="bg-gradient-to-r from-[#9463F8] via-[#C084FC] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(148,99,248,0.3)]">
              Together!
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
            I design and code beautifully simple things, and I love what I do.
            Have a project in mind, an opportunity to discuss, or just want to connect?
            Reach out directly anytime!
          </p>
        </header>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Phone / WhatsApp */}
          <div className="group relative rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-purple-500/50 p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-800/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner group-hover:scale-110 group-hover:border-purple-400/60 transition-transform duration-300">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Direct Call
                </span>
              </div>

              <p className="text-gray-400 text-sm font-medium">Phone & WhatsApp</p>
              <h3 className="text-white text-lg sm:text-xl font-bold mt-1 tracking-wide">
                +8801776569120
              </h3>
              <p className="text-gray-400/80 text-xs mt-2">
                Available 9:00 AM - 10:00 PM (GMT+6)
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2">
              <a
                href="https://wa.me/8801776569120"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <FaWhatsapp className="text-base text-emerald-400" />
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => handleCopy("+8801776569120", "phone")}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs sm:text-sm font-medium transition-all"
                title="Copy phone number"
              >
                {copiedItem === "phone" ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="group relative rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-800/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 group-hover:border-cyan-400/60 transition-transform duration-300">
                  <FaEnvelope className="text-xl" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Primary Mail
                </span>
              </div>

              <p className="text-gray-400 text-sm font-medium">Email Address</p>
              <h3 className="text-white text-base sm:text-lg font-bold mt-1 break-all tracking-tight">
                bibektotol@gmail.com
              </h3>
              <p className="text-gray-400/80 text-xs mt-2">
                Fast response within 12-24 hours
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2">
              <a
                href="mailto:bibektotol@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <FaPaperPlane className="text-xs text-cyan-400" />
                Send Email
              </a>
              <button
                type="button"
                onClick={() => handleCopy("bibektotol@gmail.com", "email")}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs sm:text-sm font-medium transition-all"
                title="Copy email address"
              >
                {copiedItem === "email" ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="group relative rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-pink-500/50 p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-800/30 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-inner group-hover:scale-110 group-hover:border-pink-400/60 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
                  Location
                </span>
              </div>

              <p className="text-gray-400 text-sm font-medium">Based in</p>
              <h3 className="text-white text-lg sm:text-xl font-bold mt-1 tracking-wide">
                Dhaka, Bangladesh
              </h3>
              <p className="text-gray-400/80 text-xs mt-2">
                Open to remote worldwide & on-site
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center">
              <span className="w-full text-center py-2.5 px-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold">
                 Timezone: UTC / GMT +6
              </span>
            </div>
          </div>
        </div>

        {/* Quick Social & Connect Bar */}
        
      </div>
    </section>
  );
};

export default ContactUs;
