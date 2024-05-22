import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'

const Foods = ({curElem}) => {
    return (
        <div className='food-card bg-[#FFFADC]  rounded-xl flex flex-col cursor-pointer items-center p-5'>
        <div className='relative mb-3 m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300'>


          <Link to={`/menu/${curElem?._id}`}>
          <img src={curElem.foodImage} alt="" />

          </Link>

<div className='absolute bottom-2 right-2 '>
            <button className='shadow-sm bottom-0 border-white text-white bg-red-500 bg-opacity-70 cursor-pointer p-5 h-14 w-14 text-xl font-bold rounded-full relative '>
              <div className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>₹{curElem?.price}</div>
            </button>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <p className='text-xl text-center font-bold mb-2 text-[#CF3032] text-opacity-80'>{curElem?.name}
          </p>
          <div className='flex text-sm space-x-2 cursor-pointer'>
            {/* <FaStar size={18} className='text-[#fdc55e] mb-2' />  */}
            {/* <span className='font-normal text-[#fdc55e]'>4.3</span>
            {/* <span className='font-medium '>({curElem?.reviews?.length})</span> */}
          </div>
    
        </div>
        <Link to='/menu'>
        <button      type="submit" class="text-white bg-gradient-to-r w-full rounded-full bg-[#CF3032]  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  text-md px-5 py-2.5 text-center me-2 mb-3 mt-5">
            
order now
            </button>
</Link>
      </div>    )
}

export default Foods