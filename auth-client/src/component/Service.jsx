import React from 'react'
import { Link, NavLink,useNavigate } from "react-router-dom";
import chef from "../assets/chef.png";
import '../App.css'
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";
const Service = () => {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
        <div className='container mx-auto py-[2vh]'>
            <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
                {/* <img src={chef} alt="" className='h-[32rem] mx-auto justify-end' /> */}
<div className="blob1 image h-[32rem] mx-auto justify-end"></div>
                <div className='w-full md:w-[32rem] flex flex-col space-y-6'>
                <div className='text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl'>
                When in doubt, 
<span className='text-yellow-900 text-opacity-80'></span> <span className='text-red-500 text-opacity-70'>
Order Desi!
                    </span> 
                </div>
                <div className='lg:text-lg text-[#191919] md:text-base text-sm'>
                Too lazy to cook or bored of ghar ka khana? Tired of scrolling through restaurants or stuck on a concall? Whatever the reason, When In Doubt, Order Desi! 
                <br></br> From Dal Makhni to Amritsari Chole Chawal to Butter Chicken to Gulab Jamun, we have all of your delicious Desi Meals.  </div>
                <div className='flex gap-8 items-center'>
                    {/* <Link to="/team" className='bg-[#CF3032] bg-opacity-80 active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>About us</Link> */}
                </div>
            </div>            
            
            </div>
            
        </div>
    </div>
  )
}

export default Service