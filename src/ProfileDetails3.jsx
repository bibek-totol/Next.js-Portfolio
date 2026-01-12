import React, { Suspense } from "react";
import im1 from './assets/Screenshot_75.webp'
import './App.css'
import AnimatedBackground from './AnimatedBackground';
import { Link } from "react-router";
import im2 from './assets/Screenshot_76.jpg'
import im3 from './assets/Screenshot_77.jpg'
import im4 from './assets/Screenshot_78.jpg'
import im5 from './assets/Screenshot_79.jpg'
import im6 from './assets/Screenshot_80.jpg'
import im7 from './assets/Screenshot_81.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProfileDetails3 = () => {
  return (
    <div className="relative font-extrabold  text-white min-h-screen p-6 ">
      <AnimatedBackground />
      <div className="absolute w-full min-h-full overflow-y-auto   z-1 top-0 left-0 ">





        <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2 p-4   gap-4">
          <div>

            <div className="flex items-center space-x-4">
              <Link to="/"><button className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
              <span className="text-gray-400">Projects &gt;  Tech-Tales: A Blog Application </span>
            </div>


            <div className="mt-8">
              <h1 className="text-4xl font-bold text-white">
                Tech-Tales: <span className="text-purple-400">A Blog Application </span>
              </h1>

            </div>


            <div className="flex space-x-4 mt-6">
              <div className="pookie3 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">7</p>
                <p className="text-gray-400">Total Technologies</p>
              </div>
              <div className="pookie3 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">5</p>
                <p className="text-gray-400">Features Included</p>
              </div>
            </div>


            <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
              <a href="https://tech-tales2025.netlify.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
              <a href="https://github.com/bibek-totol/More-Beautiful-Client-Tech-Tales" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Client)</a>
              <a href="https://github.com/bibek-totol/Server-Tech-Tales-" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Server)</a>
            </div>


            <div className="mt-8">
              <h3 className="text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "Axios"].map((tech) => (
                  <span key={tech} className="pookie3 px-3 py-1 rounded-lg">{tech}</span>
                ))}
              </div>
            </div>

          </div>




          <div>


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
                  {[im1, im2, im3, im4, im5, im6, im7].map((img, index) => (
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
              <ul className="mt-2 space-y-2 ">




                <li className="pookie3 p-3 rounded-lg">🔹 Blog Management: Users can add, view, and manage blogs through dedicated sections such as 'All Blogs' and 'Add Blogs'. This makes it easy for users to navigate through the content and contribute their own posts. </li>
                <li className="pookie3 p-3 rounded-lg">🔹 Engagement through Comments: The website includes a comment system that allows readers to leave feedback on posts. This feature can enhance user engagement and foster discussions around the blog content.</li>
                <li className="pookie3 p-3 rounded-lg">🔹 Calendar Feature: The 'Calendar section allows users to keep track of events, blog posts, or deadlines, improving the organization of content and ensuring users don't miss important dates related to the blogging experience.</li>
                <li className="pookie3 p-3 rounded-lg">🔹 Wishlist Functionality: Users can save blogs or articles to a 'WishList' for easy access later. This feature allows readers to curate their personal list of interesting content they wish to explore further.</li>
                <li className="pookie3 p-3 rounded-lg">🔹 These features collectively create a comprehensive and user-friendly blogging platform for both content creators and readers.</li>

              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
};

export default ProfileDetails3;
