
import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import axios from 'axios';
import '../App.css';
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";

const BlogsPage = ({ curElem, setNewBlog, newBlog }) => {
    const { user } = useUserContext();

    const handleDelete = async () => {
        try {
            await axios.delete(`${baseUrl}/api/v1/blog/blogDelete/${curElem._id}`);
            setNewBlog(newBlog.filter(blog => blog._id !== curElem._id));
        } catch (error) {
            console.error('Failed to delete the blog post:', error);
        }
    };

    const handleAccept = async () => {
        try {
            const res = await axios.patch(`${baseUrl}/api/v1/blog/updateStatus/${curElem._id}`, { status: 'accepted' });
            if (res.data.success) {
                setNewBlog(newBlog.map(blog => blog._id === curElem._id ? { ...blog, status: 'accepted' } : blog));
            }
        } catch (error) {
            console.error('Failed to accept the blog post:', error);
        }
    };

    const handleReject = async () => {
        try {
            const res = await axios.patch(`${baseUrl}/api/v1/blog/updateStatus/${curElem._id}`, { status: 'rejected' });
            if (res.data.success) {
                setNewBlog(newBlog.map(blog => blog._id === curElem._id ? { ...blog, status: 'rejected' } : blog));
            }
        } catch (error) {
            console.error('Failed to reject the blog post:', error);
        }
    };
    
    
    return (
        <div className="rounded overflow-hidden shadow-lg bg-[#FFFADC]">
            <div className="relative">
                <Link to={`/blog/${curElem._id}`}>
                    <img className="w-full" src={curElem.foodImage} alt={curElem.name} />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </Link>
                <Link to={`/blog/${curElem._id}`}>
                    <div className="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        Written By : {curElem.name}
                    </div>
                </Link>
                {user?.user?.role === 'admin' && (
                    <>
                        <button onClick={handleDelete} className="absolute bottom-0 right-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                            Delete
                        </button>
                        {curElem.status === 'pending' && (
                            <>
                                <button onClick={handleAccept} className="absolute bottom-0 right-16 bg-[#28a745] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#28a745] transition duration-500 ease-in-out">
                                    Accept
                                </button>
                                <button onClick={handleReject} className="absolute bottom-0 right-32 bg-[#dc3545] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#dc3545] transition duration-500 ease-in-out">
                                    Reject
                                </button>
                            </>
                        )}
                    </>
                )}
                {user?.user?.role === 'user' && (
                    <>
                                <button className="absolute bottom-0 right-0 bg-[#dc3545] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#dc3545] transition duration-500 ease-in-out">
                                    {curElem.status}
                                </button>
                          
                    </>
                )}
                <div className="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                    <span className="font-bold">{new Date(curElem.createdAt).getDate()}</span>
                    <small>{new Date(curElem.createdAt).toLocaleString('default', { month: 'short' })}</small>
                </div>

 
            </div>
            <div className="px-6 py-4">
                <Link to={`/blog/${curElem._id}`} className="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">
                    {curElem.tag}
                </Link>
                <p className="text-gray-500 text-sm mt-3">{curElem.description}</p>
            </div>
        </div>
    );
};

export default BlogsPage;
