import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import dgraphic from "../assets/3dgraphic.png"
import logo from "../assets/getLinkedlogo.png"

import "./styles/register.css"

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className="register-div">
      <nav className="mn-navbar">
        <img src={logo} alt="logo" className="lg-mn" onClick={()=> navigate("/")}/>
            <div className='navlg'>
                <ul>
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li><Link to="/contact">Contact</Link></li>
             
                </ul>
                <button className="rg-mn-btn m2 rg-pg" onClick={()=> navigate("/register")}>Register</button>
            </div>
    </nav>
      <p className="registerhd">Register</p>
      <div className="register-mn">
        <img src={dgraphic} alt="Register page" />
        <p className="b-part">Be part of this movement</p>
        <p className="c-r-a">CREATE YOUR ACCOUNT</p>
         <form>
          <div className="rg-form-d">
            <label htmlFor="">Team Name</label>
            <input type="text" placeholder="Enter the name of your group" />
          </div>
          <div className="rg-form-d">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div className="rg-form-d">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="rg-form-d">
            <label htmlFor="">Project Topic</label>
            <input type="text" placeholder="What is your group project topic" />
          </div>
          <div className="div-fr">
          <div className="selectd ">
            <label>Category</label>
          <select className="cat">
            <option>Select your category</option>
          </select>
          </div>
          <div className="selectd ">
            <label>Group size</label>
          <select className="grp">
            <option>Select</option>
          </select>
          </div>
          </div>
          <div className="c-s-d">
            <button className="cont-sub">Submit</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Register