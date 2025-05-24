import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaBookReader } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-3 shadow-sm play max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink>Home</NavLink></li>
        <li>
          <NavLink>Listed Book</NavLink>
          
        </li>
        <li><NavLink to={'/ReadList'}>Pages to Read</NavLink></li>
        <li><Link to={'Login'}>Login</Link></li>
        <li><Link>Sign Up</Link></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl robot flex items-center"><span className='bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] bg-clip-text text-transparent'>BOOK</span> <span className='text-amber-500'><FaBookReader size={22} /></span> <span  className='bg-gradient-to-r from-[#1e7aca] via-[#6C5B7B] to-[#9c294a] bg-clip-text text-transparent'>VIBE</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex lg:gap-3">
    <ul className="menu menu-horizontal px-1 flex gap-6">
      <li><NavLink>Home</NavLink></li>
      
        <li><NavLink to={'ListedBook'}>Listed Book</NavLink></li>
      
      <li><NavLink to={'/ReadList'}>Pages to Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4">
    <Link className="btn bg-[#23BE0A] hidden lg:block md:hidden">Sign In</Link>
    <Link className="btn bg-[#59C6D2] hidden lg:block md:hidden">Sign Up</Link>
  </div>
</div>
    );
};

export default Navbar;