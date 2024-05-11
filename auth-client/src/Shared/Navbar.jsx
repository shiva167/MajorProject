import React, { useState } from 'react'
import logo from "../assets/logo_big-removebg.png";
import { MdRestaurantMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cardContext';


const Navbar = () => {

 const [nav, setNav] = useState(false)
 const navigate = useNavigate()
 const { user, setUser } = useUserContext()
 console.log(user);

 const handleNav = () => {
  setNav(!nav)
 }

 const {cartItems} = useCartContext()

 return (

  <>


   <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
    {
     user?.user.isVerified === false && (<div className='bg-[#CF3032] py-3 px-4 text-white'>
      <Link to="/verifyOtp">Please verify your account</Link>
     </div>)}


    <div className="py-1 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto">
     <div className=" flex items-center justify-between">
      <Link to="/home">
      <img src={logo} alt="" className='h-20 cursor-pointer' />

      </Link>

      <div className="lg:flex hidden gap-8 items-center">
      <nav class="flex items-center justify-between gap-8 px-4 py-3">
  {/* <a href="#" class="text-white text-lg font-semibold hover:underline relative">
    Navbar Element
    <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span>
  </a> */}
     <Link to="/home" className='text-red-600   hover:underline relative text-xl font-medium '>
      Home    <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span></Link>
   
       
       
       <Link to="/my-order" className='text-red-600   hover:underline relative text-xl font-medium '>My Order
       <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span>
       </Link>
       <Link to="/menu" className='text-red-600   hover:underline relative text-xl font-medium '>Our Menu
       <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span></Link>
       {
         user?.user?.role === 'admin' && <Link to="/addfood" className='text-red-600   hover:underline relative text-xl font-medium '>Add food    <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span></Link>
        }

       <Link to="/blog" className='text-red-600   hover:underline relative text-xl font-medium '>Blogs
       <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span></Link>
       <Link to="/team" className='text-red-600   hover:underline relative text-xl font-medium '>About Us    <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span></Link>
       <Link to="/contact" className='text-red-600   hover:underline relative text-xl font-medium '>Contact Us    <span class="absolute left-0 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300"></span></Link>
              </nav>

       <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm  indicator-item">{cartItems?.length || 0}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#F7EDD0]   shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cartItems?.length || 0} Items</span>
          <div className="card-actions">
            <Link to='viewcart'>
          {/* <button
            className="bg-[#f54748] active:scale-90 transition duration-150 transform
            hover:shadow-xl shadow-md  rounded-full px-8 py-2 text-x1 font-medium text-white
            mx-auto text-center mb-3 mt-5"
            type="submit"
            >
            View Cart
          </button> */}
          <button      type="submit" class="text-white active:scale-90 transition duration-150 transform  bg-gradient-to-r w-full rounded-full bg-[#CF3032] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-3 mt-5">
            View Cart</button>

          </Link>
          </div>
        </div>
      </div>
    </div>
       {
         user ? (
           <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
           <div className="w-10 rounded-full">
            <img alt="Profile image" src={user?.user?.profileImage} />
           </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
           <li>
            <Link to='/profile' className="justify-between hover:text-red-500">
             Profile

            </Link>
           </li>

{
user?.user?.role === 'admin' && <li>
<Link to='/all-order' className="text-[#191919] font-medium
hover:text-red-500">All Order</Link>
</li>
}
<li>
<Link to='/my-order' className="text-[# 191919] font-medium
hover:text-red-500">My Order</Link>
</li>


           <li><a>Settings</a></li>
           <li><button  className='hover:text-red-500' onClick={() => {
            localStorage.clear()
            location.reload()
            navigate("/home")
           }}>Logout</button></li>
          </ul>
         </div>) : (<Link to='/login'>
          <button className="text-white w-full rounded-full bg-[#CF3032] hover:text-[#CF3032] hover:bg-white  font-medium  text-sm px-5 py-2.5 text-center me-2 mb-3 mt-5">Login
          </button>
         </Link>
        )
       }


      </div>

      <div className="block lg:hidden z-40 " onClick={handleNav}>
       {
        nav ? (<RxCross1 size={25} className='text-[#191919] cursor-pointer' />) : (<MdRestaurantMenu className='text-red-500 cursor-pointer' size={25} />)
       }
      </div>

      <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24`}>
       <div className="flex flex-col gap-8 ">
        <Link to="/" className='text-[#191919] text-base font-medium hover:text-red-500'>Home</Link>
        
        <Link to="/menu" className='text-[#191919] text-base font-medium hover:text-red-500'>Our Menu</Link>
        <Link to="/blog" className='text-[#191919] text-base font-medium hover:text-red-500'>Blogs</Link>
        <Link to="/team" className='text-[#191919] text-base font-medium hover:text-red-500'>About Us</Link>
        <Link to="/contact" className='text-[#191919] text-base font-medium hover:text-red-500'>Contact Us</Link>

        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm text-red-500 indicator-item">{cartItems?.length || 0}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-red-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cartItems?.length || 0} Items</span>
          <div className="card-actions">
            <Link to='viewcart'>
          {/* <button
            className="bg-[#f54748] active:scale-90 transition duration-150 transform
      hover:shadow-xl shadow-md  rounded-full px-8 py-2 text-x1 font-medium text-white
      mx-auto text-center mb-3 mt-5"
            type="submit"
          >
            View Cart
          </button> */}
                    <button      type="submit" class="text-white bg-gradient-to-r w-full rounded-full from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-3 mt-5">
            View Cart</button>

          </Link>
          </div>
        </div>
      </div>
    </div>
<Link to="/login">
        {/* <button className="bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Login</button> */}
        <button      type="submit" className="text-white w-full rounded-full bg-[#CF3032] hover:text-[#CF3032] hover:bg-white  font-medium  text-sm px-5 py-2.5 text-center me-2 mb-3 mt-5">
            Login</button>

</Link>



       </div>


      </div>





     </div>
    </div>
   </div>
  </>


 )
}

export default Navbar


















