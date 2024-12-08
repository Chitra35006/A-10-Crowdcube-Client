import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Swal from "sweetalert2";

const AddACampaign = () => {

    const {theme} = useTheme();

const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [photo, setPhoto] = useState("");
const [description, setDescription] = useState("");
const [campaign, setCampaign] = useState("");
const[donation, setDonation] = useState("");
const[title, setTitle] = useState("");
  
const resetForm = () => {
  setTitle("");
  setName("");
  setPhoto("");
  setDonation("");
  setEmail("");
  setCampaign("");
  setStartDate("");
  setEndDate("");
  setDescription("");
};


  const handleSubmit =  (e) => {
    e.preventDefault();

    // Example payload for database submission
    const campaignData = {
      email,
      name,
      campaign,
      startDate,
      endDate,
      photo,
      donation,
      title,
      description
    };
    console.log(campaignData);
    //send data to server
    fetch('https://a-10-crowdcube-server.vercel.app/addCampaign',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(campaignData)
    })
    .then(res=> res.json())
    .then(data =>{
        
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Campaign Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
        resetForm();
    })
}
  return (
    <div>
      <div className="text-center lg:w-2/5 md:w-[350px] mx-auto py-10">
        <h1 className={`md:text-2xl text-xl font-bold ${theme === "light" ? "text-indigo-900" : "text-rose-200"}  `}>Add Your Campaign</h1>
        <p className="">
          You Need help? For You or for another needy people  You can add campaign Here.
        </p>
      </div>
      <div>
        <div className={`py-20 rounded-lg px-8 md:px-0 flex items-center justify-center ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
        <div className={`p-8 rounded-lg shadow-md w-full max-w-2xl ${theme === "light" ? "bg-slate-100" : "bg-gray-900"}`}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* campaignTitle */}
                <div className="form-group">
                  <label
                    htmlFor="title"
                    className={`block text-sm font-medium  ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  >
                    Title
                  </label>
                  <input
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    required
                    id="title"
                    placeholder="Campaign Title"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Name Input */}
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium  ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  >
                    Name
                  </label>
                  <input
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                    type="text"
                    required
                    id="name"
                    placeholder="Your Name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Phone Number Input */}
                <div className="form-group">
                  <label
                    htmlFor="photoUrl"
                    className={`block text-sm font-medium  ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  >
                    Photo
                  </label>
                  <input
                  value={photo}
                  onChange={(e)=>setPhoto(e.target.value)}
                    type="text"
                    required
                    id="photo"
                    placeholder="photoUrl"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Donation Input */}
                <div className="form-group">
                  <label
                    htmlFor="donation"
                    className={`block text-sm font-medium  ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  >
                    Donation Amount
                  </label>
                  <input
                    value={donation}
                    onChange={(e)=>setDonation(e.target.value)}
                    type="number"
                    required
                    id="photo"
                    placeholder="Enter Donation Amount"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Email Input */}
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium  ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  >
                    Email
                  </label>
                  <input
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    required
                    id="email"
                    placeholder="Your Email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Campaign Selection */}
                <div className="form-group mb-2">
                  <label
                    htmlFor="unique-select"
                    className={`block text-sm font-medium  ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  >
                    Choose a Campaign
                  </label>
                  <select
                    // id="campaign"
                    value={campaign}
                    onChange={(e)=> setCampaign(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option id="0" value="" disabled>Campaign Type</option>
                    <option id="1" value="Personal Issue">Personal Issue</option>
                    <option id="2" value="Start Up">Start Up</option>
                    <option id="3" value="Business">Business</option>
                    <option id="4"value="Creative Ideas">Creative Ideas</option>
                  </select>
                </div>
              </div>

              {/* Deadline*/}
              <div className={`p-6 max-w-md mx-auto rounded-lg shadow-md ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}>
        <h2 className={`text-lg font-semibold  mb-4 ${theme === "light" ? "bg:text-gray-700" : "bg:text-gray-200"}`}>Deadline</h2>

        <div className="mb-4">
          <label htmlFor="startDate" className={`block text-sm font-medium mb-1 ${theme === "light" ? "bg:text-gray-700" : "bg:text-gray-200"}`}>
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            required
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className={`block text-sm font-medium mb-1 ${theme === "light" ? "bg:text-gray-700" : "bg:text-gray-200"}`}>
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            required
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

            </div>
              {/* Description */}
              <div className={`p-4 mt-2 max-w-md mx-auto rounded-lg shadow-md ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}>
                <label
                  htmlFor="description"
                  className={`block text-sm font-medium mb-2 ${theme === "light" ? "text-gray-100" : "text-gray-800"}`}
                >
                  Add a description:
                </label>
                <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                  id="description"
                  name="description"
                  rows="4"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your description here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500  transition"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddACampaign;
