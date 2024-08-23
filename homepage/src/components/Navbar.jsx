import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowForm, handleHomeClick }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const clickHandler = ()=>{
    window.location.href='http://127.0.0.1:5000';
  }

  return (
    <div className='fixed top-0 left-0 w-full h-24 bg-[#000300] text-white z-50'>
      <div className='flex justify-between items-center h-full max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>
            <Link to="home" smooth={true} duration={500} onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>Company</li>
          <li className='p-4 cursor-pointer'>Resources</li>
          <li className='p-4 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer' onClick={clickHandler}>Chatbot</li>
          <li className='p-4 cursor-pointer' onClick={() => setShowForm('login')}>Login</li>
          <li className='p-4 cursor-pointer' onClick={() => setShowForm('signup')}>SignUp</li>
        </ul>
        <div onClick={handleNav} className='cursor-pointer block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <li className='p-4 cursor-pointer border-b border-gray-600'>
              <Link to="home" smooth={true} duration={500} onClick={() => { handleHomeClick(); handleNav(); }}>
                Home
              </Link>
            </li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>Company</li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>Resources</li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>About</li>
            <li className='p-4 cursor-pointer border-b border-gray-600'>Chatbot</li>
            <li className='p-4 cursor-pointer border-b border-gray-600' onClick={() => { setShowForm('login'); handleNav(); }}>Login</li>
            <li className='p-4 cursor-pointer border-b border-gray-600' onClick={() => { setShowForm('signup'); handleNav(); }}>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
