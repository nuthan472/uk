"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import Two from "./Two";
// import Content from "./Content";
import Form from "./Form";

import Footer from "./Footer";   

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-center items-center min-h-screen mt-20 pt-20 bg-white bg-cover bg-center relative" style={{ backgroundImage: "url('/contactpage.gif')" }}>
  {/* Black Opacity Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
  
  <div className=" shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row  relative z-10">
    {/* Left Half - Contact Info */}
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
      <h2 className="text-3xl font-semibold text-white mb-4 -mt-0 md:-mt-24">Get <span className="text-orange-700"> in</span> Touch</h2>
      <p className="text-white mb-4">
        We would love to hear from you! Whether you have a question about our services, pricing, or anything else, 
        our team is ready to answer all your inquiries.
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <i className="fas fa-envelope text-orange-500 text-lg"></i>
         
          <p className="text-white">📞  +91 9160449000</p>
          
        </div>
        <div className="flex items-center space-x-3">
          <i className="fas fa-globe text-orange-500 text-lg"></i>
          <p className="text-white">✉️ info@vjcoverseas.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fas fa-globe text-orange-500 text-lg"></i>
          <p className="text-white">🌐 www.vjcoverseas.com</p>
        </div>

        
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold mt-4">Our Branches:</p>
          <div className="flex items-center space-x-3">
            <i className="fas fa-map-marker-alt text-orange-500 text-lg"></i>
            <p className="text-white">Hyderabad, Telangana, 500038</p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-map-marker-alt text-orange-500 text-lg"></i>
            <p className="text-white">Bangalore, India, 560095</p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-map-marker-alt text-orange-500 text-lg"></i>
            <p className="text-white">7200 Preston Rd, Plano,

TX 75024, USA</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Half - Form */}
    <div className="w-full md:w-1/2 p-6">
      <Form/>
    </div>
  </div>
</div>



      <Footer/>

    </>
  );
};

export default ContactPage;
