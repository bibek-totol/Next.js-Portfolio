import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import im2 from './assets/Screenshot_4-Photoroom.webp';
import './App.css';
import BibekCV from './assets/FullStack Developer CV(Bibek).pdf';


export default function Banner1() {
  

  return (
    <div className="relative overflow-hidden">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 lg:px-20 lg:py-20 relative'>

        {/* Left Section */}
        <div
          className='z-20'
        >
          <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D7C4FC]'>Hi, I'm Bibek</p>
          <p className='text-3xl sm:text-4xl lg:text-6xl font-bold text-[#8953F7] mt-4'>
            Next Level <span className='text-[#D7C4FC]'>Web Developer</span>
          </p>
          <p className='text-base sm:text-lg lg:text-2xl text-[#D7C4FC] font-semibold mt-4'>
            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
          </p>

          <p className='text-cyan-400 mt-8 text-sm sm:text-base font-semibold'>Please Click on these buttons</p>

          <div className='flex flex-wrap gap-3 mt-4'>
            <button className="hover:scale-110 border-3 border-cyan-400 btn bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] hover:bg-[linear-gradient(-30deg,_rgba(30,5,36,1)_0%,_rgba(157,78,166,1)_51%,_rgba(105,40,204,1)_100%)] text-white font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out">
              <a href={BibekCV} download="Bibek CV(3.0).pdf" className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-white">
                <MdOutlineFileDownload className="text-xl" />
                Download CV
              </a>
            </button>

            <a href='https://www.linkedin.com/in/bibekbhowmick/' target="_blank" rel="noopener noreferrer">
              <button className='hover:scale-110 border-3 border-cyan-400 btn btn-outline text-[#8953F7] rounded-full p-3'>
                <FaLinkedinIn size={24} />
              </button>
            </a>
            <a href='https://github.com/bibek-totol' target="_blank" rel="noopener noreferrer">
              <button className='hover:scale-110 border-3 border-cyan-400 btn btn-outline text-[#8953F7] rounded-full p-3'>
                <FaGithub size={24} />
              </button>
            </a>
          </div>
        </div>

        

        {/* Right Section */}
        <div
          className='mx-auto mt-10 lg:mt-0 z-30'
        >
         
          <img   className="rounded-3xl border-4 border-cyan-400 max-h-[250px] max-w-[250px] md:max-h-[450px] md:max-w-[450px]  " src={im2} alt="Profile" />
            
        </div>
      </div>

      
      <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 lg:mt-0 text-center px-4 pb-10'>
        <div>
          <span className='text-[#D7C4FC] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>2+ </span>
          <p className='text-[#D7C4FC] text-lg sm:text-xl font-semibold'>Years of Experience</p>
        </div>

        <div>
          <span className='text-[#D7C4FC] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>20+ </span>
          <p className='text-[#D7C4FC] text-lg sm:text-xl font-semibold'>Projects Completed</p>
        </div>
      </div>
    </div>
  );
}
