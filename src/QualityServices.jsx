"use client";

import React from 'react';
import {
    Layout,
    Server,
    ShieldCheck,
    Bot,
    CheckCircle2
} from 'lucide-react';

export default function QualityServices() {
    const services = [
        {
            id: 'frontend',
            title: 'Frontend Architecture & UI Systems',
            badge: 'Next.js 15 & UI/UX',
            description: 'Engineering modular, responsive, and accessible interfaces with component-driven architecture and fluid interactions.',
            icon: Layout,
            gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
            iconBg: 'from-[#8B5CF6] to-[#EC4899]',
            borderColor: 'group-hover:border-purple-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]',
            accentText: 'text-purple-300',
            features: [
                'Component-driven architecture using React.js & Next.js 15',
                'Open-source UI design systems (Contributor to Olova UI)',
                'Pixel-perfect responsive styling with Tailwind CSS & TypeScript'
            ],
            tech: ['Next.js 15', 'React.js', 'TypeScript', 'Tailwind CSS', 'Olova UI']
        },
        {
            id: 'backend',
            title: 'Backend Engineering & Scalable APIs',
            badge: 'Node.js & Redis',
            description: 'Architecting high-throughput RESTful/GraphQL microservices and resilient database systems.',
            icon: Server,
            gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
            iconBg: 'from-[#06B6D4] to-[#3B82F6]',
            borderColor: 'group-hover:border-cyan-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
            accentText: 'text-cyan-300',
            features: [
                'High-throughput RESTful & GraphQL API development with Node.js',
                'Relational and NoSQL modeling with PostgreSQL and MongoDB',
                'In-memory Redis caching & 4-tier Role-Based Access Control (RBAC)'
            ],
            tech: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
        },
        {
            id: 'devops',
            title: 'DevOps & Cloud Infrastructure',
            badge: 'AWS, K8s & CI/CD',
            description: 'Automating cloud deployments, multi-stage containerization, and proactive infrastructure observability.',
            icon: ShieldCheck,
            gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
            iconBg: 'from-[#10B981] to-[#06B6D4]',
            borderColor: 'group-hover:border-emerald-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
            accentText: 'text-emerald-300',
            features: [
                'Automated CI/CD deployment pipelines with GitHub Actions to AWS',
                'Production Docker containerization & Kubernetes orchestration',
                'Real-time system health, metric collection & dashboards with Prometheus & Grafana'
            ],
            tech: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana']
        },
        {
            id: 'ai-automation',
            title: 'AI Agents & RAG Systems',
            badge: 'Python, Agents & RAG',
            description: 'Building autonomous multi-agent workflows, contextual retrieval pipelines, and intelligent automations.',
            icon: Bot,
            gradient: 'from-amber-500/20 via-rose-500/10 to-transparent',
            iconBg: 'from-[#F59E0B] to-[#EF4444]',
            borderColor: 'group-hover:border-amber-500/50',
            glowColor: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
            accentText: 'text-amber-300',
            features: [
                'Autonomous AI Agents & multi-agent systems using LangGraph & LangChain',
                'Production Retrieval-Augmented Generation (RAG) powered by Vector DBs',
                'Custom Python backends integrating LLM APIs, n8n workflows & AI Evaluation'
            ],
            tech: ['Python', 'LangGraph', 'LangChain', 'RAG & Vector DB', 'LLM APIs', 'n8n']
        }
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
                    Technical{' '}
                    <span className="bg-gradient-to-r from-[#9463F8] via-[#C084FC] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(148,99,248,0.3)]">
                        Specializations & Services
                    </span>
                </h2>

                
            </div>

            {/* Services 2x2 Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <article
                            key={service.id}
                            className={`group relative flex flex-col justify-between bg-[#131738]/85 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-7 transition-all duration-300 ${service.borderColor} ${service.glowColor} hover:-translate-y-1.5`}
                        >
                            {/* Inner subtle gradient background on hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                            <div className="relative z-10">
                                {/* Header: Icon + Badge */}
                                <div className="flex items-center justify-between gap-4 mb-5">
                                 
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-200 border border-purple-500/25 backdrop-blur-sm">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Title & Synopsis */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                                    {service.title}
                                </h3>
                                <p className="text-[#C5B4E3] text-xs sm:text-sm leading-relaxed mt-2.5 font-normal">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="mt-5 space-y-2">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2.5">
                                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${service.accentText}`} />
                                            <span className="text-xs sm:text-sm text-purple-100/90 font-medium leading-normal">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer: Tech Stack Chips */}
                            <div className="relative z-10 mt-6 pt-4 border-t border-purple-500/15">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {service.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 text-[11px] sm:text-xs font-medium text-purple-200/90 bg-[#191e47]/70 border border-purple-500/20 rounded-lg"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
