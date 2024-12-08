import React, { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';

const UserDonation = ({donate}) => {
    const{theme} = useTheme();
    const {amount,title} = donate;
    console.log(amount,title);
    return (
        <div className={`p-4 rounded-md  ${theme === "dark" ? "bg-slate-700" : "bg-gray-300"} ${theme === "light" ? "text-indigo-900" : "text-gray-300"}`}>
            <div>
                <h2>Donated For: <span>{title}</span></h2>
                <p>Amount: <span>${amount}</span></p>
            </div>
        </div>
    );
};

export default UserDonation;