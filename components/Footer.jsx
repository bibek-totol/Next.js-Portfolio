"use client";

import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode,  SiCodeforces, SiCodechef } from "react-icons/si";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='relative font-bold bg-gradient-to-t from-[#0a0d1f] to-transparent' itemScope itemType="https://schema.org/WPFooter">

            {/* SEO-Rich Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-10">

               

                {/* Authoritative Backlinks Section */}
                <section className="mb-8" aria-label="Professional Links">
                    <h3 className="text-xl font-bold text-[#8953F7] text-center mb-6">Connect & Verify My Skills</h3>

                    <nav className="flex flex-wrap justify-center gap-4 z-50" aria-label="External profile links">
                        {/* LinkedIn - High Authority Backlink */}
                        <a
                            href="https://www.linkedin.com/in/bibekbhowmick/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick LinkedIn - Professional Full Stack Developer Profile"
                            className="flex items-center gap-2 px-4 py-2 bg-[#0077B5]/20 hover:bg-[#0077B5]/40 rounded-full text-[#D7C4FC] transition-all hover:scale-105"
                        >
                            <FaLinkedinIn className="text-[#0077B5]" />
                            <span className="text-sm">LinkedIn</span>
                        </a>

                        {/* GitHub - Developer Authority Backlink */}
                        <a
                            href="https://github.com/bibek-totol"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick GitHub - Web Development Projects & Code Repositories"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700/20 hover:bg-gray-700/40 rounded-full text-[#D7C4FC] transition-all hover:scale-105"
                        >
                            <FaGithub />
                            <span className="text-sm">GitHub</span>
                        </a>

                        {/* LeetCode - Problem Solving Authority */}
                        <a
                            href="https://leetcode.com/u/bibektotol/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick LeetCode Profile - Problem Solving & DSA Skills"
                            className="flex items-center gap-2 px-4 py-2 bg-[#FFA116]/20 hover:bg-[#FFA116]/40 rounded-full text-[#D7C4FC] transition-all hover:scale-105"
                        >
                            <SiLeetcode className="text-[#FFA116]" />
                            <span className="text-sm">LeetCode</span>
                        </a>

                        {/* HackerRank - Coding Skills Authority */}
                        <a
                            href="https://codeforces.com/profile/bibektotol"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick Codeforces - Problem Solving & DSA Skills"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-full text-[#D7C4FC] transition-all hover:scale-105"
                        >
                            <SiCodeforces className="text-red-500" />
                            <span className="text-sm">Codeforces</span>
                        </a>



                         <a
                            href="https://www.codechef.com/users/bibektotol"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick Codechef - Problem Solving & DSA Skills"
                            className="flex items-center gap-2 px-4 py-2 bg-[#FFA116]/20 hover:bg-[#FFA116]/40 rounded-full text-[#D7C4FC] transition-all hover:scale-105"
                        >
                            <SiCodechef className="text-[#FFA116]" />
                            <span className="text-sm">Codechef</span>
                        </a>

                        {/* Certifications Repository - Trust Builder */}
                        <a
                            href="https://github.com/bibek-totol/ALL-SKILLS-CERTIFICATION"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick Certifications - All Professional Developer Certificates"
                            className="flex items-center gap-2 px-4 py-2 bg-[#9463F8]/20 hover:bg-[#9463F8]/40 rounded-full text-[#D7C4FC] transition-all hover:scale-105"
                        >
                            <FaCode className="text-[#9463F8]" />
                            <span className="text-sm">Certifications</span>
                        </a>
                    </nav>
                </section>

                {/* Quick Links - Internal SEO */}
                <section className="mb-8" aria-label="Quick navigation">
                    <h3 className="text-lg font-bold text-[#8953F7] text-center mb-4">Quick Links</h3>
                    <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Site navigation">
                        <Link href="#services" className="text-[#D7C4FC]/70 hover:text-cyan-400 transition">Web Development Services</Link>
                        <Link href="#works" className="text-[#D7C4FC]/70 hover:text-cyan-400 transition">Recent Projects</Link>
                        <Link href="#education" className="text-[#D7C4FC]/70 hover:text-cyan-400 transition">Experience & Education</Link>
                        <Link href="#skills" className="text-[#D7C4FC]/70 hover:text-cyan-400 transition">Technical Skills</Link>
                        <Link href="#contact" className="text-[#D7C4FC]/70 hover:text-cyan-400 transition">Contact Bibek</Link>
                    </nav>
                </section>

               

            </div>

            {/* Copyright with Author Microdata */}
            <div className="border-t border-[#8953F7]/20 py-6">
                <div className="text-center z-50">
                    <p className="text-[#D7C4FC]/70 text-sm">
                        © {new Date().getFullYear()} <span itemProp="author">Bibek Bhowmick</span>. Full Stack Web Developer Portfolio. All rights reserved.
                    </p>
                    <p className="text-[#D7C4FC]/50 text-xs mt-2">
                        Built with Next.js, React, and Tailwind CSS | Deployed on Vercel
                    </p>
                </div>
            </div>

        </footer>
    )
}
