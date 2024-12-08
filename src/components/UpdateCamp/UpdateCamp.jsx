import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useTheme } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const UpdateCamp = () => {
  const { theme } = useTheme(AuthContext);
  const singleCampData = useLoaderData();
  

  const [title, setTitle] = useState(singleCampData?.title);
  const [email, setEmail] = useState(singleCampData?.email);
  const [name, setName] = useState(singleCampData?.name);
  const [campaign, setCampaign] = useState(singleCampData?.campaign);
  const [startDate, setStartDate] = useState(
    new Date(singleCampData?.startDate) || new Date()
  );
  const [endDate, setEndDate] = useState(
    new Date(singleCampData?.endDate) || new Date()
  );
  const { id } = useParams(); // Extract id from the loaded data

  console.log(singleCampData); // Check if id exists

  
  const [photo, setPhoto] = useState(singleCampData?.photo);
  const [donation, setDonation] = useState(singleCampData?.donation);
  const [description, setDescription] = useState(singleCampData?.description);

  const handleUpdateCampData = (e) => {
    e.preventDefault();
    const data = {
      campaign,
      startDate,
      endDate,
      photo,
      donation,
      title,
      description,
    };
    console.log(data);
    fetch(`https://a-10-crowdcube-server.vercel.app/camping/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json" ,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Updated!",
          text: " Data Updated.",
          icon: "success",
        });
        console.log(data);
      });
     
  };

  return (
    <div>
      <NavBar></NavBar>
      {/* //Update */}
      <div>
        <div className="text-center lg:w-2/5 md:w-[350px] mx-auto py-10">
          <h1
            className={`md:text-2xl text-xl font-bold ${
              theme === "light" ? "text-indigo-900" : "text-rose-200"
            }  `}
          >
            Update Your Campaign
          </h1>
        </div>
        <div>
          <div
            className={`py-20 rounded-lg px-8 md:px-0 flex items-center justify-center ${
              theme === "light" ? "bg-gray-100" : "bg-gray-800"
            }`}
          >
            <div
              className={`p-8 rounded-lg shadow-md w-full max-w-2xl ${
                theme === "light" ? "bg-slate-100" : "bg-gray-900"
              }`}
            >
              <form onSubmit={handleUpdateCampData}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* campaignTitle */}
                  <div className="form-group">
                    <label
                      htmlFor="title"
                      className={`block text-sm font-medium  ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                      className={`block text-sm font-medium  ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      required
                      disabled
                      id="name"
                      placeholder="Your Name"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  {/* Phone Number Input */}
                  <div className="form-group">
                    <label
                      htmlFor="photoUrl"
                      className={`block text-sm font-medium  ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      Photo
                    </label>
                    <input
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
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
                      className={`block text-sm font-medium  ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      Donation Amount
                    </label>
                    <input
                      value={donation}
                      onChange={(e) => setDonation(e.target.value)}
                      type="number"
                      required
                      id="donation"
                      placeholder="Enter Donation Amount"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium  ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      disabled
                      id="email"
                      placeholder="Your Email"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  {/* Campaign Selection */}
                  <div className="form-group mb-2">
                    <label
                      htmlFor="unique-select"
                      className={`block text-sm font-medium  ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      Choose a Campaign
                    </label>
                    <select
                      // id="campaign"
                      value={campaign}
                      onChange={(e) => setCampaign(e.target.value)}
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option id="0" value="" disabled>
                        Campaign Type
                      </option>
                      <option id="1" value="Personal Issue">
                        Personal Issue
                      </option>
                      <option id="2" value="Start Up">
                        Start Up
                      </option>
                      <option id="3" value="Business">
                        Business
                      </option>
                      <option id="4" value="Creative Ideas">
                        Creative Ideas
                      </option>
                    </select>
                  </div>
                </div>

                {/* Deadline*/}
                <div
                  className={`p-6 max-w-md mx-auto rounded-lg shadow-md ${
                    theme === "light" ? "bg-gray-50" : "bg-gray-800"
                  }`}
                >
                  <h2
                    className={`text-lg font-semibold  mb-4 ${
                      theme === "light"
                        ? "bg:text-gray-700"
                        : "bg:text-gray-200"
                    }`}
                  >
                    Deadline
                  </h2>

                  <div className="mb-4">
                    <label
                      htmlFor="startDate"
                      className={`block text-sm font-medium mb-1 ${
                        theme === "light"
                          ? "bg:text-gray-700"
                          : "bg:text-gray-200"
                      }`}
                    >
                      Start Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="MM/dd/yyyy"
                      minDate={new Date()} // Prevent past dates
                      isClearable // Allow clearing the date
                      showYearDropdown // Year dropdown
                      showMonthDropdown // Month dropdown
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="EndDate"
                      className={`block text-sm font-medium mb-1 ${
                        theme === "light"
                          ? "bg:text-gray-700"
                          : "bg:text-gray-200"
                      }`}
                    >
                      End Date
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="MM/dd/yyyy"
                      minDate={new Date()} // Prevent past dates
                      isClearable // Allow clearing the date
                      showYearDropdown // Year dropdown
                      showMonthDropdown // Month dropdown
                    />
                  </div>
                </div>
                {/* Description */}
                <div
                  className={`p-4 mt-2 max-w-md mx-auto rounded-lg shadow-md ${
                    theme === "light" ? "bg-gray-50" : "bg-gray-800"
                  }`}
                >
                  <label
                    htmlFor="description"
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    Add a description:
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                  > UPDATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCamp;
