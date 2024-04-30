// import React from 'react'
// import { Link, NavLink, useNavigate } from "react-router-dom";

// import logo from "../assets/logo.svg";
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import { useCartContext } from '../../context/cardContext';
// import { useUserContext } from '../../context/userContext';
// import { useStripe } from '@stripe/react-stripe-js';
// import axios from 'axios'
// const baseUrl = "http://localhost:8000";
// // const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const Order = () => {
//     const { cartItems, removeItem, addToCart } = useCartContext()
//     const itemsPrice = cartItems.reduce((a, c) => a + c.qty + c.price, 0)
//     const taxPrice = itemsPrice * 0.14;
//     const taxPriceLength = taxPrice.toFixed(2);
//     const shippingPrice = itemsPrice > 2000 ? 0 : 20;
//     const totaPrice = itemsPrice + shippingPrice + parseInt(taxPriceLength);

//     const { user } = useUserContext()
//     const stripe = useStripe()

//     //************* from AllOrder*/

//     const handleFinish = async () => {

//         try {
//             const orderItems = cartItems.map(item => ({
//                 food: item._id,
//                 qty: item.qty
//             }))
//             const res = await axios.post(`${baseUrl}/api/v1/order/order`, {
//                 user: user?.user._id,
//                 items: orderItems,
//                 totalAmount: totaPrice,
//             }, {

//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             })
//             if (res.data.success) {
//                 const result = await stripe.redirectToCheckout({
//                     sessionId: res.data.sessionId
//                 })
//                 toast.success(res.data.message)
//             } else {
//                 toast.error(res.data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error('Something went wrong!')


//         }
//     }

//     //****************** from AllOrder*/

//     return (
//         <div className="h-screen pt-[16vh]">
//             <div
//                 className=" ease-in duration-300 w-[80% ] sm:w-max shadow-sm backdrop-blur-md bg-white/80
//         1g:w-[28rem] mx-auto flex flex-col items-center rounded-md px-8 py-5"
//             >
//                 <NavLink to="/home">
//                     <img
//                         src={logo}
//                         alt=""
//                         className="logo mb-6 cursor-pointer text-center"
//                     />
//                 </NavLink>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Items price: <span className='text-[#f54748]'>₹{itemsPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Tax price: <span className='text-[#f54748]'>₹{taxPriceLength}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Shipping price: <span className='text-[#f54748]'>₹{shippingPrice}</span>
//                 </div>
//                 <div className="text-xl text-[#2e2e2e] mb-3">
//                     Total price: <span className='text-[#f54748]'>₹{totaPrice}</span>
//                 </div>
//                 <button
//                     className="bg-[#f54748] active:scale-90 transition duration-150 transform
//       hover:shadow-x1 shadow-md w-full rounded-full px-8 py-2 text-x1 font-medium text-white
//       mx-auto text-center mt-4"
//                     onClick={handleFinish}
//                 >
//                     Pay ₹{totaPrice}
//                 </button>


//                 <ToastContainer />
//             </div>
//         </div>)
// }

// export default Order






import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/cardContext';
import { useUserContext } from '../../context/userContext';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios'

const Order = () => {
    const { cartItems, removeItem, addToCart } = useCartContext()
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty + c.price, 0)
    const taxPrice = itemsPrice * 0.14;
    const taxPriceLength = taxPrice.toFixed(2);
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totaPrice = itemsPrice + shippingPrice + parseInt(taxPriceLength);

    const { user } = useUserContext()
    const stripe = useStripe()

    //************* from AllOrder*/

    const handleFinish = async () => {

        try {
            const orderItems = cartItems.map(item => ({
                food: item._id,
                qty: item.qty
            }))
            const res = await axios.post(`http://localhost:8000/api/v1/order/order`, {
                user: user?.user._id,
                items: orderItems,
                totalAmount: totaPrice,
            }, {

                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                const result = await stripe.redirectToCheckout({
                    sessionId: res.data.sessionId
                })
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong!')


        }
    }

    //****************** from AllOrder*/

    return (
        <div className="h-screen pt-[16vh]">
            <div
                className=" ease-in duration-300 w-[80% ] sm:w-max shadow-sm backdrop-blur-md bg-white/80
        1g:w-[28rem] mx-auto flex flex-col items-center rounded-md px-8 py-5"
            >
                <NavLink to="/">
                    <img
                        src={logo}
                        alt=""
                        className="logo mb-6 cursor-pointer text-center"
                    />
                </NavLink>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Items price: <span className='text-[#f54748]'>₹{itemsPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Tax price: <span className='text-[#f54748]'>₹{taxPriceLength}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Shipping price: <span className='text-[#f54748]'>₹{shippingPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    Total price: <span className='text-[#f54748]'>₹{totaPrice}</span>
                </div>
                <button
                    className="bg-[#f54748] active:scale-90 transition duration-150 transform
      hover:shadow-x1 shadow-md w-full rounded-full px-8 py-2 text-x1 font-medium text-white
      mx-auto text-center mt-4"
                    onClick={handleFinish}
                >
                    Pay ₹{totaPrice}
                </button>


                <ToastContainer />
            </div>
        </div>)
}

export default Order