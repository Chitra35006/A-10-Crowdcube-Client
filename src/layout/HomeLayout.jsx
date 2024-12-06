import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-inter flex flex-col min-h-screen overflow-hidden '>
            <header>

            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
            
        </div>
    );
};

export default HomeLayout;