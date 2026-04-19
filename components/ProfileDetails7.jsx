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

const ProfileDetails7 = () => {
    const images = [
        "/assets/Screenshot_11.jpg", 
         "/assets/Screenshot_12.jpg",
          "/assets/Screenshot_13.jpg",
           "/assets/Screenshot_14.jpg",
            "/assets/Screenshot_15.jpg",
             "/assets/Screenshot_16.jpg",
              "/assets/Screenshot_17.jpg",

    ];

    return (
        <div className="relative font-extrabold text-white min-h-screen p-6">
            <AnimatedBackground />
            <div className="absolute w-full min-h-full overflow-y-auto z-1 top-0 left-0">
                <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
                    <div>
                        {/* Header */}
                        <div className="flex items-center space-x-4">
                            <Link href="/"><button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
                            <span className="text-gray-400">Projects &gt; ICTD Lab Bangladesh</span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-white">
                                ICTD Lab <span className="text-purple-400">Bangladesh</span>
                            </h1>
                            <p className="mt-4 text-gray-300 font-medium">
                                A full-stack government digital lab management system built to track and manage digital labs across Bangladesh. I was the sole developer handling everything from database design to deployment.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="flex space-x-4 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">12+</p>
                                <p className="text-gray-400">Technologies</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">8+</p>
                                <p className="text-gray-400">Core Modules</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
                            <a href="https://ictd-lab-gsi-project-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-6 py-2 rounded-lg text-center">Live Demo</a>
                            {/* GitHub links not provided, using placeholders or omitting if preferred. User didn't provide repo links */}
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "Cloudinary", "Leaflet", "i18next", "Vercel", "Recharts", "Winston"].map((tech) => (
                                    <span key={tech} className="pookie3 px-3 py-1 rounded-lg">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Key Features Swiper */}
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
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="rounded-lg shadow-2xl border border-white/10"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative h-96 w-full">
                                                <Image
                                                    src={img}
                                                    alt={`ICTD Lab Project Screenshot ${index + 1}`}
                                                    className="rounded-lg object-cover"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Suspense>

                            <h3 className="text-lg mt-8 mb-4">What I Built 👇</h3>
                            <ul className="space-y-3">
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>Authentication System:</strong> JWT-based login, email OTP verification, bcrypt password hashing, and secure cookie handling.
                                </li>
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>Core Lab Management:</strong> Search, filter, and paginate labs. Update info, file complaints, send reports, and export data as Excel, CSV, or Print.
                                </li>
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>Interactive Map:</strong> Integrated Leaflet + React-Leaflet to geographically plot all lab locations across Bangladesh's divisions and upazilas.
                                </li>
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>File Handling & Cloudinary:</strong> Built-in PDF viewer and Cloudinary integration for uploads. Custom backend maintenance scripts for cleanup.
                                </li>
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>Dashboard & Analytics:</strong> Data visualization with Recharts and a scrolling announcement ticker for real-time notices.
                                </li>
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>Bilingual Support (Bangla + English):</strong> Full translation system using i18next with a custom LanguageContext.
                                </li>
                                <li className="pookie3 p-3 rounded-lg">
                                    <span className="text-blue-400 mr-2">✅</span> 
                                    <strong>Backend & Infrastructure:</strong> Versioned REST API with Express + TypeScript + Prisma ORM + PostgreSQL, Winston logging, and Vercel deployment.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails7;
