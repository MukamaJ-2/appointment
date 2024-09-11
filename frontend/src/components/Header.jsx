import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center bg-primary rounded-lg p-6 md:px-10 lg:px-20 overflow-hidden'>
      {/* Left side */}
      <div className='md:w-1/2 flex flex-col items-center justify-center gap-4 p-10 md:p-20'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Right side */}
      <div className='md:w-1/2 flex justify-center items-center md:relative'>
        <img className='w-auto md:max-w-full h-auto md:absolute rounded-lg' src={assets.header_img} alt="" style={{ top: '50%', transform: 'translateY(-50%)' }} />
      </div>
    </div>
  );
}

export default Header;
