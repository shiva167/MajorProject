import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BlogsPage from './BlogsPage';
import { useUserContext } from '../../context/userContext';
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";
const Blog = () => {
    const [newBlog, setNewBlog] = useState([]);
    const { user } = useUserContext();
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({
        email: "",
        subject:"",
        message: "",
      })
      const { email, subject, message } = data
      
    const getBlogs = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/v1/blog/getAllBlogs`);
            if (res.data.success) {
                setNewBlog(res.data.data.blog);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value })
      }
    useEffect(() => {
        getBlogs();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await fetch("https://v1.nocodeapi.com/shiva167/google_sheets/gzlxFKdzQGnmvdff?tabId=Sheet1", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([[email,subject, message]]),
          })
          setSubmitted(true);
          setData({
              email: "",
              subject:"",
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
            {user?.user?.role !== 'admin' && 
                <section className="mt-16">
                    <div className="py-8 lg:py-16 px-4 bg-[#FFFADC] mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#CF3032] dark:text-white">Write a Blog Post</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                            Got a technical issue or Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                        </p>
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    value={data.subject}
                                    onChange={handleChange}
                                    name="subject"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={handleChange}
                                    rows="4"
                                    name="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="text-white bg-gradient-to-r w-1/2 rounded-full bg-[#CF3032] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium text-sm px-5 py-2 text-center me-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </section>
            }
            <div className="max-w-screen-xl mx-auto p-5 mt-16 sm:p-10 md:p-16">
                <h2 className="text-4xl tracking-tight font-extrabold text-left mb-5 mt-4 text-[#CF3032] dark:text-white">What's trending</h2>
                <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-4 gap-10">
                    {newBlog.map(curElem => (
                        <BlogsPage key={curElem._id} curElem={curElem} setNewBlog={setNewBlog} newBlog={newBlog} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
