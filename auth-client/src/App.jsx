import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './pages/Home'
import Homes from './pages/Homes'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './Shared/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import VerifyOtp from './pages/VerifyOtp'
import Addfood from './pages/admin/Addfood'
import Menu from './pages/Menu'
import FoodPage from './pages/FoodPage'
import Profile from './pages/Profile'
import Our from './pages/Our'
import Contact from './pages/Contact'


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ViewCart from './pages/ViewCart'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Blog from './pages/Blog'
import Order from './pages/Order'
import MyOrder from './pages/MyOrder'
import AllOrder from './pages/admin/AllOrder'




function App() {
  const [count, setCount] = useState(0)
  const stripePromise = loadStripe( 'pk_test_51P5OvRSGyQ51TffDOcOpaNoyDFqEFGc6G9u7RcJcdUKLFLv6GjPoBLnMWw5yjyTPuIv1GLNpuJQtztxVE9jK5qnw00mGseimLe'
);

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<ProtectedRoute><Homes/></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/team' element={<ProtectedRoute><Our/></ProtectedRoute>} />
        <Route path='/register' element={<Register />} />
        <Route path='/verifyOtp' element={
          <ProtectedRoute>
            <VerifyOtp />
          </ProtectedRoute>

        } />
        <Route path='/addfood' element={<ProtectedRoute><Addfood /></ProtectedRoute>} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu/:id' element={<FoodPage />} />
        <Route path='/viewcart' element={<ProtectedRoute><ViewCart /></ProtectedRoute>} />
        <Route path='/success' element={<ProtectedRoute><Success /></ProtectedRoute>} />
        <Route path='/cancel' element={<ProtectedRoute><Cancel /></ProtectedRoute>} />
        <Route path='/my-order' element={<ProtectedRoute><MyOrder /></ProtectedRoute>} />
        <Route path='/order' element={<ProtectedRoute>
          <Elements stripe={stripePromise}>
            <Order />
          </Elements>
        </ProtectedRoute>} />
        
        <Route path='/all-order' element={<ProtectedRoute><AllOrder/></ProtectedRoute>} />



      </Routes>
      <Footer />
    </>
  )
}

export default App
