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
import {
    Car,
    UserCheck,
    ShieldCheck,
    Video,
    Layers,
    CreditCard,
    LayoutDashboard
} from "lucide-react";

const ProfileDetails6 = () => {
    const images = [
        "/assets/ride-pic/Screenshot_14.jpg",
        "/assets/ride-pic/Screenshot_15.jpg",
        "/assets/ride-pic/Screenshot_16.jpg",
        "/assets/ride-pic/Screenshot_17.jpg",
        "/assets/ride-pic/Screenshot_18.jpg",
        "/assets/ride-pic/Screenshot_19.jpg",
        "/assets/ride-pic/Screenshot_20.jpg",
        "/assets/ride-pic/Screenshot_21.jpg",
        "/assets/ride-pic/Screenshot_25.jpg",
        "/assets/ride-pic/Screenshot_26.jpg",
        "/assets/ride-pic/Screenshot_28.jpg",
        "/assets/ride-pic/Screenshot_29.jpg",
        "/assets/ride-pic/Screenshot_34.jpg",
        "/assets/ride-pic/Screenshot_35.jpg",
        "/assets/ride-pic/Screenshot_36.jpg"
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
                                Projects &gt; RoadMate
                            </span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-white">
                                RoadMate:{" "}
                                <span className="text-purple-400">
                                    Real-Time Ride-Sharing & Fleet Platform
                                </span>
                            </h1>
                            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                                A modern full-stack ride-booking and driver partner ecosystem built on Next.js 16 (App Router), React 19, TypeScript, and MongoDB. Connects riders with verified partner drivers through 2dsphere geospatial matching, live Socket.IO events, dual-OTP ride handoffs, integrated Stripe cashless payments, and automated ZegoCloud Video KYC.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="flex space-x-4 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">3</p>
                                <p className="text-gray-400">User Roles</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">2</p>
                                <p className="text-gray-400">Microservices</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">100%</p>
                                <p className="text-gray-400">Real-Time</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
                            <a
                                href="https://road-mate-microservice.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 px-6 py-2 rounded-lg text-center font-bold hover:brightness-110 transition"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/bibek-totol/RoadMate-Microservice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 px-6 py-2 rounded-lg text-center font-bold hover:brightness-110 transition"
                            >
                                GitHub RoadMate Service
                            </a>
                            <a
                                href="https://github.com/bibek-totol/RoadMate-Socketserver"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 px-6 py-2 rounded-lg text-center font-bold hover:brightness-110 transition"
                            >
                                GitHub Socket Service
                            </a>
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {[
                                    "Next.js 16 (App Router)",
                                    "React 19",
                                    "TypeScript",
                                    "Tailwind CSS v4",
                                    "Socket.IO 4.8",
                                    "Node.js & Express 5",
                                    "MongoDB Atlas (2dsphere)",
                                    "Mongoose 9",
                                    "NextAuth.js v5",
                                    "ZegoCloud Video KYC",
                                    "Stripe Payments",
                                    "Leaflet & React-Leaflet",
                                    "Geoapify API",
                                    "Redux Toolkit",
                                    "Cloudinary CDN",
                                    "Nodemailer",
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
                                                alt={`RoadMate Screenshot ${index + 1}`}
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
                                {/* Rider */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300 mt-0.5 shadow-sm shadow-cyan-500/20">
                                        <Car className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Rider Experience:</strong>
                                        Instant fare calculation across 5 vehicle classes (Bike, Car, Loading, Truck, Auto), autocomplete search via Geoapify & Leaflet map pins, live telemetry driver vehicle tracking, in-ride chat, and spending analytics.
                                    </span>
                                </li>

                                {/* Driver */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-300 mt-0.5 shadow-sm shadow-purple-500/20">
                                        <UserCheck className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Driver Partner Portal:</strong>
                                        6-step onboarding wizard (vehicle specs, Cloudinary document upload for NID/RC/License, bKash/Nagad payout wallets, custom fare pricing, Video KYC), audio/visual dispatch alerts, and full ride lifecycle handshakes.
                                    </span>
                                </li>

                                {/* Security */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-500/20">
                                        <ShieldCheck className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Dual-OTP Ride Security:</strong>
                                        4-digit pickup OTP verification to start the ride and completion drop OTP verification to prevent unauthorized drop-offs.
                                    </span>
                                </li>

                                {/* Video KYC */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0 text-pink-300 mt-0.5 shadow-sm shadow-pink-500/20">
                                        <Video className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">ZegoCloud Video KYC:</strong>
                                        Face-to-face real-time video verification room for driver identity and document validation before granting dispatch permissions.
                                    </span>
                                </li>

                                {/* Architecture */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-300 mt-0.5 shadow-sm shadow-blue-500/20">
                                        <Layers className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Decoupled Microservice Architecture:</strong>
                                        Core Next.js 16 API Gateway triggers the Express + Socket.IO server via server-to-server webhook (<code>POST /emit</code>) with shared 2dsphere MongoDB Atlas cluster.
                                    </span>
                                </li>

                                {/* Payments */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0 text-teal-300 mt-0.5 shadow-sm shadow-teal-500/20">
                                        <CreditCard className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Stripe Cashless Settlement:</strong>
                                        End-to-end payment processing with automated driver payout wallet and platform commission calculation.
                                    </span>
                                </li>

                                {/* Admin */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300 mt-0.5 shadow-sm shadow-amber-500/20">
                                        <LayoutDashboard className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Admin Command Center:</strong>
                                        Real-time platform analytics, document verification pipeline (one-click approve/reject NID, License, RC), vehicle review queue, and searchable paginated people directory.
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

export default ProfileDetails6;
