import React, { Suspense } from "react";
import im1 from './assets/Screenshot_2.webp'
import './App.css'
import AnimatedBackground from './AnimatedBackground';
import { Link } from "react-router";

import im2 from './assets/Screenshot_95.jpg'
import im3 from './assets/Screenshot_96.jpg'
import im4 from './assets/Screenshot_97.jpg'
import im5 from './assets/Screenshot_98.jpg'
import im6 from './assets/Screenshot_99.jpg'
import im7 from './assets/Screenshot_100.jpg'
import im8 from './assets/Screenshot_101.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Lock, Bot, Bell, Calendar, ShieldCheck, Users } from "lucide-react";

const ProfileDetails4 = () => {
  return (
    <div className="relative font-extrabold   text-white min-h-screen p-6">
      <AnimatedBackground />
      <div className="absolute w-full min-h-full overflow-y-auto   z-1 top-0 left-0 ">





        <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4    gap-4">
          <div>
            {/* Header */}
            <div className="flex items-center space-x-4">
              <Link to="/"><button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
              <span className="text-gray-400">Projects &gt; Schedule Pro: A Schedule Management Application </span>
            </div>

            {/* Hero Section */}
            <div className="mt-8">
              <h1 className="text-4xl font-bold text-white">
                Schedule Pro: <span className="text-purple-400">A Schedule Management Application </span>
              </h1>

            </div>

            {/* Stats Section */}
            <div className="flex space-x-4 mt-6">
              <div className="pookie3 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">9</p>
                <p className="text-gray-400">Total Technologies</p>
              </div>
              <div className="pookie3 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">5</p>
                <p className="text-gray-400">Features Included</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
              <a href="https://schedule-processing-next-js.vercel.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
              <a href="https://github.com/bibek-totol/Schedule-Processing-Next-js-" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub</a>
            </div>

            {/* Technologies Used */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Axios", "JWT", "React-Query", "React-SweetAlert"].map((tech) => (
                  <span key={tech} className="pookie3 px-3 py-1 rounded-lg">{tech}</span>
                ))}
              </div>
            </div>

          </div>




          <div>

            {/* Key Features */}
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
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="rounded-lg"
                >
                  {[im1, im2, im3, im4, im5, im6, im7, im8].map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Project Screenshot ${index + 1}`}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Suspense>
              <h3 className="text-lg mt-2">Key Features</h3>
              <ul className="mt-2 space-y-2.5">
                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300 mt-0.5 shadow-sm shadow-cyan-500/20">
                    <Lock className="w-4 h-4" />
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <strong className="text-white font-bold mr-1">User Authentication & Security:</strong>
                    Google Sign-In, Password Reset, Account Lockout on multiple attempts, and JWT token based authentication.
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-300 mt-0.5 shadow-sm shadow-purple-500/20">
                    <Bot className="w-4 h-4" />
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <strong className="text-white font-bold mr-1">AI Integration:</strong>
                    An AI Assistant is integrated to support employees by answering frequently asked questions and guiding them through application functionalities to improve engagement and efficiency.
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 mt-0.5 shadow-sm shadow-emerald-500/20">
                    <Bell className="w-4 h-4" />
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <strong className="text-white font-bold mr-1">Notifications System:</strong>
                    Real-time updates sent from the admin panel to employees regarding new tasks, upcoming events, and any changes to assignments.
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0 text-pink-300 mt-0.5 shadow-sm shadow-pink-500/20">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <strong className="text-white font-bold mr-1">Calendar and Scheduling System:</strong>
                    Google Calendar-style Event System built with FullCalendar, allowing admins to create, update, and delete events, assign tasks based on scheduled events, and track employee progress.
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-300 mt-0.5 shadow-sm shadow-blue-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <strong className="text-white font-bold mr-1">Role-Based Access (Admin Panel):</strong>
                    Task creation, editing, and deletion functionalities, full employee data management, event scheduling, notification broadcasts, and visual analytics using charts.
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-start gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300 mt-0.5 shadow-sm shadow-amber-500/20">
                    <Users className="w-4 h-4" />
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <strong className="text-white font-bold mr-1">Role-Based Access (Employee Panel):</strong>
                    View assigned tasks and deadlines, receive real-time notifications from admin, access a personalized schedule and event calendar, and communicate through integrated features.
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

export default ProfileDetails4;
