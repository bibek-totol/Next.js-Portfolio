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
    GraduationCap,
    Bed,
    Building2,
    Users,
    Truck,
    Package,
    FolderKanban,
    BookOpen,
    Utensils,
    CreditCard,
    ShieldCheck,
    Bot
} from "lucide-react";

const ProfileDetails8 = () => {
    const images = [
        "/assets/erp-pic/Screenshot_14.jpg",
        "/assets/erp-pic/Screenshot_15.jpg",
        "/assets/erp-pic/Screenshot_16.jpg",
        "/assets/erp-pic/Screenshot_17.jpg",
        "/assets/erp-pic/Screenshot_18.jpg",
        "/assets/erp-pic/Screenshot_19.jpg",
        "/assets/erp-pic/Screenshot_20.jpg",
        "/assets/erp-pic/Screenshot_21.jpg",
        "/assets/erp-pic/Screenshot_25.jpg",
        "/assets/erp-pic/Screenshot_26.jpg",
        "/assets/erp-pic/Screenshot_27.jpg",
        "/assets/erp-pic/Screenshot_28.jpg",
        "/assets/erp-pic/Screenshot_29.jpg",
        "/assets/erp-pic/Screenshot_30.jpg",
        "/assets/erp-pic/Screenshot_31.jpg",
        "/assets/erp-pic/Screenshot_32.jpg",
        "/assets/erp-pic/Screenshot_33.jpg"
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
                                Projects &gt; NADA ERP
                            </span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-white">
                                NADA ERP:{" "}
                                <span className="text-purple-400">
                                    Enterprise Resource Planning System (Full-Stack)
                                </span>
                            </h1>
                            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                                An institutional-grade, full-stack ERP web platform designed to streamline and automate multi-departmental operations (also powering the BARD Enterprise Resource Planning System for the Bangladesh Academy for Rural Development). Built on Next.js 16 (App Router), React 18.3, TypeScript 5.8, Tailwind CSS 3.4, and MongoDB with Mongoose 9. Centralizes 12+ enterprise modules into an integrated, reactive dashboard augmented with Google Gemini 2.5 Flash AI.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="flex space-x-4 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">12+</p>
                                <p className="text-gray-400">Core Modules</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">100+</p>
                                <p className="text-gray-400">Mongoose Models</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold">Gemini</p>
                                <p className="text-gray-400">AI Assistant</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
                            <a
                                href="https://github.com/bibek-totol/NADA-ERP-FUll-STACK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 px-6 py-2 rounded-lg text-center font-bold hover:brightness-110 transition col-span-2 sm:col-span-1"
                            >
                                GitHub Repository
                            </a>
                            <div className="pookie3 px-4 py-2 rounded-lg text-center text-sm font-semibold flex items-center justify-center text-cyan-300">
                                Institutional Grade
                            </div>
                            <div className="pookie3 px-4 py-2 rounded-lg text-center text-sm font-semibold flex items-center justify-center text-emerald-300">
                                BARD ERP Powerhouse
                            </div>
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {[
                                    "Next.js 16 (App Router)",
                                    "React 18.3",
                                    "TypeScript 5.8",
                                    "Tailwind CSS 3.4",
                                    "MongoDB 7.x",
                                    "Mongoose 9.2",
                                    "Google Gemini 2.5 Flash",
                                    "TanStack React Query v5",
                                    "Cloudinary",
                                    "UploadThing",
                                    "Jose & JWT Auth",
                                    "Bcrypt.js",
                                    "Recharts",
                                    "Chart.js 4.5",
                                    "jsPDF & Autotable",
                                    "SheetJS (XLSX)",
                                    "Sonner & SweetAlert2",
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
                                                alt={`NADA ERP Screenshot ${index + 1}`}
                                                className="rounded-lg w-full h-64 object-cover"
                                                width={500}
                                                height={256}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Suspense>

                            <h3 className="text-lg mt-2">Comprehensive Module Breakdown</h3>

                            <ul className="mt-2 space-y-2.5">
                                {/* Training & Academic Management */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300 mt-0.5 shadow-sm shadow-cyan-500/20">
                                        <GraduationCap className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Training & Academic Management:</strong>
                                        Course and batch architecture, Course Management Team (CMT) delegation, lecture dropzones (UploadThing/Cloudinary), automated exam schedules, question banks, and trainee transcript generation.
                                    </span>
                                </li>

                                {/* Dormitory & Accommodation */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-300 mt-0.5 shadow-sm shadow-purple-500/20">
                                        <Bed className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Dormitory & Accommodation:</strong>
                                        Multi-floor building & wing hierarchy, automated bed-level allocation preventing overbooking, Room Boy maintenance assignments, and gate-pass trainee movement tracking.
                                    </span>
                                </li>

                                {/* Hostel & Guest House */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-500/20">
                                        <Building2 className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Hostel & Guest House Management:</strong>
                                        Online VIP guest booking and requisition approval chains, real-time room availability matrix (Available, Occupied, Maintenance), automated bill settlement, and incident logs.
                                    </span>
                                </li>

                                {/* Human Resource Management (HRM) */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0 text-pink-300 mt-0.5 shadow-sm shadow-pink-500/20">
                                        <Users className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Human Resource Management (HRM):</strong>
                                        Employee directory with designation hierarchies, daily attendance check-in/out registers, multi-level leave approvals (Casual/Sick/Earned), and automated payroll with salary slips.
                                    </span>
                                </li>

                                {/* Vehicle & Fleet Logistics */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-300 mt-0.5 shadow-sm shadow-blue-500/20">
                                        <Truck className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Vehicle & Fleet Logistics:</strong>
                                        Master vehicle registry, departmental booking requisition workflow, driver dispatch, trip/mileage logging, and fuel consumption rate auditing with receipts.
                                    </span>
                                </li>

                                {/* Inventory & Warehouse */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300 mt-0.5 shadow-sm shadow-amber-500/20">
                                        <Package className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Inventory & Warehouse Management:</strong>
                                        Centralized stock catalog, minimum threshold reorder alerts, digital purchase requisitions, Goods Received Notes (GRN), and inter-warehouse inventory adjustments.
                                    </span>
                                </li>

                                {/* Project Planning & Milestones */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0 text-teal-300 mt-0.5 shadow-sm shadow-teal-500/20">
                                        <FolderKanban className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Project Planning & Milestones:</strong>
                                        Full project lifecycle tracking across 5 phases, dynamic milestone progress bars, budget vs. actual expenditure ledgers, and team role assignments.
                                    </span>
                                </li>

                                {/* Research & Publications */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center flex-shrink-0 text-indigo-300 mt-0.5 shadow-sm shadow-indigo-500/20">
                                        <BookOpen className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Research & Publications Lifecycle:</strong>
                                        Digital research proposal submission pipeline, multi-tier committee evaluation gateways, and institutional manuscript archiving with downloadable research papers.
                                    </span>
                                </li>

                                {/* Cafeteria & Dining Operations */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-400/40 flex items-center justify-center flex-shrink-0 text-orange-300 mt-0.5 shadow-sm shadow-orange-500/20">
                                        <Utensils className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Cafeteria & Dining Operations:</strong>
                                        Meal planning (breakfast, lunch, dinner, snacks), pantry ingredient inventory with waste reduction, meal vouchers, and monthly cafeteria billing ledger integration.
                                    </span>
                                </li>

                                {/* Accounts & Financial Oversight */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-400/20">
                                        <CreditCard className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Accounts & Financial Oversight:</strong>
                                        Head-wise Chart of Accounts, debit/credit voucher management with digital attachments, income tax auditing documentation, and budgetary categorization.
                                    </span>
                                </li>

                                {/* RBAC & Security */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-400/40 flex items-center justify-center flex-shrink-0 text-rose-300 mt-0.5 shadow-sm shadow-rose-500/20">
                                        <ShieldCheck className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">RBAC & Security Engine:</strong>
                                        Granular roles (SUPER_ADMIN, HOSTEL_MANAGER, WARDEN, ACCOUNTS, RESIDENT), frontend `ModuleGuard` component wrappers, HTTP-only JWT cookies, and tamper-evident audit logs.
                                    </span>
                                </li>

                                {/* AI Virtual Assistant */}
                                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-400/40 flex items-center justify-center flex-shrink-0 text-violet-300 mt-0.5 shadow-sm shadow-violet-500/20">
                                        <Bot className="w-4 h-4" />
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold mr-1">Google Gemini 2.5 Flash AI Assistant:</strong>
                                        Conversational AI co-pilot powered by `@google/genai` embedded directly in the ERP to guide administrators, summarize operational rules, and resolve institutional queries.
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

export default ProfileDetails8;
