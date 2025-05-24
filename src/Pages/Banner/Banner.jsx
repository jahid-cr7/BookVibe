import React from 'react';
import BannerIMG from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div className='bg-[#f2f3f2] rounded-2xl md:flex lg:flex  lg:justify-around md:justify-around items-center lg:px-20 lg:py-15 md:py-6 md:px-10 play max-w-screen-2xl mx-auto mt-12 md:gap-16 px-6 py-6'>
            <div className=''>
                <img className='block md:hidden lg:hidden' src={BannerIMG} alt="" />
                <h1 className='lg:text-7xl md:text-3xl md:p-3 text-black play mt-4 text-base text-center lg:text-left md:text-left'>Books to freshen up your bookshelf</h1>
                <button className=' bg-[#23BE0A] border-none text-[16px] lg:px-6 lg:py-3 md:px-3 md:py-2 md:rounded-xl lg:text-[20px] rounded-b-selector hover:bg-[#59C6D2] hover:text-black duration-300 lg:mt-10 md:text-[15px] hidden lg:block md:block'>View The List</button>
            </div>
            
            <div>
                <img className='md:w-2/3 lg:w-full md:ml-15 lg:ml-0 hidden md:block lg:block' src={BannerIMG} alt="" />
            </div>
            
        </div>
        <div className='block md:hidden lg:hidden text-center mt-5'>   
            <button className='bg-[#23BE0A] px-6 py-2 rounded-xl hover:bg-[#59C6D2] hover:px-20 hover:duration-500 hover:text-black'>View the List</button>
        </div>
        </div>
        
    );
};
 
export default Banner;