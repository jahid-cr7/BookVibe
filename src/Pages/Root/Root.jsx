import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className='mx-auto'>
            <Navbar />

           <div className='min-h-[calc(100vh-121px)]'>
             <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20'>
                <Outlet />
               </div>
           </div>

        </div>
    );
};

export default Root;