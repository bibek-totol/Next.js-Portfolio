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
    Bot,
    Workflow,
    Database,
    Cpu,
    Send,
    ShieldCheck,
    Layers,
    UserCheck,
    Server,
    ExternalLink,
    Play,
    Zap,
    AlertTriangle,
    CheckCircle2,
    FileText,
    Boxes
} from "lucide-react";

const ProfileDetails9 = () => {
    const images = [
        "/assets/tele-ai-lead-automation/Screenshot_16.jpg",
        "/assets/tele-ai-lead-automation/Screenshot_17.jpg",
        "/assets/tele-ai-lead-automation/Screenshot_18.jpg",
        "/assets/tele-ai-lead-automation/Screenshot_19.jpg",
        "/assets/tele-ai-lead-automation/Screenshot_20.jpg",
        "/assets/tele-ai-lead-automation/Screenshot_21.jpg",
        "/assets/tele-ai-lead-automation/Screenshot_25.jpg"
    ];

    const customFields = [
        { tech: "x_telegram_chat_id", label: "Telegram Chat ID", type: "Char", desc: "Unique Telegram Chat identifier" },
        { tech: "x_telegram_username", label: "Telegram Username", type: "Char", desc: "Telegram handle or full user name" },
        { tech: "x_telegram_message_id", label: "Telegram Message ID", type: "Char", desc: "Last processed message ID for idempotency" },
        { tech: "x_product_interest", label: "Product Interest", type: "Char", desc: "Identified service or solution needed" },
        { tech: "x_customer_requirement", label: "Customer Requirement", type: "Text", desc: "Full detailed requirement text" },
        { tech: "x_customer_budget", label: "Customer Budget", type: "Char", desc: "Budget range (e.g. 10,000 BDT / $500)" },
        { tech: "x_required_timeline", label: "Required Timeline", type: "Char", desc: "Preferred project deadline / timeline" },
        { tech: "x_customer_location", label: "Customer Location", type: "Char", desc: "City or country location" },
        { tech: "x_preferred_contact_time", label: "Preferred Contact Time", type: "Char", desc: "Optimal time window for sales follow-up" },
        { tech: "x_ai_lead_score", label: "AI Lead Score", type: "Integer", desc: "Dynamic qualification score (10–95)" },
        { tech: "x_ai_summary", label: "AI Summary", type: "Text", desc: "Executive summary synthesized by Gemini AI" },
        { tech: "x_handoff_reason", label: "Handoff Reason", type: "Text", desc: "Specific trigger for human agent takeover" },
        { tech: "x_last_message_time", label: "Last Message Time", type: "Datetime", desc: "Timestamp of latest customer interaction" }
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
                                <button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                                    🔙 Back
                                </button>
                            </Link>
                            <span className="text-gray-400">
                                Projects &gt; AI Automation &gt; Telegram AI & Odoo CRM
                            </span>
                        </div>

                        {/* Hero Section */}
                        <div className="mt-8">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                                Free Self-Hosted{" "}
                                <span className="text-purple-400">
                                    Telegram AI & Odoo Lead Automation
                                </span>
                            </h1>
                            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                                A 100% self-hosted, enterprise-grade AI Lead Generation and CRM qualification system. Connects Telegram customer conversations in real-time to an on-premise Odoo Community 17 CRM instance via an automated n8n workflow engine and Google Gemini 3.1 Flash-Lite AI. Built with zero paid middleware subscriptions, featuring real-time multi-turn conversation memory, dynamic business knowledge retrieval, and automated bidirectional synchronization across 13 custom Odoo CRM fields.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-cyan-300">13</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Custom CRM Fields</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-emerald-300">$0</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Middleware Cost</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-purple-300">Gemini 3.1</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Flash-Lite AI</p>
                            </div>
                            <div className="pookie3 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-pink-300">100%</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Self-Hosted</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-3">
                            <a
                                href="https://youtu.be/_nkOWvK0d3Q?si=igK4QeG5fEnx3NI8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-600 px-5 py-2.5 rounded-lg text-center font-bold hover:brightness-110 transition flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-red-600/30"
                            >
                                <Play className="w-4 h-4 fill-white" />
                                Watch Video Demo
                            </a>
                            <a
                                href="https://github.com/bibek-totol/Telegram-AI-and-Odoo-Lead-Automation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 px-5 py-2.5 rounded-lg text-center font-bold hover:brightness-110 transition flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-purple-600/30"
                            >
                                <ExternalLink className="w-4 h-4" />
                                GitHub Repository
                            </a>
                            <div className="pookie3 px-4 py-2 rounded-lg text-center text-xs sm:text-sm font-semibold flex items-center justify-center text-cyan-300 border border-cyan-400/30">
                                Free Self-Hosted Stack
                            </div>
                        </div>

                        {/* Video Demo Embed Section */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold flex items-center gap-2 text-cyan-300 mb-3">
                                <Play className="w-5 h-5 text-red-400" />
                                Live Architecture & End-to-End Demo Video
                            </h3>
                            <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/40 aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube-nocookie.com/embed/_nkOWvK0d3Q"
                                    title="Free Self-Hosted Telegram AI & Odoo Lead Automation Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Technologies Used */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">
                                Core Technologies & Stack
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {[
                                    "Google Gemini 3.1 Flash-Lite",
                                    "n8n Community (Self-Hosted)",
                                    "Odoo Community 17 (CRM)",
                                    "PostgreSQL 16",
                                    "Telegram Bot API",
                                    "Docker & Docker Compose",
                                    "Cloudflare Quick Tunnel",
                                    "Odoo JSON-RPC API",
                                    "Custom Addon (ai_lead)",
                                    "Multi-Turn Conversation Memory",
                                    "Idempotent Webhook Processing",
                                    "PowerShell & Bash Automation"
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="pookie3 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Architecture Pipeline Visual */}
                        <div className="mt-8 p-4 pookie3 rounded-xl border border-purple-500/30">
                            <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2 mb-3">
                                <Workflow className="w-5 h-5" />
                                Real-Time Architecture Pipeline
                            </h3>
                            <div className="text-xs sm:text-sm font-mono text-gray-200 bg-black/50 p-3 rounded-lg overflow-x-auto leading-relaxed border border-white/10">
                                <div>[Telegram User] ──► (Bot API Webhook) ──► [Cloudflare Tunnel]</div>
                                <div className="text-purple-400">      │</div>
                                <div className="text-purple-400">      ▼ (POST /webhook/telegram)</div>
                                <div>[n8n Master Orchestrator (Docker)]</div>
                                <div className="text-cyan-400">      ├──► [PostgreSQL] (Deduplication, Chat History & Knowledge)</div>
                                <div className="text-emerald-400">      ├──► [Gemini 3.1 Flash-Lite] (Structured JSON Extraction)</div>
                                <div className="text-pink-400">      ├──► [Telegram Bot API] (Instant Contextual Reply)</div>
                                <div className="text-yellow-400">      └──► [Odoo CRM 17 (JSON-RPC)] (13 Custom Fields Sync)</div>
                            </div>
                        </div>

                        {/* 13 Custom CRM Fields Summary */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2 mb-3">
                                <Boxes className="w-5 h-5" />
                                13 Custom CRM Fields Engineered (`ai_lead` Addon)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-normal">
                                {customFields.map((field) => (
                                    <div key={field.tech} className="pookie3 p-2.5 rounded-lg border border-white/10">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-white text-xs">{field.label}</span>
                                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30">
                                                {field.type}
                                            </span>
                                        </div>
                                        <p className="text-cyan-400 font-mono text-[11px] mt-1">{field.tech}</p>
                                        <p className="text-gray-400 text-[11px] mt-0.5">{field.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Production Limitations Alert */}
                        <div className="mt-8 p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200">
                            <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                <span>Production Considerations & Known Constraints</span>
                            </div>
                            <ul className="mt-2 space-y-1.5 text-xs text-amber-100/90 list-disc list-inside font-medium leading-relaxed">
                                <li><strong>Host-PC Dependent:</strong> Local Docker instance without uptime SLA; production requires cloud VPS (e.g., DigitalOcean / Hetzner).</li>
                                <li><strong>Ephemeral Tunnels:</strong> Cloudflare Quick Tunnels reset URLs on restart; production recommends Named Cloudflare Tunnel with DNS CNAME.</li>
                                <li><strong>Gemini Free Tier Quotas:</strong> 15 RPM / 1,500 RPD free tier limits; production requires paid Pay-As-You-Go API tier for concurrency.</li>
                                <li><strong>Text-Only Flow:</strong> Voice notes and image processing require speech-to-text / multimodal additions.</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div>
                        {/* Swiper Carousel */}
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
                                        delay: 2800,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="rounded-xl shadow-2xl border border-white/10"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative h-64 sm:h-80 w-full">
                                                <Image
                                                    src={img}
                                                    alt={`Telegram AI & Odoo Lead Automation Screenshot ${index + 1}`}
                                                    className="rounded-xl w-full h-full object-cover"
                                                    width={700}
                                                    height={400}
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Suspense>

                            {/* Implementation Breakdown Title */}
                            <h3 className="text-xl font-bold mt-8 mb-4 text-purple-300 flex items-center gap-2">
                                <Cpu className="w-5 h-5" />
                                Comprehensive Implementation & Architectural Phases
                            </h3>

                            {/* Feature & Phase Breakdown */}
                            <ul className="space-y-3">
                                {/* Phase 1: Multi-Container Docker */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-300 mt-0.5 shadow-sm shadow-blue-500/20">
                                        <Server className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 1: Multi-Container Docker Infrastructure
                                        </strong>
                                        Orchestrates 4 integrated containers via `docker-compose.yml`: self-hosted n8n (port 5678), PostgreSQL 16 (port 5432), Odoo Community 17 (port 8069), and Odoo dedicated DB. Configured with automated volume persistence, unified internal network bridging, and `.env` secret token security.
                                    </div>
                                </li>

                                {/* Phase 2: Telegram Bot & Cloudflare Tunnel */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300 mt-0.5 shadow-sm shadow-cyan-500/20">
                                        <Send className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 2: Telegram Bot API & Secure Cloudflare Quick Tunnel
                                        </strong>
                                        Bot setup via @BotFather integrated with Cloudflare Quick Tunnel (`cloudflared`). Registers Webhook URL with a cryptographically secure `x-telegram-bot-api-secret-token` validated in n8n code nodes to reject unauthorized webhook requests.
                                    </div>
                                </li>

                                {/* Phase 3: Custom Odoo Addon */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-500/20">
                                        <Boxes className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 3: Custom Odoo Addon (`ai_lead`) & XML UI Tab Injection
                                        </strong>
                                        Native Python module mounted directly into Odoo container. Extends `crm.lead` with 13 custom fields and inherits `crm.lead.form` view to automatically inject a dedicated "Telegram AI Info" tab with field groupings for conversation metadata, qualification parameters, and human handoff telemetry.
                                    </div>
                                </li>

                                {/* Phase 4: Gemini AI Qualification Flow */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-300 mt-0.5 shadow-sm shadow-purple-500/20">
                                        <Bot className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 4: Structured 1-Question Qualification Flow & JSON Enforcement
                                        </strong>
                                        Gemini 3.1 Flash-Lite system prompt acts as a structured Lead Qualification Specialist. Methodically queries: Service Requirement → Budget → Timeline → Location → Preferred Contact Time → Contact Phone/Email. Strictly enforces JSON responses with `lead_ready`, `lead_score` (10-95), and parsed lead objects.
                                    </div>
                                </li>

                                {/* Phase 5: n8n Master Workflow */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300 mt-0.5 shadow-sm shadow-amber-500/20">
                                        <Workflow className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 5: n8n Master Workflow & Native Node Pipeline
                                        </strong>
                                        End-to-end execution pipeline using 17 native nodes: Webhook ingestion → Payload validation → Idempotency check against `processed_messages` → History query → Gemini API request → Telegram reply dispatch → Odoo JSON-RPC authentication (`common/authenticate`) → Lead search (`crm.lead.search`) → Dynamic Create/Write.
                                    </div>
                                </li>

                                {/* Phase 6: Knowledge Base & Memory */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center flex-shrink-0 text-indigo-300 mt-0.5 shadow-sm shadow-indigo-500/20">
                                        <Database className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 6: Dynamic Business Knowledge Base & Multi-Turn History
                                        </strong>
                                        Queries PostgreSQL table `business_knowledge` to inject company service catalog, offerings, and pricing into the AI prompt in real-time without restarting containers. Persists the last 10 chat messages per user to maintain conversational context across turns.
                                    </div>
                                </li>

                                {/* Phase 7: High Intent & Human Handoff */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0 text-pink-300 mt-0.5 shadow-sm shadow-pink-500/20">
                                        <UserCheck className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 7: High-Intent Triggers & Automated Human Handoff
                                        </strong>
                                        Detects phone/email entry or explicit operator requests ("agent", "call me", "talk to human"). Sets `human_handoff = true` and `lead_ready = true` in Odoo CRM, assigns lead score 90+, and alerts human sales consultants with detailed requirement notes.
                                    </div>
                                </li>

                                {/* Phase 8: Idempotency & Multilingual Fallback */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-400/40 flex items-center justify-center flex-shrink-0 text-rose-300 mt-0.5 shadow-sm shadow-rose-500/20">
                                        <ShieldCheck className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 8: Duplicate Webhook Protection & Resilient Fallbacks
                                        </strong>
                                        Guarantees zero duplicate replies via primary key constraints in `processed_messages`. Features regex phone/email extraction fallbacks and polite bilingual (English & Bangla) fallback messaging if API limits or external timeouts occur.
                                    </div>
                                </li>

                                {/* Phase 9: Automated Backup */}
                                <li className="pookie3 p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                                    <span className="w-8 h-8 rounded-lg bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-400/20">
                                        <FileText className="w-4 h-4" />
                                    </span>
                                    <div className="flex-1 leading-relaxed">
                                        <strong className="text-white font-bold block mb-1">
                                            Phase 9: Maintenance & Automated PowerShell Backup
                                        </strong>
                                        Delivers production-grade maintenance automation with `backup_databases.ps1`, generating timestamped `.sql` dumps of PostgreSQL and Odoo databases with 30-day automated retention cleanup.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails9;
