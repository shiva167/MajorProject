import React from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'
import { FaPlay, FaSearch } from "react-icons/fa";
// import header from "../assets/orgbanner.png";
import Carousel from './Carousel.jsx';
function Header() {
    return (
        <div className='py-2 px-10 sm:px-4 mt-10 md:px-6 lg:px-6'>
            <div className='container mx-auto py-[16vh]'>
                <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
                    <div className=' lg:w-[32rem] w-full flex flex-col space-y-6'>
                        <div className='text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl'>
                            We are <span className='text-red-900 text-opacity-80'>Serious</span> For <span className='text-red-600 text-opacity-80'>Food</span> & <span className='text-red-900 text-opacity-70'>Delivery</span>
                        </div>

                        <div className='lg:text-xl text-[#191919] md:text-lg text-base'>Craving delicious food but short on time or energy? We get it. That's why we take food and delivery seriously. We partner with the best foods in town to bring you a wide variety of cuisines, all delivered fresh and fast to your doorstep.   </div>
                        <div className='relative  gap-8 items-center'>
                      <Link to='/menu'>
                        <button className='bg-[#CF3032] absolute left-5 active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>explore now</button>
                      </Link>

                        </div>

                    </div>
 
                    {/* <img src={header} className='h-[28rem] mx-auto  justify-end' alt="banner" /> */}
                    <Carousel/>

            
            
                </div>
            </div>
        </div>
    )
}

export default Header