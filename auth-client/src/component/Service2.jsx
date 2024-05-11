import React from 'react'
// import chef2 from "../assets/chef2.png";


const Service2 = () => {
    return (
        <div className='py-3 px-10 ml-5 sm:px-4 md:px-6 lg:px-6'>
            <div className='container mx-auto py-[2vh]'>
                <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
                    <div className='w-full md:w-[32rem] flex flex-col space-y-6'>
                        <div className='text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl'>
                        Why you'll   <span className='text-red-500 text-opacity-70'>
                        love
                             Taste Tracker </span>
                        </div>
                        <div className='lg:text-lg text-[#191919] md:text-base text-sm'>
                        Unveiling a world of flavor is just a tap away with Taste Tracker! Explore endless cuisines, enjoy lightning-fast delivery, and unlock exclusive savings – all on our user-friendly website.  Let Taste Tracker be your guide to a delicious culinary adventure!
                        </div>
                        <div className='flex gap-8 items-center'>
                            {/* <button className='bg-[#CF3032] bg-opacity-80 active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>About us</button> */}
                        </div>
                    </div>
                    {/* <img src={chef2} alt="" className='h-[32rem] mx-auto justify-end' /> */}

 <div className="blob h-[32rem] mx-auto justify-end"></div>
                </div>

            </div>
        </div>)
}

export default Service2