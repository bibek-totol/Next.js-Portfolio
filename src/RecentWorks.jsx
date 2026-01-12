import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import im1 from "./assets/Screenshot_58.webp";
import im2 from "./assets/Screenshot_14.webp";
import im3 from "./assets/Screenshot_75.webp";
import im4 from "./assets/Screenshot_2.webp";
import im5 from "./assets/Screenshot_2.jpg";
import im6 from "./assets/Screenshot_4.jpg"
import { motion } from "framer-motion";
import { Link } from "react-router";
import { PinContainer } from "./components/ui/3d-pin";

const ProjectCard = ({ img, link, desc, to }) => (
  <PinContainer
    title={link}
    href={link}


  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="w-[270px] md:w-[500px] lg:w-[500px] h-full flex flex-col bg-[#141935] 
                 border-[#002851] shadow-xl hover:shadow-purple-500/40 
                 transition-all duration-300 rounded-2xl overflow-hidden p-5"
    >
      <img
        src={img}
        alt="Project Preview"
        className="w-full h-60 object-cover rounded-xl"
      />

      <div className="mt-4 space-y-3 flex flex-col justify-between flex-1">
        <a
          className="text-cyan-300 font-bold underline text-sm sm:text-base"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>
        <p className="text-white/80 text-sm sm:text-base flex-grow">{desc}</p>

        <div className="flex justify-end">
          <Link to={to}>
            <button
              className="cursor-pointer px-4 border border-cyan-400 py-2 rounded-xl 
                               bg-gradient-to-r from-[#9463F8] to-[#7d4edc] 
                               hover:scale-110 text-black font-extrabold text-sm sm:text-base 
                               hover:brightness-110 transition"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  </PinContainer>
);



export default function RecentWorks() {
  const mernProjects = [
    {
      id: 1,
      img: im1,
      link: "https://bibek-iems-portal.netlify.app/",
      desc: "IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline scheduling, resource sharing, and management.",
      to: "/details1",
    },

    {
      id: 2,
      img: im6,
      link: "#",
      desc: "Ride Booking Nexus is a full-stack application that allows users to book rides and manage their bookings(Rider, Driver and Admin) Roles",
      to: "/details6",
    },

    {
      id: 3,
      img: im3,
      link: "https://tech-tales2025.netlify.app/",
      desc: "Tech-Tales is a feature-rich blogging app with comments, calendar, and wishlist integration to enhance writing experiences.",
      to: "/details3",
    },
    // {
    //   id: 4,
    //   img: im3,
    //   link: "https://unruly-destruction.surge.sh/",
    //   desc: "GameCritics-Hub2 is a game review platform with user ratings, recommendations, and real-time news & updates for gamers.",
    //   to: "/details2",
    // }

  ];

  const nextProjects = [

    {
      id: 1,
      img: im5,
      link: "https://ai-job-assistant-five.vercel.app/",
      desc: "AI Job Assistant is a smart career platform offering AI resume checking, job matching, interview scheduling, and more.",
      to: "/details5",
    },
    {
      id: 2,
      img: im4,
      link: "https://schedule-processing-next-js.vercel.app/",
      desc: "Schedule Processing is a web application used for managing and scheduling events and tasks with secure role-based access and notifications.",
      to: "/details4",
    },

  ];

  return (
    <section className="mt-16 rounded-4xl py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#B694FA]">
          My Recent <span className="text-[#9463F8]">Works</span>
        </h2>
        <p className="text-[#B694FA] font-medium max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      <Tabs selectedTabClassName="bg-[#9463F8]/10 !text-white/50 shadow-lg shadow-[#9463F8]/50">
        <TabList className="flex flex-wrap justify-center gap-4 text-sm sm:text-base lg:text-lg mt-12 mb-6 bg-black/30 rounded-full p-3 font-semibold text-white">
          <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
            MERN Stack Projects
          </Tab>
          <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
            Next.js Projects
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mt-24  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 space-y-56">
            {mernProjects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
            {nextProjects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
}
