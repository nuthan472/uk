"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { X } from "lucide-react";
import Form from "./Form"; // Adjust path if needed

const countriesData = [
  {
    name: "Germany Work Permit",
    path: "/workabroad/germany-work-permit",
    image: "/germany.jpg",
  },
  {
    name: "Canada Work Permit",
    path: "/workabroad/canada-work-permit",
    image: "/canada.webp",
  },
  {
    name: "USA H1b Visa",
    path: "/workabroad/usa-h1b-visa",
    image: "/usa1.jpg",
  },
  {
    name: "Australia Work Permit",
    path: "/workabroad/australia-work-permit",
    image: "/australia.jpg",
  },
  {
    name: "UK Work Permit",
    path: "/workabroad/united-kingdom-work-permit",
    image: "/uk1.webp",
  },
  {
    name: "Denmark Work Permit",
    path: "/workabroad/denmark-work-permit",
    image: "/de.jpg",
  },
  {
    name: "Dubai Work Permit",
    path: "/workabroad/dubai-work-permit",
    image: "/du.webp",
  },
];

const Migrate = () => {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);
  const [showFormPopup, setShowFormPopup] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     {showFormPopup && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
    <div className="relative bg-gradient-to-br from-black/50 to-gray/50 -mt-24 md:-mt-24  shadow-2xl p-6 sm:p-6 max-w-md w-full max-h-[80vh] animate-fadeIn">
      <button
        onClick={() => setShowFormPopup(false)}
        className="absolute top-3 right-3 text-gray-200 font-fold hover:text-red-600 transition"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="">
      <Form />
      </div>
    </div>
  </div>
)}

      <main className="w-full bg-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[90vh] sm:min-h-[90vh] bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: "url('/harsh.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-6">
        
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-lg lg:text-xl font-medium"
            >
              {/* Optional Subtitle */}
            </motion.p>
          </div>
{/* Floating Info Box - Responsive & Scrollable */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1 }}
  className="absolute z-20 w-[92%] max-w-[700px] bg-gray-800 text-white p-5 lg:p-8 overflow-y-auto
  max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[60vh] xl:max-h-[65vh]
  left-4 sm:left-4 md:left-1/2 md:transform md:-translate-x-1/2 lg:left-[47%] lg:-translate-x-[52%]
  bottom-[-25%] sm:bottom-[-20%] md:bottom-[-12%] lg:bottom-[-14%] xl:bottom-[-12%]"


style={{ fontFamily: 'Times New Roman, serif' }}
>
  <h3 className="text-2xl lg:text-3xl font-bold mb-3">
    Work Abroad with <span className="text-orange-500">VJC Overseas</span>: Unlock Global Career Opportunities
  </h3>
  <p className="text-sm lg:text-base leading-relaxed overflow-y-auto">
    At <span className="text-orange-500">VJC Overseas</span>, we believe that the world is full of exciting career opportunities waiting for talented individuals like you.
    Whether you're looking to advance your career, experience new cultures, or seek better work-life balance, we specialize in connecting skilled professionals with top-tier employers worldwide.
    <br /><br />
    <strong>Why Choose <span className="text-orange-500">VJC Overseas</span>?</strong><br />
    <strong>1. Tailored Career Pathways</strong><br />
    We understand that each individual’s career journey is unique. Our expert consultants work closely with you to understand your skills, experience, and aspirations, helping you find the perfect job abroad that matches your goals.
    Whether you're a healthcare professional, engineer, IT specialist, or tradesperson, we have the right opportunities waiting for you.
    <br /><br />
    <strong>2. Global Network of Employers</strong><br />
    Our extensive network of trusted international employers spans across various industries and countries.
    From Canada and the Middle East to Australia and Europe, we collaborate with leading companies looking to hire qualified professionals from diverse fields.
    With <span className="text-orange-500">VJC Overseas</span>, you’ll have access to some of the best job offers available worldwide.
    <br /><br />
    <strong>3. Hassle-Free Immigration and Relocation Support</strong><br />
    We know that moving abroad can be overwhelming, which is why we provide end-to-end support, from visa and work permit assistance to relocation advice.
    Our dedicated team ensures you navigate the entire process smoothly, so you can focus on what truly matters – your career growth and new experiences.
    <br /><br />
    <strong>4. Long-Term Success</strong><br />
    Our commitment to your success doesn't end with securing a job. We are here for the long haul, offering guidance and support throughout your overseas employment,
    helping you adapt to your new workplace and environment, and ensuring you thrive in your international career.
    <br /><br />
    Start your journey towards an exciting new career abroad today with <span className="text-orange-500">VJC Overseas</span>. Explore endless opportunities,
    enhance your professional skills, and embrace new horizons with us.
  </p>
</motion.div>

        </motion.div>

        {/* Cards Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-32 px-4 lg:px-20 relative"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
            Select Your Work Permit Destination
          </h2>

          <div className="absolute left-2 top-[50%] z-20">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-900 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute right-2 top-[50%] z-20">
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-900 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 py-8 no-scrollbar scroll-smooth px-4"
          >
            {countriesData.map((country, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[280px] sm:min-w-[300px] max-w-[320px] h-[260px] bg-white border border-gray-200 cursor-pointer relative overflow-hidden"
                onClick={() => router.push(country.path)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${country.image})` }}
                />
                <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white bg-black/30">
                  <h3 className="text-xl text-center font-bold">
                    {country.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full px-4 lg:px-20 mt-20 mb-10"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 min-h-[350px] lg:min-h-[500px] bg-contain lg:bg-cover bg-center bg-no-repeat"

              
              style={{
                backgroundImage: "url('/nuthan.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="w-full lg:w-1/2">
              <Form />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Migrate;
