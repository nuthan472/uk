"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee"; // Install: npm install react-fast-marquee
import {
  FaPassport,
  FaPlane,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaUserGraduate,
  FaUsers,
  FaCheckCircle,
  FaPlayCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import Form from "./Form";

export default function Two() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <>
     {/* 🔹 Extra Space for Small Screens Only */}
     <div className="block sm:hidden lg:block h-16"></div>

 <section className="w-full overflow-hidden py-4 ">
  <Marquee speed={60} pauseOnHover={true} gradient={true} gradientWidth={50}>
    {[
      { src: "/usa.svg", alt: "USA" },
      { src: "/uk-flag.png", alt: "UK" },
      { src: "/aus1.jpg", alt: "Australia" },
      { src: "/uk-flag.png", alt: "UK" },
      { src: "/germany.svg", alt: "Germany" },
      { src: "/usa.svg", alt: "USA" },
      { src: "/uk-flag.png", alt: "UK" },
      { src: "/aus1.jpg", alt: "Australia" },
      { src: "/uk-flag.png", alt: "UK" },
      { src: "/germany.svg", alt: "Germany" },
      
    ].map((country, index) => (
        <div key={index} className="flex flex-col items-center">
        <Image
          src={country.src}
          alt={country.alt}
          width={120}
          height={80}
          className="w-full max-w-[100px] gap-x-6  mx-4 sm:max-w-[120px] h-auto rounded-md shadow-lg hover:scale-110 transition-transform duration-300"
        />
        <p className="text-xs sm:text-sm gap-x-6 font-semibold mt-1 sm:mt-2 text-blue-600 text-center">
          {country.alt}
        </p>
      </div>
    ))}
  </Marquee>
</section>



      {/* 🔥 Services Section */}
      <section className="bg-gray-100 py-16 flex justify-center">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Heading and Description */}
          <div className="w-full lg:w-1/2 text-left">
          <h2 className="font-extrabold text-4xl">Our Services</h2>

            <p className="text-gray-700 text-lg mt-4 max-w-lg animate-slide-up">
              Explore our comprehensive range of services designed to make your journey smooth, stress-free, and successful.
            </p>
          </div>

          {/* Right Side - Image & Buttons */}
          <div className="relative w-full lg:w-1/2 flex ml-36 items-center justify-end">
            
            {/* Floating Buttons Positioned Left of the Image */}
            <div className="absolute left-0 transform -translate-x-1/2 flex flex-col space-y-4">
              {[
                { icon: FaPassport, label: "Passport Services", link: "/services/passport-services" },
                { icon: FaPlane, label: "Air Ticketing Services", link: "/services/air-ticketing" },
                { icon: FaMoneyBillWave, label: "Forex Services", link: "/services/forex-services" },
                { icon: FaClipboardCheck, label: "Free Assessment", link: "/services/free-assessment" },
                { icon: FaUserGraduate, label: "Free Counselling", link: "/services/free-counselling" },
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleRedirect(service.link)}
                  className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-3 hover:bg-orange-100 hover:scale-105 transition duration-300 w-56 animate-fade-in"
                >
                  <service.icon className="text-orange-600 text-xl" />
                  <p className="text-sm font-semibold text-gray-800">{service.label}</p>
                </button>
              ))}
            </div>

            {/* Image Positioned on the Right */}
            <div className="relative">
              <Image
                src="/ser1.png"
                alt="Services Image"
                width={450}
                height={300}
                className="animate-zoom-in"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 Call to Action (CTA) */}
      <section className="bg-blue-800 text-white py-12 text-center">
        <h2 className="text-3xl font-bold animate-bounce">
          Get Started with Us Today!
        </h2>
        <p className="text-lg mt-2 animate-fade-in">
          Ready to begin your journey? Our experts are here to help.
        </p>
        <button
          onClick={() => handleRedirect("/contact")}
          className="mt-4 px-6 py-3 bg-orange-400 text-blue-800 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Contact Us <FaPhoneAlt className="inline ml-2" />
        </button>
      </section>
             {/* 📝 Inquiry Form Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Inquiry Form */}
          <div className="w-full lg:w-1/2 ">
            
            <Form /> {/* 🔹 Your form component */}
          </div>
{/* Right Side - Trust & Testimonial Section */}
<div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start">
  {/* Testimonial Box */}
  <div className="bg-blue-600 text-white p-6 mt-6 lg:-top-[150px] rounded-lg shadow-lg relative z-10 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto lg:mx-0">
    <p className="text-lg italic">
      "VJC Overseas made my visa process seamless! Highly professional and always supportive. Highly recommended!" 
    </p>
    <p className="mt-4 font-semibold">- Emily Johnson, USA</p>
  </div>



{/* Image Positioned at Bottom Right */}
<div className="relative w-full flex justify-end">
  <Image 
    src="/services.png" 
    alt="Trusted" 
    width={2440} 
    height={2440} 
    className="w-full max-w-[520px] h-auto object-contain md:absolute md:right-[-130px] md:-top-[240px] md:w-[520px] md:h-[520px]"
  />
</div>


</div>

        </div>
      </section>
      <TrustedByThousands />
      {/* 🎥 Video Section */}
      <section className="bg-gray-900 text-white py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-orange-400 animate-slide-up">
          Watch How We Can Help You
        </h2>
        <p className="mt-2 text-gray-300 max-w-xl text-center animate-fade-in">
          Learn more about our services and success stories from our satisfied clients.
        </p>
        <div className="mt-6 relative w-full max-w-lg">
          <a href="https://youtu.be/cLNpEry1oPQ?si=NR8PtaZ2eAABx1OK" target="_blank" className="relative">
            <Image
              src="/youtube.jpg"
              alt="Video Thumbnail"
              width={600}
              height={350}
              className="rounded-lg shadow-lg transition duration-300 hover:scale-105"
            />
            <FaPlayCircle className="absolute text-orange-400 text-6xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </a>
        </div>
      </section>

      
      
    </>
  );
}


import { FaGlobe, FaGraduationCap, FaStar } from "react-icons/fa";

function TrustedByThousands() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 5000; 
    const step = Math.ceil(end / 100); 

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-blue-700 text-white py-12 w-full text-center">
      <div className="absolute inset-0 bg-opacity-50 bg-[url('/trust-bg.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold drop-shadow-lg">
          Trusted by <span className="text-yellow-300">{count}+</span> Happy Customers
        </h2>

        <div className="mt-6 flex justify-center gap-12">
          <div className="flex flex-col items-center">
            <FaGlobe className="text-3xl text-yellow-300" />
            <p className="text-lg font-semibold">3000+ Visas Approved</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGraduationCap className="text-3xl text-yellow-300" />
            <p className="text-lg font-semibold">2000+ Study Admissions</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-3xl text-yellow-300" />
            <p className="text-lg font-semibold">4800+ Positive Reviews</p>
          </div>
        </div>
      </div>
    </section>
    
  );
}

