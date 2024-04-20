import React from 'react'
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
<footer className="footer p-10 bg-red-200/30 text-base">
  <aside>
  <img src={logo} alt="" className='h-14 cursor-pointer' />

    <p>Made with ❤ <br /> ©TasteTracker 2024</p>
  </aside> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Company</header> 
    <Link to="/team" className="link link-hover">About us</Link>
    <Link to='/contact' className="link link-hover">Contact</Link>
    <Link to='/blog' className="link link-hover">Blog</Link>
  </nav> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>  )
}

export default Footer