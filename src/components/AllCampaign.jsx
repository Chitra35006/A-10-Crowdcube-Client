import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaginTable from './Card.jsx/AllCampaginTable';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    return (
        <div>
            <h2 className='text-center mx-auto w-1/4 text-indigo-900 font-bold'>See Our All Campaign</h2>
            <div className='overflow-x-auto mt-4'>
            <table className='table'>
               <thead>
               <tr className='bg-violet-200 '>
                    <th></th>
                    <th className='font-bold'>Campaign Type</th>
                    <th className='font-bold'>Campaign Title</th>
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