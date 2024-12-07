import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaginTable from './Card.jsx/AllCampaginTable';
import { useTheme } from '../context/ThemeContext';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const{theme} = useTheme();
    return (
        <div>
            <div className='flex flex-row mt-4'>
            <h2 className={`text-center mx-auto w-1/4 font-bold ${theme === "light" ? "text-indigo-900" : "text-gray-300"}`}>See Our All Campaign</h2>
            <button className="btn bg-gradient-to-r border border-indigo-700 from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 ">Sort</button>

            </div>
            <div className='overflow-x-auto mt-4'>
            <table className='table'>
               <thead>
               <tr className={`${theme === "light" ? "bg-violet-200" : "bg-slate-700"}`}>
                    <th></th>
                    <th className={ `font-bold ${theme === "light" ? "text-violet-900" : "text-violet-300"}`}>Campaign Type</th>
                    <th className={`font-bold ${theme === "light" ? "text-violet-900" : "text-violet-300"}`}>Campaign Title</th>
                    <th></th>
                </tr>
               </thead>
               <tbody>
                {
                    campaigns.length === 0? (<p>No Campaign Found</p>):
                    (campaigns.map((campaign,index) => <AllCampaginTable
                    key={campaign._id}
                    idx={index}
                    campaign1={campaign}
                    >
                    </AllCampaginTable>))
                    
                }
               </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllCampaign;