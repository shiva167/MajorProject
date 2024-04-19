import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { useFoodContext } from '../../context/foodContext'
import Foods from './Foods'
import axios  from 'axios'

const RecommendedFood = () => {
    const [ratedfood, setratedFood] = useState([])
    const { Food, setFood } = useFoodContext()
   
    const getFoods = async () => {
     try {
      const res = await axios.get(`http://localhost:8000/api/v1/food/getToRated`)
      if (res.data.success) {
        setratedFood(res.data.data.food)
      }
     } catch (error) {
      console.log(error);
     }
    }
    useEffect(() => {
     getFoods()
    }, [ratedfood])
  return (

<div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
    <div className='container mx-auto py-[2vh]'>
        <div className='text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl'>
            Recommended <span className='text-[#f54748]'>Foods</span>
        </div>
        <div className='grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
     {
      ratedfood.map(curElem => <Foods curElem={curElem}/>)
     }
    </div>
    </div>
</div>
    )
}

export default RecommendedFood

