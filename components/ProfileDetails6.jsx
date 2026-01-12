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

const ProfileDetails6 = () => {
    const images = [
        "/assets/Screenshot_4.jpg",
        "/assets/Screenshot_30.jpg",
        "/assets/Screenshot_31.jpg",
        "/assets/Screenshot_32.jpg",
        "/assets/Screenshot_33.jpg",
        "/assets/Screenshot_34.jpg",
        "/assets/Screenshot_35.jpg",
        "/assets/Screenshot_36.jpg",
        "/assets/Screenshot_37.jpg",
        "/assets/Screenshot_38.jpg",
        "/assets/Screenshot_39.jpg",
        "/assets/Screenshot_40.jpg",
        "/assets/Screenshot_41.jpg",
        "/assets/Screenshot_42.jpg",
        "/assets/Screenshot_43.jpg",
        "/assets/Screenshot_44.jpg",
        "/assets/Screenshot_45.jpg"
    ];

    return (
        <div className="relative font-extrabold text-white min-h-screen p-6">
            <AnimatedBackground />
            <div className="absolute w-full min-h-full overflow-y-auto z-1 top-0 left-0">

                <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4  gap-4">

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
                                Projects &gt; RideBook
                            </span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-white">
                                RideBook:{" "}
                                <span className="text-purple-400">
                                    Complete Ride Booking Platform
                                </span>
                            </h1>
                        </div>

                        {/* Stats Section */}
                        <div className="flex space-x-4 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">3</p>
                                <p className="text-gray-400">User Roles</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">100%</p>
                                <p className="text-gray-400">Responsive</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
                            <a href="https://github.com/bibek-totol/ride-booking-nexus-frontend-" className="bg-blue-600 px-6 py-2 rounded-lg">
                                GitHub Client
                            </a>
                            <a href="https://github.com/bibek-totol/backend-ride-booking-api" className="bg-purple-600 px-6 py-2 rounded-lg">
                                GitHub Server
                            </a>
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {[
                                    "React JS",
                                    "TypeScript",
                                    "Tailwind CSS",
                                    "Shadcn UI",
                                    "React Router",
                                    "React Query",
                                    "Express JS",
                                    "Mongoose",
                                    "JWT",
                                    "Postman API Testing",
                                    "Stripe",
                                    "Third Party API",

                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="pookie3 px-3 py-1 rounded-lg"
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

                            <h3 className="text-lg mt-2">Key Features</h3>

                            <ul className="mt-2 space-y-2">

                                {/* Riders */}
                                <li className="pookie3 p-3 rounded-lg">
                                    🔹  <b>Rider Features:</b> Request rides with pickup & destination, track real-time ride status, cancel pending rides, view ride history, and manage profile details.
                                </li>

                                {/* Drivers */}
                                <li className="pookie3 p-3 rounded-lg">
                                    🔹  <b>Driver Features:</b> Accept or reject ride requests, update ride status (picked up, completed), toggle availability, track earnings, and manage driver profile.
                                </li>

                                {/* Admin */}
                                <li className="pookie3 p-3 rounded-lg">
                                    🔹  <b>Admin Features:</b> Dashboard overview with key metrics, manage users & drivers, monitor all rides, block/unblock users, and generate reports.
                                </li>

                                {/* Design */}
                                <li className="pookie3 p-3 rounded-lg">
                                    🔹  <b>Modern UI & UX:</b> Clean professional design with gradient accents, semantic HSL colors, status indicators, toast notifications, and dark-mode-ready system.
                                </li>

                                {/* Responsive */}
                                <li className="pookie3 p-3 rounded-lg">
                                    🔹  <b>Fully Responsive:</b> Optimized experience for mobile, tablet, and desktop devices.
                                </li>

                                {/* Backend Ready */}
                                <li className="pookie3 p-3 rounded-lg">
                                    🔹  <b>API Ready:</b> Fully integrated with React Query for seamless backend communication and scalable architecture.
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
