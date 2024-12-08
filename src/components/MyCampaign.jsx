import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { ThemeContext, useTheme } from '../context/ThemeContext';
import Mycampign from './MyCampign/Mycampign';

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const { theme } = useTheme(ThemeContext);
    const [camps, setcamp] = useState([]);

    // Function to fetch campaigns
    const fetchCampaigns = () => {
        if (user?.email) {
            fetch(`https://a-10-crowdcube-server.vercel.app/campaigns?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setcamp(data))
                .catch(err => console.error("Error fetching campaigns:", err));
        }
    };

    useEffect(() => {
        fetchCampaigns();
    }, [user?.email]);

    return (
        <div>
            <div className='flex flex-row mt-4 w-11/12'>
                <h2 className={`text-center mx-auto w-1/4 font-bold ${theme === "light" ? "text-indigo-900" : "text-gray-300"}`}>
                    Your Campaign List
                </h2>
            </div>
            <div className='overflow-x-auto mt-4'>
                <table className='table'>
                    <thead>
                        <tr className={`${theme === "light" ? "bg-violet-200" : "bg-slate-700"}`}>
                            <th></th>
                            <th className={`font-bold ${theme === "light" ? "text-violet-900" : "text-violet-300"}`}>Campaign Type</th>
                            <th className={`font-bold ${theme === "light" ? "text-violet-900" : "text-violet-300"}`}>Campaign Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            camps.length === 0 ? (<p>No Campaign Found</p>) :
                            (camps.map((camp, index) => (
                                <Mycampign
                                    key={camp._id}
                                    idx={index}
                                    camp={camp}
                                    setcamp={setcamp}
                                    refreshData={fetchCampaigns}  // Pass the function to refresh data
                                />
                            )))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;
