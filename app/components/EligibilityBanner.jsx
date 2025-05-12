'use client'; // This marks the component as a Client Component

import Link from 'next/link';
import { ClipboardCheck, CheckCircle } from 'lucide-react'; // Icons for the sidebar

const FreeEligibilitySidebar = () => {
  return (
    <div className="fixed top-1/3 left-0 sm:left-0 sm:w-[30px] sm:h-[200px] md:w-[50px] md:h-[200px] z-50 flex flex-col items-center space-y-2 ml-0 sm:ml-4"> {/* Attach to left and remove margin on small screens */}
      {/* Assignment Icon with FREE label */}
      <div className="relative flex items-center justify-center animate-shake">
        {/* Increase icon size and change color to orange, apply blinking effect */}
        <ClipboardCheck
          size={50}
          className="text-orange-500 drop-shadow-md animate-blink animate-shake-icon" // Add shake effect for the icon
        />
        {/* Centering text on top of the icon */}
        <span className="absolute text-[10px] font-bold text-black bg-opacity-80 bg-white bg-transparent px-2 py-[1px]  shadow-sm animate-blink animate-shake-text">
          FREE {/* Blinking effect for the text */}
        </span>
      </div>

      {/* Main Button */}
      <Link href="/assessment">
        <div
          className={`bg-gradient-to-b from-white to-orange-500 hover:from-orange-500 hover:to-white text-black w-[50px] h-[200px]
             shadow-xl flex flex-col items-center justify-center
            hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer`} // Removed shake from the button
        >
          {/* Vertical content inside button */}
          <div className="flex flex-col items-center justify-center rotate-90 w-[200px] h-auto"> {/* Adjusted to fit vertically */}
            <div className="flex items-center space-x-2">
              {/* Add a check circle icon */}
              <CheckCircle size={20} className="text-black" />
              <span className="text-[18px] font-semibold text-black tracking-wide">
                Eligibility Check
              </span>
              {/* Adding tick mark inside a circle after the text */}
            </div>
          </div>
        </div>
      </Link>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-blink {
          animation: blink 1.5s infinite;
        }

        /* Shake effect for the entire sidebar background */
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-shake {
          animation: shake 0.5s infinite;
        }

        /* Shake effect for the icon */
        @keyframes shake-icon {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-shake-icon {
          animation: shake-icon 0.5s infinite;
        }

        /* Shake effect for the "FREE" text */
        @keyframes shake-text {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-3px);
          }
          50% {
            transform: translateX(3px);
          }
          75% {
            transform: translateX(-3px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-shake-text {
          animation: shake-text 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default FreeEligibilitySidebar;
