"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";

const ProjectCard = ({ img, link, desc, to }) => (
    <PinContainer
        title={link}
        href={link}
    >
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="w-[270px] md:w-[500px] lg:w-[500px] h-full flex flex-col bg-[#141935] 
                 border-[#002851] shadow-xl hover:shadow-purple-500/40 
                 transition-all duration-300 rounded-2xl overflow-hidden p-5"
        >
            <Image
                src={img}
                alt={`${desc.split(' ').slice(0, 3).join(' ')} - Web Development Project by Bibek Bhowmick`}
                className="w-full h-60 object-cover rounded-xl"
                width={500}
                height={240}
                loading="lazy"
            />

            <div className="mt-4 space-y-3 flex flex-col justify-between flex-1">
                <a
                    className="text-cyan-300 font-bold underline text-sm sm:text-base"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Link
                </a>
                <p className="text-white/80 text-sm sm:text-base flex-grow">{desc}</p>

                <div className="flex justify-end">
                    <Link href={to}>
                        <button
                            className="cursor-pointer px-4 border border-cyan-400 py-2 rounded-xl 
                               bg-gradient-to-r from-[#9463F8] to-[#7d4edc] 
                               hover:scale-110 text-black font-extrabold text-sm sm:text-base 
                               hover:brightness-110 transition"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    </PinContainer>
);



export default function RecentWorks() {
    const mernProjects = [
        {
            id: 1,
            img: "/assets/Screenshot_15.jpg",
            link: "https://ictd-lab-gsi-project-frontend.vercel.app/",
            desc: "ICTD Lab Bangladesh: A full-stack government digital lab management system built to track and manage digital labs across Bangladesh.",
            to: "/details7",
        },
        {
            id: 2,
            img: "/assets/Screenshot_58.webp",
            link: "https://bibek-iems-portal.netlify.app/",
            desc: "IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline scheduling, resource sharing, and management.",
            to: "/details1",
        },
        {
            id: 3,
            img: "/assets/Screenshot_75.webp",
            link: "https://tech-tales2025.netlify.app/",
            desc: "Tech-Tales is a feature-rich blogging app with comments, calendar, and wishlist integration to enhance writing experiences.",
            to: "/details3",
        },
    ];

    const nextProjects = [
        {
            id: 1,
            img: "/assets/Screenshot_4.jpg",
            link: "https://road-mate-microservice.vercel.app/",
            desc: "RoadMate: Real-time ride-sharing & fleet dispatch platform built with Next.js 16 (App Router), React 19, Socket.IO microservice, Leaflet geospatial tracking, ZegoCloud Video KYC, and Stripe cashless payments.",
            to: "/details6",
        },
        {
            id: 2,
            img: "/assets/Screenshot_2.jpg",
            link: "https://ai-job-assistant-five.vercel.app/",
            desc: "JobAI: AI-powered career platform built with Next.js 16, TypeScript, LangChain & LangGraph agents, PDF vector embeddings, JSearch jobs, and real-time Vapi voice mock interviews.",
            to: "/details5",
        },
        {
            id: 3,
            img: "/assets/erp-pic/Screenshot_14.jpg",
            link: "https://nada-erp.vercel.app/",
            desc: "NADA ERP: Institutional-grade Enterprise Resource Planning system (BARD ERP) built with Next.js 16 (App Router), React 18.3, TypeScript 5.8, MongoDB (Mongoose 9), and Google Gemini 2.5 Flash AI Assistant across 12+ enterprise modules.",
            to: "/details8",
        },
    ];

    const aiProjects = [
        {
            id: 1,
            img: "/assets/tele-ai-lead-automation/Screenshot_16.jpg",
            link: "https://youtu.be/_nkOWvK0d3Q?si=igK4QeG5fEnx3NI8",
            desc: "Telegram AI & Odoo Lead Automation: 100% self-hosted multi-turn AI lead generation assistant powered by Google Gemini 3.1 Flash-Lite, n8n, PostgreSQL, and Odoo CRM with 13 custom fields and zero paid middleware.",
            to: "/details9",
        },
    ];

    return (
        <section className="mt-16 rounded-4xl py-20 px-6 sm:px-10 lg:px-24" aria-label="Web Development and AI Automation Projects by Bibek Bhowmick" id="portfolio-section">
            <header className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#B694FA]">
                    Bibek Bhowmick's Recent <span className="text-[#9463F8]">Featured Projects</span>
                </h2>
                <p className="text-[#B694FA] font-medium max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                    Browse my portfolio of Full Stack web development and AI Automation projects built with Next.js, React, Google Gemini AI, n8n, and Odoo CRM.
                    Each project showcases production-ready architecture, intelligent automation, and modern UI/UX design.
                </p>
            </header>

            <Tabs selectedTabClassName="bg-[#9463F8]/10 !text-white/50 shadow-lg shadow-[#9463F8]/50">
                <TabList className="flex flex-wrap justify-center gap-4 text-sm sm:text-base lg:text-lg mt-12 mb-6 bg-black/30 rounded-full p-3 font-semibold text-white">
                    <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
                        Next.js Projects
                    </Tab>
                    <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
                        React.js Projects
                    </Tab>
                    <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
                        AI Automation
                    </Tab>
                </TabList>

                {/* TabPanel 1: Next.js Projects */}
                <TabPanel>
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-56 gap-x-10">
                        {nextProjects.map((proj) => (
                            <ProjectCard key={proj.id} {...proj} />
                        ))}
                    </div>
                </TabPanel>

                {/* TabPanel 2: MERN Stack Projects */}
                <TabPanel>
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-56 gap-x-10">
                        {mernProjects.map((proj) => (
                            <ProjectCard key={proj.id} {...proj} />
                        ))}
                    </div>
                </TabPanel>

                {/* TabPanel 3: AI Automation Projects */}
                <TabPanel>
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-56 gap-x-10">
                        {aiProjects.map((proj) => (
                            <ProjectCard key={proj.id} {...proj} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    );
}
