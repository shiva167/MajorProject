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

    const getBlogs = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/v1/blog/getAllBlogs`);
            if (res.data.success) {
                let blogs = res.data.data.blogs;

                // Filter blogs based on user role
                if (user?.user?.role === 'user') {
                    blogs = blogs.filter(blog => blog.userId === user.user._id);
                } else if (user?.user?.role === 'admin') {
                    blogs = blogs.filter(blog => blog.status !== 'rejected' || blog.userId === user.user._id);
                } else {
                    // For non-logged-in users, show only accepted blogs
                    blogs = blogs.filter(blog => blog.status === 'accepted');
                }

                // Sort blogs by most recent date in descending order
                blogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setNewBlog(blogs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, [user]);

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-5 mt-16 sm:p-10 md:p-16">
                <h2 className="text-4xl tracking-tight font-extrabold text-left mb-5 mt-4 text-[#CF3032] dark:text-white">What's trending</h2>
                <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-4 gap-10">
                    {newBlog.map(curElem => (
                        <BlogsPage key={curElem._id} curElem={curElem} setNewBlog={setNewBlog} newBlog={newBlog} />
                    ))}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Blog;
