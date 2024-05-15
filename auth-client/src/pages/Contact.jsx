import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


  
const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
      })
      const { name, email, message } = data

      const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value })
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await fetch("https://v1.nocodeapi.com/shiva167/google_sheets/HZdqpqvKVsGuyuFm?tabId=Sheet1", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify([[name, email, message]]),
            })

            setSubmitted(true);
            setData({
                name: "",
                email: "",
                message: "",
            });

            // Display a success toast notification
            toast.success('Successfully Submitted.');

    } catch (err) {
        console.log(err)
    }
      }
      
      
    
  return (
    <>

<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
                marginwidth="0" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57249.591240234266!2d82.04151614256342!3d26.258435470757604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7ce4c1e7dccb%3A0xfef6562cafd06dd3!2sSultanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715446372100!5m2!1sen!2sin"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}>
<a href="https://www.google.com/maps/search/knit+sultanpur/@26.2889923,82.0789281,17z/data=!3m1!4b1?entry=ttu" target="_blank"></a>
                </iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57249.591240234266!2d82.04151614256342!3d26.258435470757604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7ce4c1e7dccb%3A0xfef6562cafd06dd3!2sSultanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715446372100!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div class="bg-[#FFFADC] relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-bold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p class="mt-1">Kamla Nehru Institute of Technology, Sultanpur</p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-bold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a class="text-[#CF3032]  leading-relaxed">tastetracker331@email.com</a>
                    <h2 class="title-font font-bold text-gray-900 tracking-widest text-xs mt-4">Mobile No.</h2>
                    <p class="leading-relaxed">9123456780</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-[#FFFADC] flex flex-col p-6 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        

            <form onSubmit={handleSubmit}>

            <h1 class="text-gray-900 text-3xl font-bold mb-1 title-font">Contact Us</h1>
            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" onChange={handleChange} name="name" value={name} class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" onChange={handleChange}  value={email}  name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" onChange={handleChange} name="message"  value={message}  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button  type="submit"  className="text-white bg-[#CF3032]  border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
           
            </form>
            <ToastContainer />

           

        </div>
    </div>
</section>

    </>
  )
}

export default Contact