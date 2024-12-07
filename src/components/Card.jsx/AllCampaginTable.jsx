import React from "react";
import { Link } from "react-router-dom";

const AllCampaginTable = ({ campaign1, idx }) => {
    const {email,
        name,
        campaign,
        startDate,
        endDate,
        photo,
        donation,
        title,
        description} = campaign1;
  return (
    <>
    <tr>
        <td className="font-bold text-red-400">{idx+1}</td>
        <td className="text-gray-500">{campaign}</td>
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={photo}
                  alt="Campaign Pic" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>
            <div>
                <Link to={`/allCampaign/${campaign1._id}`}><button className="btn bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500  ">See More</button></Link>
            </div>
        </td>
    </tr>
    </>
  );
};

export default AllCampaginTable;
