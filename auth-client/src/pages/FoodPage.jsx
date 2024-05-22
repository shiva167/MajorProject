import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../../context/cardContext.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PageNavigation from '../component/PageNavigation'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
const baseUrl = "http://localhost:8000";
// const baseUrl = "https://majorproject-1-t1wr.onrender.com";
const FoodPage = () => {
	const params = useParams()
	const [foodDetails, setFoodDetails] = useState([])
	const getFoodDetails = async () => {
		try {
			const res = await axios.get(`${baseUrl}/api/v1/food/getFood/${params.id}`)
			if (res.data.success) {
				setFoodDetails(res.data.data.food)
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getFoodDetails()
	}, [])
	console.log(foodDetails);
	return (
		<div className='pt-[16vh]'>
			<div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
				<div className='container mx-auto'>
					<PageNavigation title={foodDetails?.name} />
					<div className="grid grid-cols-1 md:grid-cols-2 pb-14 gap-8">
						<div className="bg-red-200/[.3] border rounded-md mb-5 p-4">
							<img src={foodDetails?.foodImage} alt="" className="w-full h-[25rem]
           cursor-pointer" />
						</div>

						<div className='bg-red-200/[.3] border rounded p-8 text-black mb-5 '>
							<div className='text-2xl mb-2 font-bold text-[#f54748]'>
								{foodDetails?.name}

							</div>
							<div className='text-2xl mb-2 font-bold text-yellow-500'>
								Price : ₹ {foodDetails?.price}

							</div>
							<div className='text-xl text-justify text-black mb-6'>
								{foodDetails?.description}
							</div>
							<div className="flex items-center justify-between mb-6">
								

							</div>
							<div>    <Link to='/menu'>

							        <button    onClick={()=> addToCart(curElem)}   type="submit" class="text-white bg-gradient-to-r w-full rounded-full from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  text-md px-5 py-2.5 text-center me-2 mb-3 mt-5">
            
			Add to Cart
						</button>
									</Link>
						</div>
						</div>
					</div>

					<div className="grid lg:grid-cols-4 pb-14 md:grid-cols-2 grid-cols-2 gap-8">
						<div className=" py-4 text-center text-white font-semibold">
							{/* Weight: {foodDetails?.weight} kg */}
						</div>
						<div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 py-4 text-center text-white font-semibold">
							Category: {foodDetails?.category}
						</div>
						<div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 py-4 text-center text-white font-semibold">
							Location: Lucknow
						</div>
						<div className=" py-4 text-center text-white font-semibold">
							
						</div>
					</div>


				</div>
			</div>
		</div >
	)
}

export default FoodPage



