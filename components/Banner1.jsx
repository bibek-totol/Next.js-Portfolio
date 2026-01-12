"use client";

import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function Banner1() {
    return (
        <article className="relative overflow-hidden" itemScope itemType="https://schema.org/Person">
            {/* Hidden SEO content for crawlers - visible to search engines */}
            <div className="sr-only">
                <h1>Bibek Bhowmick - Full Stack Web Developer Portfolio</h1>
                <p>Bibek Bhowmick is a professional Full Stack Web Developer from Bangladesh specializing in React, Next.js, Node.js, and modern web technologies. Hire Bibek Bhowmick for your next web development project.</p>
            </div>

            <header className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 lg:px-20 lg:py-20 relative'>

                {/* Left Section - Main Content */}
                <div className='z-20'>
                    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D7C4FC]'>
                        Hi, I'm <span itemProp="name">Bibek Bhowmick</span>
                    </p>
                    <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-[#8953F7] mt-4'>
                        <span itemProp="jobTitle">Full Stack</span> <span className='text-[#D7C4FC]'>Web Developer</span>
                    </h1>
                    <p className='text-base sm:text-lg lg:text-2xl text-[#D7C4FC] font-semibold mt-4' itemProp="description">
                        Professional website developer with 2+ years experience building React, Next.js, and Node.js applications. I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                    </p>

                    <p className='text-cyan-400 mt-8 text-sm sm:text-base font-semibold'>Connect with Bibek Bhowmick:</p>

                    <nav className='flex flex-wrap gap-3 mt-4' aria-label="Social links and resume download">
                        <button className="hover:scale-110 border-3 border-cyan-400 btn bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] hover:bg-[linear-gradient(-30deg,_rgba(30,5,36,1)_0%,_rgba(157,78,166,1)_51%,_rgba(105,40,204,1)_100%)] text-white font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                            <a href="/assets/FullStack Developer CV(Bibek).pdf" download="Bibek_Bhowmick_Full_Stack_Developer_CV.pdf" className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-white" title="Download Bibek Bhowmick Full Stack Developer Resume">
                                <MdOutlineFileDownload className="text-xl" aria-hidden="true" />
                                Download CV
                            </a>
                        </button>

                        {/* Backlink to LinkedIn - Authoritative External Link */}
                        <a
                            href='https://www.linkedin.com/in/bibekbhowmick/'
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick LinkedIn Profile - Full Stack Developer"
                            itemProp="sameAs"
                        >
                            <button className='hover:scale-110 border-3 border-cyan-400 btn btn-outline text-[#8953F7] rounded-full p-3' aria-label="Visit Bibek Bhowmick on LinkedIn">
                                <FaLinkedinIn size={24} aria-hidden="true" />
                            </button>
                        </a>

                        {/* Backlink to GitHub - Authoritative External Link */}
                        <a
                            href='https://github.com/bibek-totol'
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Bibek Bhowmick GitHub Profile - Web Developer Portfolio"
                            itemProp="sameAs"
                        >
                            <button className='hover:scale-110 border-3 border-cyan-400 btn btn-outline text-[#8953F7] rounded-full p-3' aria-label="Visit Bibek Bhowmick on GitHub">
                                <FaGithub size={24} aria-hidden="true" />
                            </button>
                        </a>
                    </nav>
                </div>



                {/* Right Section - Profile Image with SEO Alt Text */}
                <figure className='mx-auto mt-10 lg:mt-0 z-30'>
                    <Image
                        className="rounded-3xl border-4 border-cyan-400"
                        src="/assets/Screenshot_4-Photoroom.webp"
                        alt="Bibek Bhowmick - Professional Full Stack Web Developer and React Expert from Bangladesh"
                        width={450}
                        height={450}
                        style={{ maxHeight: '450px', maxWidth: '450px' }}
                        priority
                        itemProp="image"
                    />
                    <figcaption className="sr-only">Bibek Bhowmick - Full Stack Developer Portfolio Photo</figcaption>
                </figure>
            </header>


            {/* Statistics Section with Semantic Markup */}
            <section className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 lg:mt-0 text-center px-4 pb-10' aria-label="Professional Experience Statistics">
                <div>
                    <span className='text-[#D7C4FC] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>2+ </span>
                    <p className='text-[#D7C4FC] text-lg sm:text-xl font-semibold'>Years of Web Development Experience</p>
                </div>

                <div>
                    <span className='text-[#D7C4FC] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>20+ </span>
                    <p className='text-[#D7C4FC] text-lg sm:text-xl font-semibold'>Full Stack Projects Completed</p>
                </div>
            </section>
        </article>
    );
}
