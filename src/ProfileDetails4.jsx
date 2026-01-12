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
              <h3 className="text-lg  mt-2">Key Features</h3>
              <ul className="mt-2 space-y-2">





                <li className="pookie3 p-3 rounded-lg">🔹  User Authentication & Security: Google Sign-In, Password Reset, Account Lockout on multiple attempts and JWT token basd authentication </li>
                <li className="pookie3 p-3 rounded-lg">🔹 AI Integration: An AI Assistant is integrated to support employees by answering frequently asked questions and
                  guiding them through the application functionalities. This improves user engagement and reduces
                  dependency on support staff.</li>
                <li className="pookie3 p-3 rounded-lg">🔹 Notifications System: Real-time updates are sent from the admin panel to employees regarding new tasks,
                  upcoming events, and any changes to assignments.</li>
                <li className="pookie3 p-3 rounded-lg">🔹 Calendar and Scheduling System: Google Calendar-style Event System  Built with FullCalendar, this allows admins to: <br /> <br />
                  o Create, update, and delete events.  <br />
                  o Assign tasks based on scheduled events.  <br />
                  o Track employee participation and progress.</li>
                <li className="pookie3 p-3 rounded-lg">🔹 Role-Based Access(Admin Panel): <br /> <br />
                  o Task creation, editing, and deletion functionalities. <br />
                  o View and manage all employee data.<br />
                  o Event scheduling and task assignment via FullCalendar. <br />
                  o Notification system to inform employees of updates. <br />
                  o Visual analytics using charts for better decision-making.<br />
                </li>



                <li className="pookie3 p-3 rounded-lg">🔹 Role-Based Access(Employee Panel): <br /> <br />
                  o View assigned tasks and deadlines. <br />
                  o Receive real-time notifications from admin.<br />
                  o Access a personalized schedule and event calendar. <br />
                  o Communicate through integrated features. <br />
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
