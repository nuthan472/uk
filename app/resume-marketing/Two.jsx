"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Form from "./Form";

const countries = [
  { title: "Canada Resume Marketing", image: "/canadaresume1.webp", path: "/resume-marketing/canada-resume-marketing" },
  { title: "Germany Resume Marketing", image: "/germanyresume.jpeg", path: "/resume-marketing/germany-resume-marketing" },
  { title: "USA Resume Marketing", image: "/usaresume.jpg", path: "/resume-marketing/usa-resume-marketing" },
  { title: "Australia Resume Marketing", image: "/australiaresume.jpg", path: "/resume-marketing/australia-resume-marketing" },
  { title: "UK Resume Marketing", image: "/ukresume.jpg", path: "/resume-marketing/uk-resume-marketing" },
  { title: "Denmark Resume Marketing", image: "/denmarkresume.jpg", path: "/resume-marketing/denmark-resume-marketing" },
  { title: "Ireland Resume Marketing", image: "/irelandresume.jpg", path: "/resume-marketing/ireland-resume-marketing" },
  { title: "Dubai Resume Marketing", image: "/uaeresume.jpg", path: "/resume-marketing/dubai-resume-marketing" },
  { title: "Austria Resume Marketing", image: "/austriaresume.jpg", path: "/resume-marketing/austria-resume-marketing" },
  { title: "Singapore Resume Marketing", image: "/singaporeresume.jpg", path: "/resume-marketing/singapore-resume-marketing" },
  { title: "New Zealand Resume Marketing", image: "/nzresume.jpg", path: "/resume-marketing/new-zealand-resume-marketing" },
  { title: "Malaysia Resume Marketing", image: "/malaysiaresume.jpg", path: "/resume-marketing/malaysia-resume-marketing" },
  { title: "Poland Resume Marketing", image: "/polandresume.jpg", path: "/resume-marketing/poland-resume-marketing" },
  { title: "Malta Resume Marketing", image: "/maltaresume.jpg", path: "/resume-marketing/malta-resume-marketing" },
];

const ResumeMarketingBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flipSoundRef = useRef(null);
  const intervalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => {
        if (prev < countries.length - 1) {
          playSound();
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          return prev;
        }
      });
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
    if (currentPage < countries.length - 1) {
      setCurrentPage((prev) => prev + 1);
      playSound();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      playSound();
    }
  };

  const handlePageClick = () => {
    const selected = countries[currentPage];
    router.push(selected.path);
  };

  const playSound = () => {
    if (flipSoundRef.current) {
      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.play();
    }
  };

  return (
  
<div className="relative w-full min-h-screen bg-cover bg-center px-4 sm:px-6 py-8 sm:py-12 bg-black bg-opacity-50"
     style={{ backgroundImage: "url('/Return-to-office.webp')" }}>
      <audio ref={flipSoundRef} src="/flip.mp3" preload="auto" />
    
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-end items-start gap-10 mt-8">
        {/* Left Content */}
         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 px-4 sm:px-6 mt-12 sm:mt-20 lg:mt-36">
           <motion.h1
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl font-bold text-black drop-shadow-xl leading-tight"
            >
             Explore Global Resume Marketing
            </motion.h1>
  
           <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg text-black drop-shadow"
           >
             Promote your resume in top international job markets with our expert support.
           </motion.p>
  
           <motion.button
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           onClick={() => router.push("/resume-marketing/canada-resume-marketing")}
           className="bg-orange-600 hover:bg-orange-700 text-black px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
           >
            Know More
         </motion.button>
          </div>
        {/* Flip Book */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-2 sm:px-4 mt-8 lg:mt-0">
          <div className="relative w-[280px] sm:w-[320px] md:w-[450px] h-[420px] sm:h-[460px] md:h-[500px] perspective-[1200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={handlePageClick}
                className="absolute inset-0 w-full h-full bg-cover bg-center  cursor-pointer overflow-hidden flex flex-col justify-center items-center text-center text-white"
                style={{
                  backgroundImage: `url(${countries[currentPage].image})`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="bg-black bg-opacity-30 w-full h-full flex flex-col justify-center items-center p-4 sm:p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg"
                  >
                    {countries[currentPage].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base text-white drop-shadow text-center"
                  >
                    Explore our premium resume marketing services in <strong>{countries[currentPage].title.split(" ")[0]}</strong> to get noticed by global employers.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs text-gray-300 mt-2 sm:mt-3"
                  >
                    (Click anywhere to open details)
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-3 sm:px-4 z-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-30"
              >
                <ChevronLeft />
              </button>
              <div className="text-sm font-semibold text-orange-700 bg-white px-3 py-1 rounded-full shadow">
                Page {currentPage + 1} / {countries.length}
              </div>
              <button
                onClick={handleNext}
                disabled={currentPage === countries.length - 1}
                className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-30"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
{/* Bottom Section */}

<div className="mt-20 sm:mt-28 lg:mt-36 px-2 sm:px-4 flex flex-col lg:flex-row justify-center lg:justify-end gap-10">
  <div className="w-full lg:w-1/2 space-y-6 px-2  bg-black bg-opacity-50 sm:px-6 lg:pr-16">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl font-bold text-white"
    >
      Boost Your International Presence
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-sm sm:text-base text-white"
    >
      Our Resume Marketing services are designed to connect you with top employers globally by increasing your visibility and enhancing your professional profile.
    </motion.p>

    {/* Scrollable Content Box Starts Here */}
    <div className="max-h-[400px] sm:max-h-[500px] overflow-y-auto w-full sm:w-[560px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 space-y-4 text-sm sm:text-base text-black bg-white p-4 border border-gray-500 backdrop-blur-md font-[Times_New_Roman]">
      <p className="font-bold text-lg text-black">
        Resume Marketing Services at <span className="text-orange-600">VJC Overseas</span>
      </p>
      <p>
        At <span className="text-orange-600">VJC Overseas</span>, we understand that a well-crafted resume is more than just a document—it's your personal marketing tool. Whether you’re applying for your first job abroad or seeking to elevate your career to new heights, your resume must stand out in a competitive job market. Our Resume Marketing Services are designed to help you do just that.
      </p>
      <p>
        Our team of expert writers, recruiters, and career consultants work together to deliver a resume that effectively communicates your unique strengths, skills, and experiences. We don’t just focus on the basics; we tailor each resume to reflect the specific requirements of your industry, the roles you're targeting, and the expectations of international employers.
      </p>
      <p className="font-semibold text-black">What We Offer:</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          <span className="font-semibold text-black">Professional Resume Writing:</span> Our experienced writers will craft a resume that highlights your accomplishments, skills, and qualifications in the most compelling way.
        </li>
        <li>
          <span className="font-semibold text-black">Keyword Optimization:</span> In today’s digital job market, many employers use Applicant Tracking Systems (ATS). We ensure your resume is ATS-friendly by integrating industry-specific keywords, ensuring it gets noticed.
        </li>
        <li>
          <span className="font-semibold text-black">Custom Cover Letters:</span> Alongside your resume, we provide personalized cover letters that showcase your motivation and fit for the job, giving you an edge in your job search.
        </li>
        <li>
          <span className="font-semibold text-black">LinkedIn Profile Optimization:</span> We enhance your LinkedIn profile to align with your resume, ensuring consistency and visibility across platforms.
        </li>
        <li>
          <span className="font-semibold text-black">Job Search Strategy & Consultation:</span> We don’t just stop at your resume—we offer strategic advice to maximize your job search, helping you target the right opportunities and improve your chances of landing your dream job.
        </li>
      </ul>
      <p>
        At <span className="text-orange-600">VJC Overseas</span>, we take pride in empowering our clients to achieve their career goals. Our resume marketing services are your first step toward success in the global job market.
      </p>
      <p className="font-semibold text-black">
        Contact us today and let’s take your career to the next level!
      </p>
    </div>
    {/* Scrollable Content Box Ends Here */}
  </div>





        <div className="realtive w-full lg:w-1/2">
          <Form />
        </div>
      </div>
      
    </div>
     
  );
};

export default ResumeMarketingBook;
