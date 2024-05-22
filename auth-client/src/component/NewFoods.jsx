import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { useFoodContext } from '../../context/foodContext'
import axios from 'axios'
import Foods from './Foods'
// const baseUrl = "https://majorproject-1-t1wr.onrender.com";
const baseUrl = "http://localhost:8000";
const NewFoods = () => {
 const [newfood, setNewFood] = useState([])
 const { Food, setFood } = useFoodContext()

 const getFoods = async () => {
  try {
   const res = await axios.get(`${baseUrl}/api/v1/food/getNewFoods`)
   if (res.data.success) {
    setNewFood(res.data.data.food)
   }
  } catch (error) {
   console.log(error);
  }
 }
//  console.log(newfood);
 useEffect(() => {
  getFoods()
 }, [newfood])
 return (
  <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
   <div className='container mx-auto py-[2vh]'>
    <div className='text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl'>
     New <span className='text-[#CF3032] text-opacity-80'>Foods</span>
    </div>
    <div className='grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
     {
      newfood.map(curElem => <Foods curElem={curElem}/>)
     }
    </div>
   </div>
  </div>
 )
}

export default NewFoods