import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { RiCalendarCloseFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';



const CampDetailsPage = () => {

  const{user} = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

 

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
    const {theme} = useTheme();

    const currentDate = new Date();
    const endDateObj = new Date(endDate);
    const isDeadlinePassed = currentDate > endDateObj;

    const handleDonateClick = () => {
      if (isDeadlinePassed) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Deadline Passed!",
          footer: '<a href="#">This Campaign is Not Available</a>',
        });
        return; // Stop further execution
      }
    
      if (user) {
        setIsLoading(true);
        const donationData = {
          email: user.email, // Logged-in user's email
          campaignId: singleData._id, // Campaign ID
          amount: singleData.donation, // Donation amount
          title: singleData.title,
        };
    
        // Send data to server
        fetch("https://a-10-crowdcube-server.vercel.app/donate", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(donationData),
        })
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false); // Stop loading when done
            if (data.insertedId) {
              Swal.fire({
                title: "Success",
                text: "Donation Successful",
                icon: "success",
                confirmButtonText: "OK",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Something went wrong. Please try again.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            setIsLoading(false); // Stop loading on error
            Swal.fire({
              title: "Error",
              text: `Failed to donate: ${error.message}`,
              icon: "error",
            });
          });
      }
    };
    

    
    return (
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
          <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-100"}`}>{description}</p>
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
            <div className='flex items-center space-x-2'>
          <MdOutgoingMail className={`${theme === "light" ? "text-violet-900" : "text-violet-300"}`} />
          <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Email: <a href={`mailto:${campaign.email}`} className="text-blue-500 underline">{email}</a></p>
          </div>
             
          </div>
          {/* Second Col */}
          <div className="mt-4 space-y-2">
           <div className='flex items-center space-x-2'>
          <GiMoneyStack className={`${theme === "light" ? "text-red-900" : "text-red-300"}`}  />
          <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Donation Goal: <span className="font-semibold">${donation}</span></p>
          </div>
          <div className='flex items-center space-x-2'>
          <FaCalendarAlt className={`${theme === "light" ? "text-red-900" : "text-red-300"}`} />
          <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>Start Date: <span className="font-semibold">{startDate}</span></p>
          </div>
             
             <div className='flex items-center space-x-2'>
            <RiCalendarCloseFill className={`${theme === "light" ? "text-red-900" : "text-red-300"}`} />
            <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>End Date: <span className="font-semibold">{new Date(endDate).toLocaleDateString()}</span></p>
            </div>
          </div>
          </div>
        </div>
        <div className=''>
          <button onClick={handleDonateClick} className='border-none btn w-full bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 '>Donate Now</button>
        </div>
      </div>
    );
};

export default CampDetailsPage;