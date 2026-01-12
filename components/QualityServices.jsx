"use client";

import React from 'react';

export default function QualityServices() {
    return (
        <section className='h-full p-4 mt-14' aria-label="Web Development Services by Bibek Bhowmick" id="services-section">

            <div className='text-center'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
                    My Quality <span className='text-[#B694FA]'>Web Development Services</span>
                </h2>
                <p className='text-[#B694FA] text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto font-semibold mt-5'>
                    Bibek Bhowmick offers professional web development services. We put your ideas and wishes in the form of a unique web project that inspires you and your customers.
                </p>

                {/* Front End Development Service */}
                <article className="collapse collapse-plus border border-base-300 text-blue-400 w-full sm:w-5/6 md:w-2/3 mx-auto mt-14">
                    <input type="radio" name="my-accordion-3" defaultChecked aria-label="Learn about Front End Development services" />
                    <h3 className="collapse-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Front End Development
                    </h3>
                    <div className="collapse-content text-xs sm:text-sm md:text-base font-medium">
                        <p>
                            Bibek Bhowmick specializes in designing and building the visual and interactive aspects of websites and web applications.
                            Expert in HTML, CSS, JavaScript, React.js, and Next.js for creating responsive, user-friendly interfaces.
                        </p>
                    </div>
                </article>

                {/* Back End Development Service */}
                <article className="collapse collapse-plus border border-base-300 text-blue-400 w-full sm:w-5/6 md:w-2/3 mx-auto mt-8">
                    <input type="radio" name="my-accordion-3" aria-label="Learn about Back End Development services" />
                    <h3 className="collapse-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Back End Development
                    </h3>
                    <div className="collapse-content text-xs sm:text-sm md:text-base font-medium">
                        <p>
                            Professional backend development services by Bibek Bhowmick. Focuses on building and managing servers, databases, and application logic
                            using Node.js, Express.js, MongoDB, and PostgreSQL to ensure seamless functionality and data processing.
                        </p>
                    </div>
                </article>

                {/* Full Stack Development Service */}
                <article className="collapse collapse-plus border border-base-300 text-blue-400 w-full sm:w-5/6 md:w-2/3 mx-auto mt-8">
                    <input type="radio" name="my-accordion-3" aria-label="Learn about Full Stack Development services" />
                    <h3 className="collapse-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Full Stack Development
                    </h3>
                    <div className="collapse-content text-xs sm:text-sm md:text-base font-medium">
                        <p>
                            Hire Bibek Bhowmick for complete Full Stack Development. Involves working on both the front-end and back-end of web applications,
                            handling everything from user interfaces to server-side logic and databases using the MERN stack (MongoDB, Express, React, Node.js).
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}
