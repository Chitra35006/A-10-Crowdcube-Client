import React, { useEffect, useState } from 'react'; 
import { useTheme } from '../context/ThemeContext';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import UserDonation from './Card.jsx/UserDonation';

const MyDonations = () => {
    const { theme } = useTheme();
    const { user } = useContext(AuthContext);
    const [donates, setdonate] = useState([]);

    const fetchDonation = () => {
        if (user?.email) {
            fetch(`http://localhost:5000/myDonation?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setdonate(data))
                .catch(err => console.error("Error fetching donations:", err));
        }
    };

    useEffect(() => {
        fetchDonation();
    }, [user?.email]);

    return (
        <div>
            <h2 className={`text-center mx-auto w-1/4 font-bold ${theme === "light" ? "text-indigo-900" : "text-gray-300"}`}>
                Your Donation List
            </h2>
            <h2 className={  `mb-4 font-semibold ${theme === "light" ? "text-indigo-900" : "text-gray-300"}`}>{donates.length} Donations Found</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {donates.length === 0 ? (
                    <p>No Donations Found</p>
                ) : (
                    donates.map((donate) => (
                        <UserDonation
                            key={donate._id}
                            donate={donate}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default MyDonations;
