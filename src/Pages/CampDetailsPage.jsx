import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { RiCalendarCloseFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";


const CampDetailsPage = () => {

const singleData = useLoaderData();
const {email,
    name,
    campaign,
    startDate,
    endDate,
    photo,
    donation,
    title,
    description} = singleData;
    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={photo}
        alt={title}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <div className='flex flex-row gap-8 items-center justify-evenly'>
         {/* First Col */}
        <div className="mt-4 space-y-2">
          <div className='flex items-center space-x-2'>
          <MdCampaign className='text-violet-900' />
          <p className="text-sm text-gray-600">Campaign: <span className="font-semibold">{campaign}</span></p>
          </div>
           <div className='flex items-center space-x-2'>
          <FaRegUserCircle className='text-violet-900'  />
          <p className="text-sm text-gray-600">Organizer: <span className="font-semibold">{name}</span></p>
          </div>
           <div className='flex items-center space-x-2'>
          <MdOutgoingMail className='text-violet-900'  />
          <p className="text-sm text-gray-600">Email: <a href={`mailto:${campaign.email}`} className="text-blue-500 underline">{email}</a></p>
          </div>
        </div>
        {/* Second Col */}
        <div className="mt-4 space-y-2">
         <div className='flex items-center space-x-2'>
        <GiMoneyStack className='text-red-900'  />
        <p className="text-sm text-gray-600">Donation Goal: <span className="font-semibold">${donation}</span></p>
        </div>
           <div className='flex items-center space-x-2'>
          <FaCalendarAlt className='text-red-900' />
          <p className="text-sm text-gray-600">Start Date: <span className="font-semibold">{startDate}</span></p>
          </div>
           <div className='flex items-center space-x-2'>
          <RiCalendarCloseFill className='text-red-900' />
          <p className="text-sm text-gray-600">End Date: <span className="font-semibold">{endDate}</span></p>
          </div>
        </div>
        </div>
      </div>
      <div className=''>
        <button className='btn w-full bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 '>Donate</button>
      </div>
    </div>
    );
};

export default CampDetailsPage;