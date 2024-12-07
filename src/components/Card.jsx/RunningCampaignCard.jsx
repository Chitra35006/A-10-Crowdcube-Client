import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { RiCalendarCloseFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const RunningCampaignCard = ({rCampaign}) => {
    const {theme} = useTheme();
   
    const {email,
        name,
        campaign,
        startDate,
        endDate,
        photo,
        donation,
        title,
        description} = rCampaign;

        const limitText = (text, maxLength) => {
            return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
          };
       
    return (
      <div className='col-span-4'>
          <div className={`max-w-md mx-auto mt-10  shadow-lg rounded-lg overflow-hidden  ${theme === "light" ? "bg-slate-100" : "bg-slate-800"}`}>
        <img
          className="w-full h-48 object-cover"
          src={photo}
          alt={title}
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-bold ${theme === "light" ? "text-slate-800" : "text-rose-300"}`}>{title}</h2>
          </div>
          <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-100"}`}>{limitText(description,200)}</p>
          <div className='flex flex-row gap-8 items-center justify-evenly'>
           {/* First Col */}
          <div className="mt-4 space-y-2">
            <div className='flex items-center space-x-2'>
            <MdCampaign className={`${theme === "light" ? "text-violet-900" : "text-violet-300"}`} />
            <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Campaign: <span className="font-semibold">{campaign}</span></p>
            </div>
             <div className='flex items-center space-x-2'>
            <FaRegUserCircle className={`${theme === "light" ? "text-violet-900" : "text-violet-300"}`}/>
            <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Organizer: <span className="font-semibold">{name}</span></p>
            </div>
             
          </div>
          {/* Second Col */}
          <div className="mt-4 space-y-2">
           <div className='flex items-center space-x-2'>
          <GiMoneyStack className={`${theme === "light" ? "text-red-900" : "text-red-300"}`}  />
          <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Donation Goal: <span className="font-semibold">${donation}</span></p>
          </div>
             
             <div className='flex items-center space-x-2'>
            <RiCalendarCloseFill className={`${theme === "light" ? "text-red-900" : "text-red-300"}`} />
            <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>End Date: <span className="font-semibold">{new Date(endDate).toLocaleDateString()}</span></p>
            </div>
          </div>
          </div>
        </div>
        <div className=''>
          <Link to={`/allCampaign/${rCampaign._id}`}>
          <button className='border-none btn w-full bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 '>See More</button>
          </Link>
        </div>
      </div>
      </div>
    );
};

export default RunningCampaignCard;