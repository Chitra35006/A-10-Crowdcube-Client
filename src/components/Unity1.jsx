import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaHandHoldingHeart } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";


const Unity1 = () => {
    const{theme} = useTheme();
    console.log("Unity Component - Current Theme:", theme);
    // const [theme, setTheme] = useState("light");
    return (
        <div className={`p-8 rounded-lg mb-10 ${theme === "light" ? "bg-pink-50" : "bg-gray-800"}`}> 
        
        <h2 className="text-center mx-auto p-2 rounded-md text-2xl mb-4 font-bold bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 w-1/4">Our Goals</h2>
        <p className='text-center'>Let's build a new nation by spreading love and kindness, fostering unity, sharing knowledge, and helping each other in every situation</p>
        <div className="grid grid-cols-12 gap-8  mt-10">
          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center col-span-4 border-l-4 bg-blue-200 border-violet-400 p-4">
            <TiWorld className="text-4xl text-blue-500" />
            <p className="mt-2 text-black text-lg font-semibold">Build a New Nation</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center col-span-4 border-l-4 bg-yellow-200 border-violet-400 p-4">
            <FaGift className="text-4xl text-yellow-500" />
            <p className="mt-2 text-black text-lg font-semibold">Spread Love</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center col-span-4 border-l-4 bg-green-200 border-violet-400 p-4">
            <GiShakingHands className="text-4xl text-green-500" />
            <p className="mt-2 text-black text-lg font-semibold">Help</p>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center justify-center col-span-4 border-l-4 bg-purple-200 border-violet-400 p-4">
            <FaPeopleGroup className="text text-black-4xl text-purple-500" />
            <p className="mt-2 text-black text-lg font-semibold">Unity</p>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col items-center justify-center col-span-4 border-l-4 bg-pink-200 border-violet-400 p-4">
            <FaHandHoldingHeart className="text-4xl text-pink-500" />
            <p className="mt-2 text-black text-lg font-semibold">Kindness</p>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col items-center justify-center col-span-4 border-l-4 bg-orange-200 border-violet-400 p-4">
            <FaLightbulb className="text-4xl text-orange-500" />
            <p className="mt-2 text-black text-lg font-semibold">Ideas</p>
          </div>
        </div>
      </div>
      
    );
};

export default Unity1;