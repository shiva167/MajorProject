import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import logo from "../../assets/logo_big-removebg.png";
import { useUserContext } from '../../../context/userContext';
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";

const BlogAdd = () => {
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const { user } = useUserContext();

    const handleImage = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        setUploading(true);
        try {
            const { data } = await axios.post(`${baseUrl}/api/v1/all/upload-image`, formData);
            setUploading(false);
            setImage({
                url: data.url,
                public_id: data.public_id
            });
            if (uploading === false) {
                toast.success('Successfully Uploaded.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const tag = from.tag.value;
        const description = from.description.value;
        const foodImage = image?.url;
        const userId = user?.user?._id;

        const foodData = { name, tag, foodImage, description, userId, status: 'pending' };

        const res = await axios.post(`${baseUrl}/api/v1/blog/addblog`, foodData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        if (res.data.success) {
            toast.success(res.data.message);
            from.reset();
        } else {
            toast.error(res.data.message);
        }
    };

    return (
        <div className="addfood">
            <div className="w-full mx-auto pt-[16vh]">
                <form className='ease-in duration-300 w-[80% ] sm:w-max shadow-sm backdrop-blur-md mb-4 bg-[#FFFADC] 1g:w-max mx-auto flex flex-col rounded-md px-8 py-5' onSubmit={handleSubmit}>
                    <NavLink to="/home">
                        <img src={logo} alt="" className="logo mx-auto mb-6 h-20 cursor-pointer text-center" />
                    </NavLink>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                        <input type="text" placeholder="Enter User Name" name="name" className="shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <input type="file" name='myFile' accept='.jpeg .png .jpg' className="file-input file-input-bordered bg-[#CF3032] text-white w-full file-input-md" onChange={handleImage} />
                        <input type="text" placeholder="Enter Blog Tag" name="tag" className="bg-white appearance-none border rounded w-full py-3 px-3 col-span-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <textarea className="textarea textarea-ghost shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 col-span-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='description' placeholder="Write a description upto 50 words"></textarea>
                    </div>
                    <button className="bg-[#CF3032] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-x1 font-medium text-white mx-auto text-center mb-3 mt-5" type="submit">
                        Add Blog
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default BlogAdd;
