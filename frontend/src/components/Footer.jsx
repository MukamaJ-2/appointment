import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -----left section----- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'> this system has been in existence for six months the users from different organizations appreciate the services</p>
            </div>

            {/* ------center section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'> {/* Changed to flex-col for column display */}
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                </ul>
            </div>

            {/* -----right section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'> {/* Ensured consistency in list layout */}
                    <li>+256 706807724</li>
                    <li>josephmukama67@gmail.com</li>
                </ul>
            </div>
        </div>
       {/*-------copyright text--------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 joseph's &copy; </p>
        </div> 
    </div>
  )
}

export default Footer
