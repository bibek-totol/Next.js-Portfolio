import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import QualityServices from "./QualityServices";
import RecentWorks from "./RecentWorks";
import Experience from "./Experience";
import SKills from "./SKills";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Initialoader from "./Initialoader";
import { GoogleGeminiEffect } from "./components/ui/google-gemini-effect";
import AnimatedBackground from "./AnimatedBackground";

let hasLoaded = false;

function First() {
  const [loading, setLoading] = useState(!hasLoaded);

  useEffect(() => {
    if (!hasLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
        hasLoaded = true;
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div key="loader">
            <Initialoader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && <MainContent />}
    </>
  );
}

function MainContent() {
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const geminiRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: geminiRef,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="relative max-w-[1440px] mx-auto overflow-x-hidden overflow-y-auto min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Banner1 />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInFromRight}
          id="services"
        >
          <QualityServices />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInFromRight}
          id="works"
        >
          <RecentWorks />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInFromRight}
          id="education"
        >
          <Experience />
        </motion.div>

        <div
          ref={geminiRef}
          className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-clip"
        >
          <div className="sticky top-0">
            <GoogleGeminiEffect
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
            />
          </div>
        </div>

        <div id="skills">
          <SKills />
        </div>
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInFromRight}
        >
          <ContactUs />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}

export default First;
