"use client";

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CodeXml, Database, Layout, Server, Bot, ShieldCheck } from "lucide-react";

export default function Skills() {
    const timelineData = [
        {
            title: "Programming & Backend APIs",
            icon: <CodeXml />,
            color: "#9463F8",
            bgColor: "rgba(148, 99, 248, 0.12)",
            skills: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'HTTP/JSON', 'Third-Party APIs'],
            desc: "Developing robust server-side microservices, high-throughput RESTful and GraphQL endpoints, and secure API integrations."
        },
        {
            title: "Databases & In-Memory Caching",
            icon: <Database />,
            color: "#10B981",
            bgColor: "rgba(16, 185, 129, 0.12)",
            skills: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Redis (ioredis)'],
            desc: "Relational schema design, document data modeling, and sub-millisecond in-memory caching for high-traffic geospatial endpoints."
        },
        {
            title: "Frontend Architecture & UI Systems",
            icon: <Layout />,
            color: "#38BDF8",
            bgColor: "rgba(56, 189, 248, 0.12)",
            skills: ['React.js', 'Next.js 15', 'Tailwind CSS', 'SASS / CSS3', 'Ant Design', 'Bootstrap', 'Olova UI Library'],
            desc: "Component-driven architecture, dark-mode design systems, open-source UI libraries, and highly responsive web experiences."
        },
        {
            title: "DevOps, Cloud Infrastructure & Observability",
            icon: <Server />,
            color: "#F59E0B",
            bgColor: "rgba(245, 158, 11, 0.12)",
            skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'Nginx', 'Docker Compose'],
            desc: "Automated CI/CD pipelines to AWS, production Docker containerization, Kubernetes cluster orchestration, and metrics monitoring with Prometheus & Grafana."
        },
        {
            title: "AI Engineering, Agents & Automation",
            icon: <Bot />,
            color: "#EC4899",
            bgColor: "rgba(236, 72, 153, 0.12)",
            skills: ['Python', 'LLM APIs', 'RAG', 'Vector DB', 'LangChain', 'LangGraph', 'Agents', 'n8n', 'AI Evaluation'],
            desc: "Autonomous AI Agents with LangGraph & LangChain, production RAG with Vector DBs, Python LLM APIs, n8n workflows, and systematic AI Evaluation."
        },
        {
            title: "Competitive Programming & Foundations",
            icon: <ShieldCheck />,
            color: "#8B5CF6",
            bgColor: "rgba(139, 92, 246, 0.12)",
            skills: ['340+ Problems Solved', 'Data Structures', 'Algorithms', 'Codeforces', 'CodeChef', 'LeetCode', 'ICPC Preliminary'],
            desc: "Strong computer science foundations, optimal time-complexity design, and independent analytical debugging."
        }
    ];

    return (
        <div className='p-6 sm:p-10 mt-10 bg-transparent'>
            <section className="text-center mt-12 sm:mt-20 px-4 max-w-7xl mx-auto" aria-label="Bibek Bhowmick Technical Skills" id="skills-section">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white">
                    Bibek Bhowmick's <span className="bg-gradient-to-r from-[#9463F8] via-[#C084FC] to-[#38BDF8] bg-clip-text text-transparent">Technical Skills</span>
                </h2>
                <p className="text-[#C5B4E3] max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
                    Full Stack Engineer proficient across JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, PostgreSQL, MongoDB, Redis, Docker, and AI workflow automation.
                </p>

                <div className="mt-12 sm:mt-16">
                    <VerticalTimeline lineColor="#9463F8">
                        {timelineData.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                contentStyle={{
                                    background: item.bgColor,
                                    color: '#fff',
                                    border: `1px solid ${item.color}80`,
                                    borderRadius: '16px',
                                    boxShadow: `0 10px 30px -10px ${item.color}30`
                                }}
                                contentArrowStyle={{ borderRight: `10px solid ${item.color}80` }}
                                iconStyle={{ background: item.color, color: '#fff' }}
                                icon={item.icon}
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-left" style={{ color: item.color }}>
                                    {item.title}
                                </h3>
                                <div className="flex flex-wrap gap-1.5 mt-3.5">
                                    {item.skills.map(s => (
                                        <span
                                            key={s}
                                            className="px-2.5 py-1 bg-white/10 border border-white/15 rounded-lg text-xs font-semibold text-white/95"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-300 text-xs sm:text-sm mt-3 text-left leading-relaxed">
                                    {item.desc}
                                </p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </section>
        </div>
    );
}
