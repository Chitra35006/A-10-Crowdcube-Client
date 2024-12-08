import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useTheme } from '../context/ThemeContext';


const Services = () => {
  const {theme} = useTheme();
    return (
        <div className={`flex p-4 flex-col lg:flex-row min-h-screen mx-auto w-11/12 ${theme === "light" ? "bg-gray-200" : "bg-slate-700"}`}>
      {/* Left Section */}
      <div className="flex-1 bg-gradient-to-r from-violet-200 via-red-200 to-violet-200 text-white flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center">
          <h3 className="text-sm uppercase tracking-wide mb-2">Campaign Services</h3>
          <h1 className="text-3xl sm:text-5xl font-bold">What WE Do?</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2  text-gray-200">
        {/* Emergency Response */}
        <div className="p-6 flex flex-col items-center border-b bg-gray-700 border-gray-600 sm:border-r">
          <div className="text-4xl mb-4">
            <i className="fas fa-bell"></i> {/* Replace with your icon */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Personal Issue</h3>
          <p className="text-sm text-gray-400 text-center">
          It connects donors, responders, and beneficiaries to ensure timely and efficient allocation of funds during emergencies such as natural disasters, medical crises, or humanitarian needs.
          </p>
        </div>

        {/* Medical Aid */}
        <div className="p-6 flex flex-col items-center border-b bg-gray-800 border-gray-600">
          <div className="text-4xl mb-4">
            <i className="fas fa-parachute-box"></i> {/* Replace with your icon */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Start UP</h3>
          <p className="text-sm text-gray-400 text-center">
          Our startup is a forward-thinking company focused on delivering innovative solutions to specific industry or problem. We aim to mission statement or vision".
          </p>
        </div>

        {/* Love for Humanity */}
        <div className="p-6 flex flex-col items-center sm:border-r bg-gray-800">
          <div className="text-4xl mb-4">
            <i className="fas fa-heart"></i> {/* Replace with your icon */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Business</h3>
          <p className="text-sm text-gray-400 text-center">
            People can find fund for their business purpose so that they can easily start their business with a satisfaction & proper business plan
          </p>
        </div>

        {/* Join Hands */}
        <div className="p-6 flex flex-col items-center bg-gray-700">
          <div className="text-4xl mb-4">
            <i className="fas fa-handshake"></i> {/* Replace with your icon */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Creative Ideas</h3>
          <p className="text-sm text-gray-400 text-center">
          We share also collect creative ideas to the users that they can implement it on their business working process and make a good profit from the business.
          </p>
        </div>
      </div>

      {/* Donate Now Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
        <Tippy content="HELLO!!! Have a Good Day">
        <button  className="bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 px-4 py-2 rounded-l-md shadow-md font-semibold">
          Click Me
        </button>
        </Tippy>
      
      </div>
    </div>
    );
};

export default Services;