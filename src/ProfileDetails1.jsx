
import React, { Suspense } from "react";
import im1 from './assets/Screenshot_58.webp'
import im2 from './assets/Screenshot_59.jpg'
import im3 from './assets/Screenshot_60.jpg'
import im4 from './assets/Screenshot_61.jpg'
import im5 from './assets/Screenshot_62.jpg'
import './App.css'
import AnimatedBackground from './AnimatedBackground';
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ShieldCheck, Lock, GraduationCap, BookOpen, LayoutDashboard, Star, Bell, Search } from "lucide-react";


const ProfileDetails1 = () => {
  return (
    <div className="relative font-extrabold  text-white min-h-screen p-6">
      <AnimatedBackground />
      <div className="absolute w-full min-h-full overflow-y-auto   z-1 top-0 left-0 ">





        <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4 gap-4">

          <div>
            {/* Header */}
            <div className="flex items-center space-x-4">
              <Link to="/"><button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
              <span className="text-gray-400">Projects &gt; IEMS: Collaborative Study Platform</span>
            </div>

            {/* Hero Section */}
            <div className="mt-8">
              <h1 className="text-4xl font-bold text-white">
                IEMS: Collaborative <span className="text-purple-400">Study Platform </span>
              </h1>

            </div>

            {/* Stats Section */}
            <div className="flex space-x-4 mt-6">
              <div className="pookie3 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">8</p>
                <p className="text-gray-400">Total Technologies</p>
              </div>
              <div className="pookie3 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">10</p>
                <p className="text-gray-400">Features Included</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
              <a href="https://bibek-iems-portal.netlify.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
              <a href="https://github.com/bibek-totol/IEMS-Client" className="bg-purple-600 px-6 py-2 rounded-lg ">GitHub(Client)</a>
              <a href="https://github.com/bibek-totol/IEMS-Server" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Server)</a>
            </div>

            {/* Technologies Used */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Axios"].map((tech) => (
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
                  scrollbar={{ draggable: true }}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="rounded-lg"
                >
                  {[im1, im2, im3, im4, im5].map((img, index) => (
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

              <h3 className="text-lg mt-4">Key Features</h3>
              <ul className="mt-2 space-y-2.5">
                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 text-cyan-300 shadow-sm shadow-cyan-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    User Authentication & Social Login
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-300 shadow-sm shadow-purple-500/20">
                    <Lock className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Role-Based Access Control (RBAC)
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300 shadow-sm shadow-emerald-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Student Dashboard
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0 text-pink-300 shadow-sm shadow-pink-500/20">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Tutor Dashboard
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-300 shadow-sm shadow-blue-500/20">
                    <LayoutDashboard className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Admin Dashboard
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300 shadow-sm shadow-amber-500/20">
                    <Star className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Review and Rating System
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0 text-teal-300 shadow-sm shadow-teal-500/20">
                    <Bell className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Announcements Feature
                  </span>
                </li>

                <li className="pookie3 p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm font-normal">
                  <span className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center flex-shrink-0 text-indigo-300 shadow-sm shadow-indigo-500/20">
                    <Search className="w-4 h-4" />
                  </span>
                  <span className="flex-1 font-semibold text-gray-100">
                    Pagination and Search
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

export default ProfileDetails1;

