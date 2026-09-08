"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const renderFormattedText = (text) => {
    if (!text || typeof text !== "string") return text;
    if (!text.includes("**")) return text;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={index} className="text-white font-semibold">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
};

const Card = ({ year, title, company, badge, points = [], tags = [], link, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative rounded-2xl bg-[#141935]/85 hover:bg-[#181F42]/95 border border-white/10 hover:border-[#9463F8]/50 p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(148,99,248,0.25)] flex flex-col justify-between gap-4"
        >
            {/* Header: Year & Badge */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
                {year && (
                    <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        {year}
                    </span>
                )}
                {badge && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                        {badge}
                    </span>
                )}
            </div>

            {/* Title & Organization */}
            <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {title}
                </h3>
                {company && (
                    <p className="text-xs sm:text-sm font-medium text-[#C5B4E3] mt-0.5">
                        {company}
                    </p>
                )}
            </div>

            {/* Fallback description or Bullet points */}
            {desc && (
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {renderFormattedText(desc)}
                </p>
            )}

            {points && points.length > 0 && (
                <ul className="space-y-2 mt-1">
                    {points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                            <span className="text-cyan-400 mt-1 flex-shrink-0 font-bold">•</span>
                            <span>{renderFormattedText(pt)}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Tech Tags */}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 text-purple-200 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Link if provided */}
            {link && (
                <div className="pt-2 border-t border-white/10 mt-1">
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 hover:underline transition-colors"
                    >
                        <span>{link.text}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
            )}
        </motion.div>
    );
};

export default Card;
