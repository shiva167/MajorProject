import React, { useState } from 'react'
import avater from '../assets/profile1.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import { useUserContext } from '../../context/userContext';
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";
const Profile = () => {
    const [image, setImage] = useState({})

    const { user, setUser } = useUserContext()

    const [uploading, setUploading] = useState(false)
    const handleImage = async (e) => {
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('image', file)
        setUploading(true)
        try {
            const { data } = await axios.post(`${baseUrl}/api/v1/all/upload-image`, formData)
            setUploading(false)
            setImage({
                url: data.url,
                public_id: data.public_id
            })
            toast.success("User image updated successfully!")
        } catch (error) {
            console.log(error)
        }
    }


    const handleOnSubmit = async (e) => {
        event.preventDefault()
        const from = e.target
        const name = from.name.value
        const country = from.country.value
        const city = from.city.value
        const state = from.state.value
        const zipCode = from.zipCode.value
        const profileImage = image?.url

        try {
            const res = await axios.post(
                `${baseUrl}/api/v1/user/update`, {
                userId: user.user._id,
                name,
                country,
                city,
                state,
                zipCode,
                profileImage
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
            )
            if (res.data.success) {
             
                toast.success(res.data.message);
                from.reset();
                location.reload()
                navigate('/home')
            }else{
                toast.error(data.message)
            }
        } catch (error) {

            console.log(error)
        }


       
    };

    return (
        <div className="profile">
            <div className="w-full mx-auto pt-[16vh]">
                <form className=' ease-in duration-300 w-[80% ] sm:w-max shadow-sm backdrop-blur-md mb-4 bg-[#FFFADC]
1g:w-max mx-auto flex flex-col  rounded-md px-8 py-5'onSubmit={handleOnSubmit} >
                    <label htmlFor='file-upload' className='custom-file-upload'>
                        <img src={image?.url || user?.user?.profileImage} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto
cursor-pointer" />
                    </label>
                    <label className='block text-center text-gray-900 text-base mb-2'>Profile Picture</label>
                    <input type="file" label="Image" name='myFile' id='file-upload' className='hidden'
                        accept=' .jpeg .png .jpg' onChange={handleImage} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">

                        <input
                            type="text"
                            placeholder={user?.user?.name}
                            name="name"
                            className="  shadow-sm
bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
leading-tight focus:outline-none focus: shadow-outline"	/>



                        <input
                            type="email"
                            disabled
                            placeholder={user?.user?.email}
                            name="email"
                            className=" shadow-sm
bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
leading-tight focus:outline-none focus: shadow-outline"
                        />

                        <input
                            type="text"

                            placeholder={user?.user?.country || "Country"}
                            name="country"
                            className=" shadow-sm
bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
leading-tight focus:outline-none focus: shadow-outline"
                        />
                        <input
                            type="text"

                            placeholder={user?.user?.city || "City"}
                            name="city"
                            className=" shadow-sm
bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
leading-tight focus:outline-none focus: shadow-outline"
                        />
                        <input
                            type="text"

                            placeholder={user?.user?.state || "State"}
                            name="state"
                            className=" shadow-sm
bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
leading-tight focus:outline-none focus: shadow-outline"
                        />
                        <input
                            type="text"

                            placeholder={user?.user?.zipCode || "zipCode"}
                            name="zipCode"
                            className=" shadow-sm
bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
leading-tight focus:outline-none focus: shadow-outline"
                        />


                    </div>

                    <button
                        className="bg-[#f54748] active:scale-90 transition duration-150 transform
      hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-x1 font-medium text-white
      mx-auto text-center mb-3 mt-5"
                        type="submit"
                    >
                        Update Profile
                    </button>


                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Profile