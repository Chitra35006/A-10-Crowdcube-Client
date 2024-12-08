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
        <div className={`p-8 rounded-lg mx-auto w-11/12 mt my-20 ${theme === "light" ? "bg-pink-50" : "bg-slate-900"}`}> 
        
        <h2 className="text-center mx-auto p-2 rounded-md text-2xl mb-4 font-bold bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 md:w-1/4 w-full">Our Goals</h2>
        <p className='text-center'>Let's build a new nation by spreading love and kindness, fostering unity, sharing knowledge, and helping each other in every situation</p>
        <div className="grid md:grid-cols-12  gap-8  mt-10">
          {/* Item 1 */}
          <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-l-4 rounded-md  p-4 ${theme === "light" ? "bg-blue-200" : "bg-blue-950"} ${theme === "light" ? "border-violet-400 " : "border-blue-400 "}`}>
            <TiWorld className="text-4xl text-blue-500" />
            <p className={`mt-2  text-lg font-semibold ${theme === "light" ? "text-black" : "text-blue-400"}`}>Build a New Nation</p>
          </div>
          {/* Item 2 */}
          <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-l-4 rounded-md  p-4 ${theme === "light" ? "bg-yellow-200" : "bg-yellow-800"} ${theme === "light" ? "border-violet-400 " : "border-yellow-400 "}`}>
            <FaGift className="text-4xl text-yellow-500" />
            <p className={`mt-2  text-lg font-semibold ${theme === "light" ? "text-black" : "text-yellow-400"}`}>Spread Love</p>
          </div>
          {/* Item 3 */}
          <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-l-4 rounded-md  p-4 ${theme === "light" ? "bg-green-200" : "bg-green-900"} ${theme === "light" ? "border-violet-400 " : "border-green-400 "}`}>
            <GiShakingHands className="text-4xl text-green-500" />
            <p className={`mt-2  text-lg font-semibold ${theme === "light" ? "text-black" : "text-green-400"}`}>Help</p>
          </div>
          {/* Item 4 */}
          <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-l-4 rounded-md  p-4 ${theme === "light" ? "bg-violet-200" : "bg-violet-950"} ${theme === "light" ? "border-violet-400 " : "border-violet-400 "}`}>
            <FaPeopleGroup className=" text-4xl text-purple-500" />
            <p className={`mt-2  text-lg font-semibold ${theme === "light" ? "text-black" : "text-violet-400"}`}>Unity</p>
          </div>
          {/* Item 5 */}
          <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-l-4 rounded-md  p-4 ${theme === "light" ? "bg-pink-200" : "bg-pink-900"} ${theme === "light" ? "border-violet-400 " : "border-pink-400 "}`}>
            <FaHandHoldingHeart className="text-4xl text-pink-500" />
            <p className={`mt-2  text-lg font-semibold ${theme === "light" ? "text-black" : "text-pink-400"}`}>Kindness</p>
          </div>
          {/* Item 6 */}
          <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-l-4 rounded-md  p-4 ${theme === "light" ? "bg-orange-200" : "bg-orange-900"} ${theme === "light" ? "border-violet-400 " : "border-orange-400 "}`}>
            <FaLightbulb className="text-4xl text-orange-500" />
            <p className={`mt-2  text-lg font-semibold ${theme === "light" ? "text-black" : "text-orange-400"}`}>Ideas</p>
          </div>
        </div>
      </div>
      
    );
};

export default Unity1;