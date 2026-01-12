import React from 'react';

export default function QualityServices() {
  return (
    <div className='h-full p-4 mt-14 '>

   

      <div className='text-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          My Quality <span className='text-[#B694FA]'>Services</span>
        </p>
        <p className='text-[#B694FA] text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto font-semibold mt-5'>
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>

        <div className="collapse collapse-plus border border-base-300 text-blue-400 w-full sm:w-5/6 md:w-2/3 mx-auto mt-14">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Front End Development
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-base font-medium">
            Designs and builds the visual and interactive aspects of websites and web applications using HTML, CSS, JavaScript, React, Next.js
          </div>
        </div>

        <div className="collapse collapse-plus border border-base-300 text-blue-400 w-full sm:w-5/6 md:w-2/3 mx-auto mt-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Back End Development
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-base font-medium">
            Focuses on building and managing the server, database, and application logic to ensure seamless functionality and data processing
          </div>
        </div>

        <div className="collapse collapse-plus border border-base-300 text-blue-400 w-full sm:w-5/6 md:w-2/3 mx-auto mt-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Full Stack Development
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-base font-medium">
            Involves working on both the front-end and back-end of a web application, handling everything from user interfaces to server-side logic and databases.
          </div>
        </div>
      </div>
    </div>
  );
}
