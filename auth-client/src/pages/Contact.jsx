import React from 'react'

const Contact = () => {
  return (
    <>

<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
                marginwidth="0" 
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
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
            <h1 class="text-gray-900 text-3xl font-bold mb-1 title-font">Contact Us</h1>
            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-[#CF3032]  border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
           
        </div>
    </div>
</section>

    </>
  )
}

export default Contact