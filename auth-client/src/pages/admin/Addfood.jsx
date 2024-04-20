import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import logo from "../../assets/logo.svg";
const baseUrl = "https://majorproject-1-t1wr.onrender.com";
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
		const weight = from.weight.value
		const location = from.location.value
		const description = from.description.value
		const foodImage = image?.url
		const foodData = {
			name, price, foodImage, category,
			location, description, weight
		};
		const res = await axios.post("http://localhost:8000/api/v1/food/addfood", { name, price, foodImage, category,
		location, description, weight }, {
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
			<form className=' ease-in duration-300 w-[80% ] sm:w-max shadow-sm backdrop-blur-md bg-white/80
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
						className="logo mx-auto mb-6 cursor-pointer text-center"
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

					<input type="file" name='myFile' accept=' .jpeg .png .jpg' className="file-input file-input-bordered  bg-red-500 text-white w-full file-input-md  " onChange={handleImage} />

					<input
						type="number"
						placeholder="Enter Price"
						name="price"
						className=" shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
          leading-tight focus:outline-none focus: shadow-outline"
					/>

					<select className="select select-md w-full max-w-xs bg-red-500 text-white" name='category'>
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

					<input
						type="number"
						placeholder="Enter Weight"
						name="weight"
						className=" shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
          leading-tight focus:outline-none focus: shadow-outline"
					/>
					<input
						type="text"
						placeholder="Enter Location"
						name="location"
						className=" shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700
          leading-tight focus:outline-none focus: shadow-outline"
					/>
					<textarea className="textarea textarea-ghost shadow-sm
          bg-white appearance-none border rounded w-full py-3 px-3 col-span-2 text-gray-700
          leading-tight focus:outline-none focus: shadow-outline" name='description' placeholder="Description"></textarea>

				</div>
				<button
					className="bg-[#f54748] active:scale-90 transition duration-150 transform
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


//VIDEO LOG (VID- 3)
//34:09 vid 3
//48:59 se dekhna hai
//1:02:24 se continue
//1:09:11 vid cut
//1:10:25 vid cut
//1:15:00
//1:20:27 cut hai
//1:28:18 axios problem
//1:25:21  POSTMAN TESTING
//1:45:07 conti...
//1:59:28 conti...





//****LAST VIDEO****/
//start from 4:55
//13:26 continue
//24:39 continue
//28:16 major cut (1/6/24 => 1/11/24)
//36:36 continue
//50:49 continue
//1:11:00 stripe integration start
//1:33:48 continue

//***1:34:00 stripe ka lafda
//*** */ 1:38:54  continue (lag gye => entire file missing, stripe issue)
 // 1:40:16 continue
 //1:41:14 after successful payment wala kam
 //1:45:15 continue
 //1:46:04 My Order fuss (28:18 last video me change hua hai 1/6/24 => 1/11/24)
//1:50:35 continue
//1:54:49 dropdown fuss
//1:55:08 Navbar reveal 
//1:56:15 se continue krna hai after making AllOrder.jsx



//****AllOrder fuss ****/
//p1: 1:35:24  (neeche ka)
//p2: 1:55:41  (upar ka)