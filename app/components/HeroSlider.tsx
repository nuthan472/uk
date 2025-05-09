"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sliderData = [
  {
    services: [
      { text: "Apply For Canada Permanent Residency", link: "/PR-visas/canadapr" },
      { text: "Apply For Canada Study Visa", link: "/migrate/canada/student-visa" },
    ],
    backgroundImage: "/canada.webp",
    title: "Canada",
    gradient: "bg-gradient-to-r from-red-300 to-white", // Canada color gradient
  },
  {
    services: [
      { text: "Apply For Australia Permanent Residency Visa", link: "/PR-visas/australiapr" },
      { text: "Apply For Australia Study Visa", link: "/migrate/australia/student-visa" },
    ],
    backgroundImage: "/australia.jpg",
    title: "Australia",
    gradient: "bg-gradient-to-r from-green-500 to-yellow-500", // Australia color gradient
  },
  {
    services: [
      {
        text: "Apply For Germany Opportunity Card Visa",
        link: "germany-opportunity-card",
      },
      {
        text: "Apply For Germany  Study Visa",
        link: "/migrate/germany/student-visa/",
      }
      
      
    ],
    backgroundImage: "/germany.jpg",
    title: "Germany",
    gradient: "bg-gradient-to-r from-white to-yellow-500", // Germany color gradient
  },
  {
    services: [
      { text: "Apply For UK Study Visa", 
      link: "/migrate/united-kingdom/student-visa"
     }
    ],
    backgroundImage: "/uk-flag.png",
    title: "United Kingdom",
    gradient: "bg-gradient-to-r from-blue-500 to-white", // UK color gradient
  },
  {
    services: [
      { text: "Apply For Malta Study Visa", 
        link: "/malta" }],
    backgroundImage: "/malta.png",
    title: "Malta",
    gradient: "bg-gradient-to-r from-red-700 to-white", // Malta color gradient
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Handle progress bar click to go to the specific slide
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div
      className="relative w-[22rem] lg:w-[28rem] h-[8rem] max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: "50%" }}  // Start from right
          animate={{ x: 0 }}       // Slide in
          exit={{ x: "-50%" }}    // Slide out to the left
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${sliderData[currentSlide].backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Content */}
      <div className="relative z-10 text-center px-4 py-0 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderData[currentSlide].title}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className={`text-xl lg:text-3xl font-extrabold uppercase text-transparent bg-clip-text ${sliderData[currentSlide].gradient}`}
            >
              {sliderData[currentSlide].title}
            </h2>
            <ul
  className={`space-y-2 ${
    currentSlide === 3 || currentSlide === 4 ? "mt-4" : "" // Add spacing only for 4th and 5th slides
  }`}
>
  {sliderData[currentSlide].services.map((service, index) => (
    <li key={index}>
      <Link
        href={service.link}
        className={`text-sm lg:text-base underline transition text-white`}
      >
        {service.text}
      </Link>
    </li>
  ))}
</ul>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator (Clickable to navigate between slides) */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {sliderData.map((_, index) => (
          <motion.span
            key={index}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              index === currentSlide ? "bg-orange-500 scale-110" : "bg-gray-400"
            }`}
            animate={{ scale: index === currentSlide ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => goToSlide(index)}  // Navigate to specific slide when clicked
          ></motion.span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
