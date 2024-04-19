import React from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import img11 from '../assets/shaquib.jpeg'
import img7 from '../assets/shiva.jpg'
import img2 from '../assets/shikha.png'


const Our = () => {
    return(
<div className="mb-12  bg-gray-100 w-full">
                <div className="container flex justify-center bg-gray-100 w-full mt-15">
                    <h1 className="text-gray-500 pt-36 pl-16 text-3xl w-full  bg-gray-100 text-center ">  We 3</h1>
                    {/* <div>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div> */}
                </div>
                <div className="w-full bg-gray-100 px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={img11} alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Shaquib Hussain</h1>
                                        <p className="text-gray-800 text-sm text-center">UI/UX Designer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">I'm Shaquib Hussain, and I love making websites and apps look awesome and easy to use.  I believe in making things not just look good, but also work well.   I think working together and sharing ideas is super important for making things great.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="https://github.com/shaquib150323" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/shaquib-hussain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="mx-5">
                                                <div aria-label="LinkedIn" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://x.com/Shaquib_30922?t=6NOi_v0yeLc9MW2LHOedVA&s=09" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={img7} alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Shiva Agrawal</h1>
                                        <p className="text-gray-800 text-sm text-center">Backend developer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">I'm Shiva Agrawal, a backend developer with a passion for building robust and scalable digital solutions. My focus is on creating the backbone of applicationsI thrive on crafting efficient and secure code that powers dynamic web applications and services.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="https://github.com/shiva167" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/shiva-agrawal/" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.instagram.com/_____shiva.agrawal/" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={img2} alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Shikha Jaiswal</h1>
                                        <p className="text-gray-800 text-sm text-center">Frontend Developer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">I'm Shikha jaiswal, a frontend developer with a passion for turning ideas into interactive and user-friendly websites. I believe in writing clean, efficient code that brings designs to life seamlessly. I love the process of problem-solving and turning concepts into reality.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="https://github.com/shikha-sj02" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/shikha-jaiswal-1b350a257" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://instagram.com/shikha_732?igshid=ZDc4ODBmNjlmNQ==" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Our;