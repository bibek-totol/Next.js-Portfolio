import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CodeXml, Database, Layout, ShieldCheck, Server, ChevronDown,Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  // 1. Data array to keep the return statement clean
  const timelineData = [
    {
      title: "Programming Languages",
      icon: <CodeXml />,
      color: "#9463F8",
      bgColor: "rgba(148, 99, 248, 0.1)",
      skills: ['C++', 'JavaScript', 'TypeScript'],
      desc: "Building high-performance applications and scalable web solutions."
    },
    {
      title: "Frameworks",
      icon: <Layout />,
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)",
      skills: ['React.js', 'Next.js', 'Express.js'],
      desc: "Specialized in SEO-friendly Next.js and dynamic React interfaces."
    },
    {
      title: "Data Management",
      icon: <Database />,
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      skills: ['Mongoose', 'PostgreSQL', 'Prisma', 'Redis'],
      desc: "Architecting robust schemas and high-speed caching."
    },
    {
      title: "Backend & Security",
      icon: <ShieldCheck />,
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
      skills: ['Auth', 'JWT Tokens', 'Middleware', 'Rate Limiting'],
      desc: "Implementing secure session handling and DDoS protection."
    },
    {
      title: "Advanced Architecture",
      icon: <Server />,
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
      skills: ['Microservices', 'Docker', 'K8s'],
      desc: "Designing decoupled, resilient systems that scale horizontally."
    }
  ];

  

  return (
    <div className='p-10 mt-10 bg-transparent'>
      <section className="text-center mt-20 px-5">
        <h2 className="text-4xl lg:text-6xl font-bold text-white">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        
        <VerticalTimeline lineColor="#9463F8">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ 
                background: item.bgColor, 
                color: '#fff', 
                border: `1px solid ${item.color}80`, 
                borderRadius: '15px' 
              }}
              contentArrowStyle={{ borderRight: `10px solid ${item.color}80` }}
              iconStyle={{ background: item.color, color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="text-xl font-bold text-left" style={{ color: item.color }}>{item.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm mt-3 text-left">{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        
      </section>
    </div>
  );
}