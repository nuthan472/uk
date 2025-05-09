"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";




import Content from "./Content";

const countriesData = [
  { name: "Migrate to Germany", path: "/migrate/germany" },
  { name: "Migrate to Canada", path: "/migrate/canada" },
  { name: "Migrate to UnitedStates", path: "/migrate/united-states" },
  { name: "Migrate to Australia", path: "/migrate/australia", },
  { name: "Migrate to United Kingdom", path: "/migrate/united-kingdom",  },
  { name: "Migrate to New Zealand", path: "/migrate/new-zealand",  },
  { name: "Migrate to South Africa", path: "/migrate/south-africa", },
  { name: "Migrate to Hong Kong", path: "/migrate/hong-kong",  },
  { name: "Migrate to Denmark", path: "/migrate/denmark", },
  { name: "Migrate to UAE", path: "/migrate/uae",  },
];

const Migrate = () => {
  const router = useRouter();
  const [background, setBackground] = useState(countriesData[0].image);

  const handleCountryClick = (path, image) => {
    setBackground(image);
    router.push(path);
  };

  return (
    <section className="py-10 bg-cover bg-center transition-all duration-500 min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center md:justify-start mb-8 ml-5">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">Migrate to Your Dream</span>
            <span className="block text-center">Country</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="w-full md:w-1/3">
            {countriesData.map(({ name, path, image }) => (
              <div key={path} className="mb-4 w-full flex justify-center">
                <button
                  className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 
                  shadow-lg shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 
                  hover:bg-orange-500 hover:text-white transform hover:scale-105"
                  onClick={() => handleCountryClick(path, image)}
                >
                  {name}
                  <ArrowRight className="w-6 h-6 text-black transition duration-300 group-hover:text-white" />
                </button>
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/3 overflow-y-auto max-h-[900px] bg-white p-6 rounded-xl shadow-md border border-gray-200 -mt-24">
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migrate;