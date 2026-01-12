"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from './AnimatedBackground';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <div className="relative font-extrabold   text-white min-h-screen p-6">
            <AnimatedBackground />
            <div className="absolute w-full min-h-full overflow-y-auto   z-1 top-0 left-0 ">

                <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4   gap-4">
                    <div>
                        {/* Header */}
                        <div className="flex items-center space-x-4">
                            <Link href="/"><button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
                            <span className="text-gray-400">Projects &gt; AI Job Assistant </span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-white">
                                AI Job Assistant: <span className="text-purple-400">Smart Career Platform </span>
                            </h1>

                        </div>

                        {/* Stats Section */}
                        <div className="flex space-x-4 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">7</p>
                                <p className="text-gray-400">Core Features</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">AI</p>
                                <p className="text-gray-400">Powered</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
                            <a href="https://ai-job-assistant-five.vercel.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
                            <a href="https://github.com/bibek-totol/AI-Job-Assistant" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub</a>
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Next.js", "Tailwind CSS", "Express JS", "OpenAI API", "Vapi", "TypeScript", "React-PDF"].map((tech) => (
                                    <span key={tech} className="pookie3 px-3 py-1 rounded-lg">{tech}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div>

                        {/* Key Features */}
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
                                        delay: 1500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="rounded-lg"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={img}
                                                alt={`Project Screenshot ${index + 1}`}
                                                className="rounded-lg w-full h-64 object-cover"
                                                width={500}
                                                height={256}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Suspense>
                            <h3 className="text-lg  mt-2">Key Features</h3>
                            <ul className="mt-2 space-y-2">

                                <li className="pookie3 p-3 rounded-lg">🔹 AI Resume Checker: Upload PDF resumes to get an ATS compatibility score (0-100), detailed strengths analysis, actionable improvement suggestions, and missing skills recommendations.</li>
                                <li className="pookie3 p-3 rounded-lg">🔹 Smart Job Search: AI-powered job matching with country and experience level filters, providing personalized job recommendations and match reasoning for each position.</li>
                                <li className="pookie3 p-3 rounded-lg">🔹 Interview Scheduler: Schedule AI-powered interviews with auto-generated questions. Supports Technical, Behavioral, and Mock interviews with shareable interview links.</li>
                                <li className="pookie3 p-3 rounded-lg">🔹 Interview Entry Page: Dynamic interview session page for candidate information collection, pre-interview checklist, and Vapi integration readiness.</li>
                                <li className="pookie3 p-3 rounded-lg">🔹 Course Recommendations: Resume-based or goal-based analysis to provide personalized learning paths, course difficulty levels, platform, and duration details.</li>
                                <li className="pookie3 p-3 rounded-lg">🔹 Cover Letter Creation: AI-driven cover letter generation with customization options to tailor it to specific job applications.</li>
                                <li className="pookie3 p-3 rounded-lg">🔹 Pricing and Contact: Subscription plans pricing section and a dedicated Contact Us page for additional information.</li>

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProfileDetails5;
