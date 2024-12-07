import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RunningCampaignCard from '../components/Card.jsx/RunningCampaignCard';

const RunningCampaign = () => {
     const runCampaigns = useLoaderData();
    
    return (
     <div>
        <h2 className='rounded-md text-2xl  p-2 font-bold w-1/4 mx-auto text-center bg-gradient-to-r from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500'>Running Campaign</h2>
        <div className='grid md:grid-cols-12 gap-4 mb-8 '>
        {
            runCampaigns.map(rCampaign => <RunningCampaignCard
            key={rCampaign._id}
            rCampaign={rCampaign}
            ></RunningCampaignCard>)
        }
        </div>
     </div>
    );
};

export default RunningCampaign;