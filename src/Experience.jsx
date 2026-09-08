"use client";

import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import Card from "./Card";

export default function Experience() {
    const experienceData = [
        {
            year: "Dec 2025 – Jun 2026",
            title: "Full Stack Engineer",
            company: "DOICT (Govt. of Bangladesh) • Dhaka",
            badge: "Contractual",
            points: [
                "**10x Performance Boost**: Traced and resolved production latency on AWS EC2 by optimizing Vite build, gzip compression, and API routing.",
                "**Containerization & CI/CD**: Engineered multi-stage Docker builds, Nginx reverse proxy with caching, and automated GitHub Actions deployment to AWS.",
                "**Scale & Security**: Introduced Redis caching for high-traffic geospatial endpoints and established 4-tier Role-Based Access Control (RBAC)."
            ],
            tags: ["AWS EC2", "Docker", "Redis", "Nginx", "CI/CD", "RBAC"]
        },
        {
            year: "Aug 2025 – Oct 2025",
            title: "Frontend Developer",
            company: "ExecuteML • Dover, Delaware",
            badge: "Remote (US)",
            points: [
                "**AI Interfaces**: Transformed complex multi-agent AI requirements into modular, low-friction React components.",
                "**Modern Design**: Built accessible, responsive UI systems directly from product wireframes with TypeScript and Tailwind CSS."
            ],
            tags: ["React.js", "TypeScript", "Tailwind CSS", "Multi-Agent AI"]
        },
        {
            year: "Jan 2025 – Jun 2025",
            title: "Frontend Developer",
            company: "Softvence Agency • Dhaka",
            badge: "Full-time",
            points: [
                "**Fintech Dashboards**: Shipped Thari Finance with real-time stock, crypto, and commodity interactive dashboards.",
                "**Multi-Product Delivery**: Engineered Hayat LifeCare (healthtech) and Talexia (jewelry automation) platforms."
            ],
            tags: ["Next.js", "React.js", "Tailwind CSS", "Fintech Dashboards"]
        }
    ];

    const educationData = [
        {
            year: "2021 – 2025",
            title: "B.Sc. in Computer Science & Engineering",
            company: "Bangladesh Army University of Eng. & Tech. (BAUET)",
            badge: "CGPA: 3.30 / 4.00",
            points: [
                "**Core Curriculum**: Rigorous foundations in Data Structures, Algorithms, Software Engineering, and Database Architecture.",
                "**Leadership**: Executive Member in BAUET Computer Society & Promotional Secretary in Career Club."
            ],
            tags: ["Computer Science", "Data Structures", "Algorithms"]
        },
        {
            year: "2021 – Present",
            title: "Algorithmic Problem Solving",
            company: "CodeChef, Codeforces & LeetCode",
            badge: "340+ Solved",
            points: [
                "**340+ Problems Solved**: Demonstrating deep analytical thinking, data structure selection, and optimal time-complexity design.",
                "**Competitive Contestant**: Official contestant in the 2021 ICPC Asia Dhaka Regional Preliminary Contest."
            ],
            tags: ["C++", "Algorithms", "LeetCode", "Codeforces", "ICPC"],
            link: {
                text: "View 2021 ICPC Credential",
                href: "https://ibb.co.com/j9Pj34rt"
            }
        },
        {
            year: "2021 – 2025",
            title: "Certifications & Training",
            company: "Continuous Learning & System Security",
            badge: "Verified",
            points: [
                "**Engineering Credentials**: Advanced coursework in Full-Stack Web Development, Next.js, Node.js, and Cloud Deployment.",
                "**System Security**: Completed Website and System Penetration Testing internship with ByteCapsuleIT."
            ],
            tags: ["Full-Stack", "Next.js", "Node.js", "Security"],
            link: {
                text: "View Certifications on GitHub",
                href: "https://github.com/bibek-totol/ALL-SKILLS-CERTIFICATION"
            }
        }
    ];

    return (
        <section className="mt-14 py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto" aria-label="Bibek Bhowmick Experience and Education" id="experience-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

                {/* Left Column: Professional Experience */}
                <article aria-label="Professional Experience">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/40">
                            <Briefcase className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                                Professional <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Experience</span>
                            </h2>
                            <p className="text-xs text-[#C5B4E3] mt-0.5">
                                Production impact, cloud scalability & engineering achievements
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4 sm:space-y-5">
                        {experienceData.map((item, i) => (
                            <Card key={i} {...item} />
                        ))}
                    </div>
                </article>

                {/* Right Column: Education & Foundations */}
                <article aria-label="Educational Background">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-900/40">
                            <GraduationCap className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                                Education & <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Foundations</span>
                            </h2>
                            <p className="text-xs text-[#C5B4E3] mt-0.5">
                                Computer science degree, problem solving & verified credentials
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4 sm:space-y-5">
                        {educationData.map((item, i) => (
                            <Card key={i} {...item} />
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}
