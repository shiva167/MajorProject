import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import logo from "../../assets/logo_big-removebg.png";
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
// const baseUrl = "http://localhost:8000";
const Addfood = () => {
	const [image, setImage] = useState({})
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
			if (uploading === false) {

				toast.success('Successfully Uploaded.')
			}
		} catch (error) {
			console.log(error)
		}
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		const from = event.target
		const name = from.name.value
		const price = from.price.value
		const category = from.category.value
		// const weight = from.weight.value
		const location = from.location.value
		const description = from.description.value
		const foodImage = image?.url
		const foodData = {
			name, price, foodImage, category,
			location, description
		};
		const res = await axios.post(`${baseUrl}/api/v1/food/addfood`, { name, price, foodImage, category,
		location, description }, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		if (res.data.success) {
			toast.success(res.data.message)
			form.reset();
		} else {
			toast.error(res.data.message)
		}
	}

return (
	<div className="addfood">
		<div className="w-full mx-auto pt-[16vh]">
			<form className=' ease-in duration-300 w-[80% ] sm:w-max shadow-sm backdrop-blur-md mb-4 bg-[#FFFADC]
1g:w-max mx-auto flex flex-col  rounded-md px-8 py-5' onSubmit={handleSubmit}>
				{/* <label htmlFor='file-upload' className='custom-file-upload'>
            <img src={image?.url || avater} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto
cursor-pointer" />
          </label>
          <label className='block text-center text-gray-900 text-base mb-2'>Profile Picture</label>
          <input type="file" label="Image" name='myFile' id='file-upload' className='hidden'
            accept=' .jpeg .png .jpg' onChange={handleImage} /> */}
				<NavLink to="/home">
					<img
						src={logo}
						alt=""
						className="logo mx-auto mb-6 h-20 cursor-pointer text-center"
					/>
				</NavLink>
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">

					<input
						type="text"
						placeholder="Enter Food Name"
						name="name"
						className="  shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
          leading-tight focus:outline-none focus: shadow-outline"	/>

					<input type="file" name='myFile' accept=' .jpeg .png .jpg' className="file-input file-input-bordered  bg-[#CF3032] text-white w-full file-input-md  " onChange={handleImage} />

					<input
						type="number"
						placeholder="Enter Price"
						name="price"
						className=" shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
          leading-tight focus:outline-none focus: shadow-outline"
					/>

					<select className="select select-md w-full max-w-xs bg-[#CF3032] text-white" name='category'>
						<option disabled selected>Select Food Category</option>
						<option>Rice/Biryani</option>
						<option>Momos</option>
						<option>Drinks</option>
						<option>IceCreams</option>
						<option>Non-Veg</option>
						<option>Starter</option>
						<option>Pizza</option>
						<option>Sweets</option>
						<option>Lunch</option>
						<option>Main Course</option>
						<option>Chineese</option>
						<option>South Indian</option>
						<option>Tiffin Services</option>
						<option>Bakery</option>

					</select>
{/* 
					<input
						type="number"
						placeholder="Enter Weight"
						name="weight"
						className=" shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
          leading-tight focus:outline-none focus: shadow-outline"
					/> */}
					<input
						type="text"
						placeholder="Enter Location"
						name="location"
						className=" textarea textarea-ghost shadow-sm
						bg-white appearance-none border rounded w-full py-3 px-3 col-span-2 text-gray-700
						leading-tight focus:outline-none focus: shadow-outline"
					/>
					<textarea className="textarea textarea-ghost shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3 col-span-2 text-gray-700
          leading-tight focus:outline-none focus: shadow-outline" name='description' placeholder="Description"></textarea>

				</div>
				<button
					className="bg-[#CF3032] active:scale-90 transition duration-150 transform
      hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-x1 font-medium text-white
      mx-auto text-center mb-3 mt-5"
					type="submit"
				>
					Add food
				</button>


				<ToastContainer />
			</form>
		</div>
	</div>)
}

export default Addfood



