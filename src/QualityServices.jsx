"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Layout, 
    Server, 
    Layers, 
    ShieldCheck, 
    CheckCircle2, 
    ArrowRight, 
    Sparkles, 
    Zap, 
    Cpu, 
    Lock,
    Clock,
    HeartHandshake
} from 'lucide-react';

export default function QualityServices() {
    const services = [
        {
            id: 'frontend',
            title: 'Front-End Architecture & UI/UX',
            badge: 'Modern & Interactive',
            description: 'Designing and building responsive, accessible, and blazing-fast web interfaces with pixel-perfect attention to detail and fluid animations.',
            icon: Layout,
            gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
            iconBg: 'from-[#8B5CF6] to-[#EC4899]',
            borderColor: 'group-hover:border-purple-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]',
            accentText: 'text-purple-300',
            features: [
                'Component-driven architecture using React.js & Next.js 15',
                'Mobile-first responsive styling with Tailwind CSS',
                'Interactive micro-animations using Framer Motion',
                'Optimized Core Web Vitals for maximum performance'
            ],
            tech: ['React.js', 'Next.js 15', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
        },
        {
            id: 'backend',
            title: 'Back-End Engineering & APIs',
            badge: 'Scalable & Resilient',
            description: 'Engineering robust server-side architectures, high-throughput RESTful/GraphQL APIs, and secure, high-performance database systems.',
            icon: Server,
            gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
            iconBg: 'from-[#06B6D4] to-[#3B82F6]',
            borderColor: 'group-hover:border-cyan-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
            accentText: 'text-cyan-300',
            features: [
                'RESTful & GraphQL API development with Node.js & Express',
                'Relational and NoSQL modeling (PostgreSQL, MongoDB)',
                'Stateless JWT authentication & role-based access control',
                'High-speed in-memory caching & rate-limiting with Redis'
            ],
            tech: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
        },
        {
            id: 'fullstack',
            title: 'Full-Stack Web Solutions',
            badge: 'End-to-End Delivery',
            description: 'Delivering complete, turn-key web applications from intuitive front-end clients to scalable backend microservices and database tiers.',
            icon: Layers,
            gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
            iconBg: 'from-[#10B981] to-[#06B6D4]',
            borderColor: 'group-hover:border-emerald-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
            accentText: 'text-emerald-300',
            features: [
                'Turn-key MERN & Next.js App Router full-stack web applications',
                'Real-time two-way communication using WebSockets / Socket.io',
                'Third-party payment gateways (Stripe, SSLCommerz, PayPal)',
                'Containerized deployments with Docker & automated CI/CD'
            ],
            tech: ['MERN Stack', 'Next.js Fullstack', 'Socket.io', 'Docker', 'Stripe']
        },
        {
            id: 'seo-security',
            title: 'Performance, SEO & Security',
            badge: 'Speed & Protection',
            description: 'Supercharging web platforms for sub-second load times, top search engine rankings, and enterprise-grade protection against vulnerabilities.',
            icon: ShieldCheck,
            gradient: 'from-amber-500/20 via-rose-500/10 to-transparent',
            iconBg: 'from-[#F59E0B] to-[#EF4444]',
            borderColor: 'group-hover:border-amber-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
            accentText: 'text-amber-300',
            features: [
                '95+ Google Lighthouse scores with lazy-loading & minification',
                'Semantic Schema.org JSON-LD and OpenGraph metadata',
                'OWASP security standards, CSRF/XSS hardening & sanitation',
                'DDoS resilience, rate-limiting & data schema validation'
            ],
            tech: ['Core Web Vitals', 'Schema.org', 'Next.js SEO', 'OWASP Hardening']
        }
    ];

    const valueProps = [
        { icon: Zap, label: 'High Performance', desc: 'Blazing sub-second response times' },
        { icon: Lock, label: 'Security First', desc: 'Protected data & robust auth protocols' },
        { icon: Clock, label: 'On-Time Delivery', desc: 'Agile sprints with transparent updates' },
        { icon: HeartHandshake, label: 'Reliable Support', desc: 'Comprehensive post-launch guidance' }
    ];

    return (
        <section 
            className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" 
            aria-label="Web Development Services by Bibek Bhowmick" 
            id="services-section"
        >
            {/* Ambient Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
               

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    My Quality{' '}
                    <span className="bg-gradient-to-r from-[#9463F8] via-[#C084FC] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(148,99,248,0.3)]">
                        Web Development Services
                    </span>
                </h2>

                <p className="text-[#C5B4E3] text-sm sm:text-base md:text-lg font-normal mt-5 leading-relaxed">
                    Bibek Bhowmick transforms your vision into robust, high-performance web products. Every solution is architected with modern industry standards, high visual aesthetics, and clean code that scales seamlessly.
                </p>
            </div>

            {/* Services 2x2 Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
                {services.map((service, idx) => {
                    const IconComponent = service.icon;
                    return (
                        <article 
                            key={service.id}
                            className={`group relative flex flex-col justify-between bg-[#131738]/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-8 transition-all duration-300 ${service.borderColor} ${service.glowColor} hover:-translate-y-1.5`}
                        >
                            {/* Inner subtle gradient background on hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                            <div className="relative z-10">
                                {/* Header: Icon + Badge */}
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} p-3 sm:p-3.5 flex items-center justify-center text-white shadow-lg shadow-purple-900/30 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="w-full h-full" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-200 border border-purple-500/25 backdrop-blur-sm">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Title & Synopsis */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                                    {service.title}
                                </h3>
                                <p className="text-[#C5B4E3] text-sm sm:text-base leading-relaxed mt-3">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="mt-6 space-y-2.5">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2.5">
                                            <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0 ${service.accentText}`} />
                                            <span className="text-xs sm:text-sm text-purple-100/90 font-medium leading-normal">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer: Tech Stack Chips & Action Link */}
                            <div className="relative z-10 mt-8 pt-6 border-t border-purple-500/15">
                                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                                    {service.tech.map((t) => (
                                        <span 
                                            key={t}
                                            className="px-2.5 py-1 text-[11px] sm:text-xs font-medium text-purple-200/90 bg-[#191e47]/70 border border-purple-500/20 rounded-lg"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white transition-colors group/link"
                                >
                                    <span>Discuss this service</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Why Choose Me / Value Propositions Ribbon */}
            <div className="mt-14 sm:mt-16 bg-[#131738]/60 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueProps.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-3.5 group">
                                <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-110 group-hover:bg-purple-800/50 transition-all duration-300">
                                    <ItemIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {item.label}
                                    </h4>
                                    <p className="text-xs text-[#C5B4E3] mt-0.5">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
