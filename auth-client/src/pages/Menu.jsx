import React, { useState } from 'react'
import { useFoodContext } from '../../context/foodContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useUserContext } from '../../context/userContext';
import { FaHeart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cardContext.jsx'
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";
const Menu = () => {
  const { user } = useUserContext();
  const { Food, setFood } = useFoodContext()
  const [active, setActive] = useState(0)
  const [value, setValue] = useState('all')

  const category = [
    {
      id: 0,
      name: 'All',
      value: 'all',
    },
    {
      id:1,
      name: 'Bakery',
      value: 'Bakery'
    },
    {
      id:2,
      name: 'Chineese',
      value: 'Chineese'
    },
    {
      id: 3,
      name: 'Drinks',
      value: 'Drinks'
    },
    {
      id: 4,
      name: 'IceCreams',
      value: 'IceCreams'
    },
    {
      id:5,
      name: 'Lunch',
      value: 'Lunch'
    },
    {
      id:6,
      name: 'Main Course',
      value: 'Main Course'
    },
    {
      id: 7,
      name: 'Momos',
      value: 'Momos'
    },
    {
      id: 8,
      name: 'Non-Veg',
      value: 'Non-Veg'
    },
    {
      id:9,
      name: 'Pizza',
      value: 'Pizza'
    },
    {
      id: 10,
      name: 'Rice/Biryani',
      value: 'Rice/Biryani',
    },
    {
      id:11,
      name: 'South Indian',
      value: 'South Indian'
    },
    {
      id: 12,
      name: 'Starter',
      value: 'Starter'
    },
    {
      id:13,
      name: 'Sweets',
      value: 'Sweets'
    },
    {
      id:14,
      name: 'Tiffin Services',
      value: 'Tiffin Services'
    },
    

  ]
  const handleBtn = (btn) => {
    setActive(btn.id)
    setValue(btn.value)
  }



  // const params = useParams()
  const getFoods = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/food/getAllFoods?category=${value}`)
      if (res.data.success) {
        setFood(res.data.data.food)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getFoods()
  }, [value])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/v1/food/foodDelete/${id}`);
      setFood(Food.filter(food => food._id !== id)); // Update frontend state after successful deletion
    } catch (error) {
      console.error('Failed to delete the food item:', error);
    }
  };
const {addToCart}=useCartContext()

  return (
    <div className="pt-[16vh]">
      <div className="container mx-auto py-8">
        <div className="p-5 mb-14">
          <div className="flex flex-wrap justify-center mb-8 gap-5">
            {
              category?.map(btn => (
                <button className={active === btn.id ? "text-xl px-4 py-3 text-center text-white bg-[#CF3032] bg-opacity-80  border-2 rounded-sm justify-center font-medium " : " text-xl px-4 py-3 text-[#CF3032] text-opacity-80  border-[#CF3032] border-2 font-medium "} onClick={() => {
                  handleBtn(btn)
                }}>{btn.name}</button>
              ))
            }
          </div>
          <div className='grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

            {Food?.map((curElem)=>(
              <div className='food-card bg-[#FFFADC]  rounded-xl flex flex-col cursor-pointer items-center p-5'>
              <div className='relative mb-3 m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300'>
                <Link to={`/menu/${curElem?._id}`}>
                <img src={curElem.foodImage} alt="" />

                </Link>
                {/* <div className='absolute top-2 left-2'>
                  <button className='shadow-sm text-white bg-[#CF3032] bg-opacity-80 cursor-pointer p-5 rounded-full relative '>
                    <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                  </button>
                </div> */}
                <div className='absolute bottom-2 right-2 '>
                  <button className='shadow-sm bottom-0 border-white text-white bg-red-500 bg-opacity-70  cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative '>
                    <div className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>₹{curElem?.price}</div>
                  </button>
                </div>
                {user?.user?.role === 'admin' && (
                <div className='absolute bottom-2 left-2 '>
                  <button onClick={() => handleDelete(curElem._id)}  className='shadow-sm bottom-0 border-white text-white bg-red-500 bg-opacity-70  cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative '>
                    <div className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>X</div>
                  </button>
                </div>


)}
              </div>
              <div className='flex gap-4 items-center'>
                <p className='text-xl text-center font-bold text-[#CF3032] text-opacity-80 mb-2'>{curElem?.name}
                </p>
                <div className='flex text-sm space-x-2 cursor-pointer'>
                  {/* <FaStar size={18} className='text-[#fdc55e] mb-2' /> */}
                  {/* <span className='font-normal text-[#fdc55e]'>4.3</span> */}
                  {/* <span className='font-medium '>({curElem?.reviews?.length})</span> */}
                </div>
          
              </div>
              {/* <button className='bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'
              onClick={()=> addToCart(curElem)}> Add to cart </button> */}
                    <button      onClick={()=> addToCart(curElem)}  type="submit" class="text-white bg-gradient-to-r w-full rounded-full bg-[#CF3032]  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-700 dark:focus:ring-red-900 shadow-md shadow-red-500/50 dark:shadow-md dark:shadow-red-800/80 font-medium  text-md px-8 py-2.5 text-center me-2 mb-3 mt-5">
            
            Add to cart
                        </button>

            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Menu











