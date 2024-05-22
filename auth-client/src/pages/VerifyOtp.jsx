import React, { useState } from 'react'
import { useUserContext } from '../../context/userContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// const baseUrl = "https://majorproject-1-t1wr.onrender.com";
const baseUrl = "http://localhost:8000";
const VerifyOtp = () => {
 const [otp, setOtp] = useState(['', '', '', '', '', ''])
 const { user } = useUserContext()
 const handleInputChange = (index, value) => {
  const newOtp = [...otp]
  newOtp[index] = value
  setOtp(newOtp)

 }
 const navigate = useNavigate()
 const combineOtp = parseInt(otp.join(''))

 const handleOnSubmit = async (e) => {
  e.preventDefault()
  const email = user?.user?.email
  const dataOtp = { email, combineOtp };
  console.log(dataOtp)
  console.log("Verification Mark 1 ")
  fetch(`${baseUrl}/api/v1/user/verifyotp`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(dataOtp)
  })
  .then(res => res.json())
  .then(data => {
    console.log("Verification Mark 2 ")
    if (data.success) {
      
      
      toast.success(data.message)
      navigate("/home");
      location.reload()
    } else {
      toast.error(data.message)
      
    }
  });
}
 //2.09.19 UI check 
 // 2.09.23 Much changed
 return (
  <div className="relative pt-[15vh] flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
   <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto max-w-lg rounded-2xl">
    <div className="max-auto flex w-full max-w-md flex-col space-y-16">
     <div className="flex flex-col items-center justify-center text-center space-y-2">
      <div className="font-semibold text-3xl">
       <p>Email Verification</p>
      </div>
      <div className="flex flex-row text-sm font-medium text-gray-400">
      <p> We have sent a code to your Email {user?.user?.email}</p>
      </div>

     </div>
     <div>
      <form onSubmit={handleOnSubmit}>
       <div className="flex flex-col space-y-16">
        <div className='flex justify-center items-center'>
        {
         otp.map((digit, index) => (
          <input key={index}
           type='text' 
           value={digit}
            maxlength='1' 
            onChange={(e) => handleInputChange(index, e.target.value)} className='w-12 h-12 mx-2 border border-gray-500 rounded text-center text-xl'
             />
         ))}
         
        </div>
       </div>

       <button type='submit' className='w-full py-3 px-4 mt-6 bg-red-700 pt-5 rounded-lg text-center text-white'>
        Verify Account
       </button>
       <ToastContainer/>
      </form>
     </div>
    </div>
   </div>
  </div>
 )
}
export default VerifyOtp