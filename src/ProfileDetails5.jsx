"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FileCheck, Briefcase, Calendar, Bot, GraduationCap, PenTool, Mic } from "lucide-react";

const ProfileDetails5 = () => {
    const images = [
        "/assets/Screenshot_2.jpg",
        "/assets/Screenshot_82.jpg",
        "/assets/Screenshot_83.jpg",
        "/assets/Screenshot_84.jpg",
        "/assets/Screenshot_85.jpg",
        "/assets/Screenshot_86.jpg",
        "/assets/Screenshot_87.jpg",
        "/assets/Screenshot_88.jpg",
        "/assets/Screenshot_89.jpg",
        "/assets/Screenshot_90.jpg",
        "/assets/Screenshot_91.jpg",
        "/assets/Screenshot_92.jpg",
        "/assets/Screenshot_93.jpg",
        "/assets/Screenshot_94.jpg"
    ];

    return (
        <div className="relative font-extrabold text-white min-h-screen p-6">
            <AnimatedBackground />
            <div className="absolute w-full min-h-full overflow-y-auto z-1 top-0 left-0">

                <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
                    {/* LEFT SECTION */}
                    <div>
                        {/* Header */}
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">
                                    🔙 Back
                                </button>
                            </Link>
                            <span className="text-gray-400">
                                Projects &gt; JobAI — AI-Powered Career Platform
                            </span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-white">
                                JobAI:{" "}
                                <span className="text-purple-400">
                                    AI-Powered Career Platform
                                </span>
                            </h1>
                            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                                A full-stack career assistant built with Next.js 16, TypeScript, LangChain, and LangGraph. JobAI helps job seekers optimize resumes, discover roles, generate cover letters, find courses, and practice interviews with a live AI voice interviewer powered by Vapi.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="flex space-x-4 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">7</p>
                                <p className="text-gray-400">Core Features</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">AI</p>
                                <p className="text-gray-400">LangGraph Agents</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">Voice</p>
                                <p className="text-gray-400">Vapi Live Interview</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
                            <a
                                href="https://ai-job-assistant-five.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 px-6 py-2 rounded-lg text-center font-bold hover:brightness-110 transition"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/bibek-totol/AI-Job-Assistant"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 px-6 py-2 rounded-lg text-center font-bold hover:brightness-110 transition"
                            >
                                GitHub
                            </a>
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {[
                                    "Next.js 16",
                                    "TypeScript",
                                    "LangChain",
                                    "LangGraph",
                                    "Google Gemini API",
                                    "text-embedding-004",
                                    "Vapi",
                                    "Daily.co",
                                    "JSearch (RapidAPI)",
                                    "SerpAPI",
                                    "Tailwind CSS"
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="pookie3 px-3 py-1 rounded-lg text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div>
                        <div className="mt-8">
                            <Suspense
                                fallback={
                                    <div className="h-64 bg-gray-700 rounded-lg animate-pulse"></div>
                                }
                            >
                                <Swiper
                                    modules={[Pagination, Autoplay, Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="rounded-lg"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={img}
                                                alt={`JobAI Screenshot ${index + 1}`}
                                                className="rounded-lg w-full h-64 object-cover"
                                                width={500}
                                                height={256}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Suspense>

                            <h3 className="text-lg mt-2">Key Features</h3>

                            <ul className="mt-2 space-y-2.5">
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300 mt-0.5 shadow-sm shadow-cyan-500/20">
                                        <FileCheck className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Resume Checker (/resume-checker):</strong>
                                        Upload a PDF resume and optional job description. PDF text is extracted, split into chunks, and embedded into a vector store via Gemini Embeddings (text-embedding-004). Vector similarity retrieval feeds key resume sections to LangGraph Agent for ATS scoring, strengths, and gap analysis.
                                    </span>
                                </li>

                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-300 mt-0.5 shadow-sm shadow-purple-500/20">
                                        <PenTool className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Cover Letter Generator (/cover-letter):</strong>
                                        Upload resume + job description. Vector retrieval retrieves relevant skills & experience chunks from the uploaded PDF. LangGraph Agent with online browsing generates a tailored 300–400 word cover letter.
                                    </span>
                                </li>

                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-500/20">
                                        <Briefcase className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Job Suggestions (/job-suggestions):</strong>
                                        Search by role preferences, country, and experience level. Pulls real, recent job postings from JSearch (RapidAPI).
                                    </span>
                                </li>

                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-300 mt-0.5 shadow-sm shadow-blue-500/20">
                                        <GraduationCap className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Course Recommendations (/courses):</strong>
                                        Upload resume or enter career goals. PDF vector embeddings extract candidate skill gaps, and LangGraph agent with Online Browsing finds top live courses.
                                    </span>
                                </li>

                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0 text-pink-300 mt-0.5 shadow-sm shadow-pink-500/20">
                                        <Calendar className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Interview Scheduler (/interview-scheduler):</strong>
                                        Enter job title, description, and interview type. LangGraph agent generates 15 tailored interview questions and generates a shareable link (/interview/[id]).
                                    </span>
                                </li>

                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0 text-teal-300 mt-0.5 shadow-sm shadow-teal-500/20">
                                        <Mic className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Live AI Interview (/interview/[id]):</strong>
                                        Candidate joins and Vapi conducts a real-time voice interview in the browser with custom injected question prompts.
                                    </span>
                                </li>

                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300 mt-0.5 shadow-sm shadow-amber-500/20">
                                        <Bot className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Career Chatbot (global widget):</strong>
                                        Floating assistant for career questions powered by Gemini LangGraph Agent with live Online Web Browsing capability.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails5;
