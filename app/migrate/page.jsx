"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Form from "./Form";
import Two from "./Two";
import Footer from "./Footer";



const textContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.8 } },
};

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
 
  

  return (
    <>
      {/* Navbar */}
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        {/* <Nav /> */}
      </div>

      {/* Main Section */}
      <div
        className={`relative bg-cover bg-center min-h-screen ${
          isImageLoaded ? "bg-loaded" : "bg-loading"
        }`}
        style={{
          backgroundImage: "url('/migratepageimg.avif')", // Path to the image in the public folder
        }}
        onLoad={handleImageLoad}
      >
        <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen">
          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 lg:ml-16"
            style={{ marginTop: "-2rem" }}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-20 sm:mt-12"
              style={{ fontFamily: "Times New Roman, serif" }} 
              variants={titleVariants}
            >
              Migrate to Your Dream Country
            </motion.h1>
            <motion.p
              className="flex text-black tracking-tight text-left md:font-medium max-w-xl lg:max-w-lg mt-6"
              style={{ fontWeight: "bolder", fontFamily: "Times New Roman, serif"}}
              variants={descriptionVariants}
            >
              Discover endless opportunities with our expert immigration services.
              Whether you`re looking to study or work abroad, we help make your
              dreams a reality.
            </motion.p>
          </motion.div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
            <Form />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Two />
      <Footer />
    </>
  );
};

export default ContactPage;
