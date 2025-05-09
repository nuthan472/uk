// import { Link } from 'lucide-react';
import React from 'react';
import Link from 'next/link';


export default function Description() {
    return (
        <div className="relative flex flex-col justify-center items-center mt-0 md:mt-0 lg:mt-0 py-8 md:py-32 lg:py-14 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-30">
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            fill="none"
        >
            <path
                d="M400 200C550 250 650 150 700 300C750 450 600 500 400 500C200 500 50 450 100 300C150 150 250 150 400 200Z"
                fill="rgba(255,255,255,0.3)"
            />
        </svg>
    </div>
    <div className="relative text-center -mb-6">
        <h1 className="text-[6vw] lg:text-[4vw] font-bold uppercase leading-tight">
            Turn Dreams Into Destinations
        </h1>

        <p className="mt-2 lg:mt-2 text-lg md:text-xl font-medium max-w-[80%] mx-auto">
        Empower Your journey with Most Trusted visa & immigration Brand of India for a brighter future
        </p>
    </div>

    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-0 mx-auto lg:max-w-[95%] -space-y-20 md:-space-y-0 lg:-space-y-0">
        {/* Box 1 - Canada */}
        <div
            className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
            style={{
                backgroundImage: "url('/canada.png')",
                width: '250px',
                height: '500px',
            }}
        >
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-28">
                <h3 className="text-2xl font-bold text-black uppercase mb-0">Canada</h3>
                <Link href='/assessment'>
                <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                    Free Assessment
                </button>
                </Link>
                <p className="text-sm text-black max-w-44 ml-1">Check your possibilities and planning of expenses to Settle and Study in Canada.</p>
            </div>
        </div>

        {/* Box 2 - Australia */}
        <div
            className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all "
            style={{
                backgroundImage: "url('/australia.png')",
                width: '250px',
                height: '500px',
            }}
        >
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[5.60rem]">
                <h3 className="text-2xl font-bold text-black uppercase mb-0">Australia</h3>
                <Link href='/assessment'>
                <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-8">
                Free Assessment
                </button>
                </Link>
                <p className="text-sm text-black max-w-64 mr-8">Know your visa probability<br /> and Eligibility of Permanent<br /> Residency and Study in Australia</p>
            </div>
        </div>

        {/* Box 3 - Usa */}
        <div
            className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all top-14 left-3"
            style={{
                backgroundImage: "url('/Usa.png')",
                width: '210px',
                height: '420px',
            }}
        >
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[5.50rem]">
                <h3 className="text-2xl font-bold text-black uppercase mb-0">USA</h3>
                <Link href='/assessment'>
               
                <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                Free Assessment
                </button>
                </Link>
               
                <p className="text-sm text-black max-w-44 ml-4">Check your possibilities and planning of expenses to move on to USA.</p>
            </div>
           
        </div>

        {/* Box 4 - Germany */}
        <div
            className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all top-16 lg:top-0 "
            style={{
                backgroundImage: "url('/germany.png')",
                width: '250px',
                height: '500px',
            }}
        >
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[5.80rem]">
                <h3 className="text-2xl font-bold text-black uppercase mb-0">Germany</h3>
                <Link href='/assessment'>
                <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                Free Assessment
                </button>
                </Link>
                <p className="text-sm text-black max-w-72 mr-6">Check your Documentation <br />and Process for Germany Opportunity Card Visa <br /> and Germany Study Visa.</p>
            </div>
        </div>

        {/* Box 5 - UK */}
        <div
            className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all top-14 lg:top-0"
            style={{
                backgroundImage: "url('/uk.png')",
                width: '250px',
                height: '500px',
            }}
        >
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[7.20rem]">
                <h3 className="text-2xl font-bold text-black uppercase ">UK</h3>
                <Link href='/assessment'>
                <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap mb-1">
                Free Assessment
                </button>
                </Link>
                <p className="text-sm text-black max-w-44">Know your chances and estimated expenses to study in UK.</p>
            </div>
        </div>

    </div>
</div>

    );
}
