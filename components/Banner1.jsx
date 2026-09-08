"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Sparkles, ArrowRight, Star, Rocket, Code2, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function Banner1() {
    const techTags = ['React.js', 'Next.js 15', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'];

    return (
        <article className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16" itemScope itemType="https://schema.org/Person">
            {/* Hidden SEO content for search crawlers */}
            <div className="sr-only">
                <h1>Bibek Bhowmick - Full Stack Web Developer Portfolio</h1>
                <p>
                    Bibek Bhowmick is a professional Full Stack Web Developer from Bangladesh specializing in React, Next.js, Node.js, and modern web technologies. Hire Bibek Bhowmick for your next web development project.
                </p>
            </div>

            {/* Ambient background glow accents */}
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
            <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">

                    {/* Left Section - Main Content (Cols: 7) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-7 z-20"
                    >
                      

                        {/* Name & Greeting */}
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E2D5FC] flex items-center gap-2">
                            Hi, I'm <span itemProp="name" className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Bibek Bhowmick</span>
                           
                        </p>

                        {/* Primary Headline with Rich Gradient */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mt-3 leading-[1.15]">
                            <span 
                                itemProp="jobTitle" 
                                className="bg-gradient-to-r from-[#9463F8] via-[#C084FC] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(148,99,248,0.3)]"
                            >
                                Full Stack
                            </span>{" "}
                            <span className="text-[#F1E8FF]">Web Developer</span>
                        </h1>

                        {/* Description / Bio */}
                        <p 
                            className="text-base sm:text-lg lg:text-xl text-[#C7B7E8] leading-relaxed mt-5 font-normal max-w-2xl" 
                            itemProp="description"
                        >
                            Professional software engineer with <span className="text-cyan-300 font-semibold">2+ years of experience</span> crafting modern, responsive web applications using <span className="text-purple-300 font-semibold">React</span>, <span className="text-purple-300 font-semibold">Next.js</span>, and <span className="text-cyan-300 font-semibold">Node.js</span>. I solve complex product challenges to build scalable, high-integrity digital experiences that make an impact.
                        </p>

                        {/* Core Skills Chips Cluster */}
                        <div className="flex flex-wrap items-center gap-2 mt-6">
                            <span className="text-xs font-bold text-purple-300/70 uppercase tracking-wider mr-1 flex items-center gap-1">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Focus:
                            </span>
                            {techTags.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium text-purple-200 bg-[#161a38]/80 border border-purple-500/25 rounded-full backdrop-blur-sm hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-purple-900/30 transition-all duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Call to Actions & Social Links */}
                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <nav className="flex flex-wrap items-center gap-3.5" aria-label="Social links and resume download">
                                {/* Download CV Button */}
                                <a
                                    href="/assets/FullStack Developer CV(Bibek).pdf"
                                    download="Bibek_Bhowmick_Full_Stack_Developer_CV.pdf"
                                    className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full font-bold text-white text-sm sm:text-base overflow-hidden bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#06B6D4] shadow-[0_4px_25px_rgba(124,58,237,0.45)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
                                    title="Download Bibek Bhowmick Full Stack Developer Resume"
                                >
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                                    <MdOutlineFileDownload className="text-xl group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                    <span>Download CV</span>
                                </a>

                                {/* Let's Connect Button */}
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-purple-200 text-sm sm:text-base border border-purple-500/40 bg-[#141838]/80 backdrop-blur-md hover:bg-purple-900/40 hover:text-white hover:border-cyan-400/70 hover:scale-105 active:scale-95 transition-all duration-300"
                                >
                                    <span>Let's Talk</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-cyan-400" />
                                </a>

                                {/* Divider */}
                                <span className="hidden sm:inline-block w-px h-8 bg-purple-500/30 mx-1" />

                                {/* Social Links */}
                                <div className="flex items-center gap-2.5">
                                    <a
                                        href="https://www.linkedin.com/in/bibekbhowmick/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Bibek Bhowmick LinkedIn Profile - Full Stack Developer"
                                        itemProp="sameAs"
                                        aria-label="Visit Bibek Bhowmick on LinkedIn"
                                        className="p-3 rounded-full border border-purple-500/30 bg-[#141838]/80 text-purple-200 hover:text-cyan-300 hover:border-cyan-400 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
                                    >
                                        <FaLinkedinIn size={19} aria-hidden="true" />
                                    </a>

                                    <a
                                        href="https://github.com/bibek-totol"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Bibek Bhowmick GitHub Profile - Web Developer Portfolio"
                                        itemProp="sameAs"
                                        aria-label="Visit Bibek Bhowmick on GitHub"
                                        className="p-3 rounded-full border border-purple-500/30 bg-[#141838]/80 text-purple-200 hover:text-cyan-300 hover:border-cyan-400 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
                                    >
                                        <FaGithub size={19} aria-hidden="true" />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </motion.div>

                    {/* Right Section - Profile Image Showcase (Cols: 5) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 z-30"
                    >
                        {/* Ambient Glow Backdrop */}
                        <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/30 via-cyan-400/20 to-pink-500/20 rounded-full blur-3xl opacity-75 animate-pulse-glow pointer-events-none" />

                        {/* Outer Framed Portrait Box */}
                        <figure className="relative p-[3px] rounded-3xl bg-gradient-to-b from-cyan-400 via-purple-500/70 to-pink-500 shadow-[0_15px_50px_rgba(124,58,237,0.35)] group">
                            <div className="relative rounded-[21px] overflow-hidden bg-[#0d1024] max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
                                <Image
                                    className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    src="/assets/Screenshot_4-Photoroom.webp"
                                    alt="Bibek Bhowmick - Professional Full Stack Web Developer and React Expert from Bangladesh"
                                    width={420}
                                    height={420}
                                    priority
                                    itemProp="image"
                                />
                                {/* Bottom subtle gradient fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1024]/70 via-transparent to-transparent pointer-events-none" />
                            </div>
                            <figcaption className="sr-only">Bibek Bhowmick - Full Stack Developer Portfolio Photo</figcaption>
                        </figure>

                        {/* Floating Glass Badge 1 - Top Left */}
                        <motion.div
                            animate={{ y: [0, -7, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-3 -left-3 sm:-left-6 bg-[#131738]/90 border border-purple-400/40 backdrop-blur-xl rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 z-40"
                        >
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md">
                                <Star className="w-5 h-5 fill-white text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-purple-300 font-semibold">Experience</p>
                                <p className="text-xs sm:text-sm font-bold text-white">2+ Years Pro</p>
                            </div>
                        </motion.div>

                        {/* Floating Glass Badge 2 - Bottom Right */}
                        <motion.div
                            animate={{ y: [0, 7, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            className="absolute -bottom-4 -right-2 sm:-right-5 bg-[#131738]/90 border border-cyan-400/40 backdrop-blur-xl rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 z-40"
                        >
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-md">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-cyan-300 font-semibold">Delivered</p>
                                <p className="text-xs sm:text-sm font-bold text-white">20+ Projects</p>
                            </div>
                        </motion.div>

                        {/* Floating Glass Badge 3 - Center Right Accent */}
                        <motion.div
                            animate={{ x: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-[#131738]/95 border border-pink-400/40 backdrop-blur-xl rounded-2xl px-3 py-2 shadow-lg items-center gap-2 z-40"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-bold text-purple-200">Full Stack Ready</span>
                        </motion.div>
                    </motion.div>

                </header>

                {/* Elevated Professional Statistics Bar */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-14 lg:mt-20" 
                    aria-label="Professional Experience Statistics"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#131738]/70 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
                        {/* Metric 1 */}
                        <div className="flex flex-col items-center text-center p-2 group">
                            <div className="flex items-center gap-1.5">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                    2+
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-purple-200/80 font-medium mt-1.5">
                                Years Development Experience
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="flex flex-col items-center text-center p-2 border-l border-purple-500/15 group">
                            <div className="flex items-center gap-1.5">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                    20+
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-cyan-200/80 font-medium mt-1.5">
                                Full Stack Projects Completed
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="flex flex-col items-center text-center p-2 border-t md:border-t-0 md:border-l border-purple-500/15 group">
                            <div className="flex items-center gap-1.5">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                    15+
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-emerald-200/80 font-medium mt-1.5">
                                Modern Tech Stack Tools
                            </p>
                        </div>

                        {/* Metric 4 */}
                        <div className="flex flex-col items-center text-center p-2 border-t md:border-t-0 md:border-l border-purple-500/15 group">
                            <div className="flex items-center gap-1.5">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                    99%
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-amber-200/80 font-medium mt-1.5">
                                Code Quality & Satisfaction
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </article>
    );
}
