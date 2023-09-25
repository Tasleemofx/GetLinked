import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import dgraphic from "../assets/3dgraphic.png"
import logo from "../assets/getlinkedlogo.png"
import { AppContext } from "../context/appcontext"
import { ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im"
import "./styles/register.css"
import { toast } from 'react-toastify'

const Register = () => {
  const [categories, setCategories] = useState([])
  const [formvalues, setFormvalues] = useState({
    email:"",
    phone_number:"",
    team_name: "",
    group_size: 0,
    project_topic:"",
    category: 1,
    privacy_poclicy_accepted: false
  })
  const { baseUrl } = useContext(AppContext)
  
  useEffect(()=>{
    fetch(`${baseUrl}/hackathon/categories-list`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res=> res.json())
    .then(res => setCategories(res))
    .catch(err=> toast("error getting categories"))
  }, [categories, baseUrl])

  function handleRegister(e){
    e.preventDefault()

  }

  const navigate = useNavigate()
  return (
    <div className="register-div">
      
      <nav className="mn-navbar sm-hide">
        <img src={logo} alt="logo" className="lg-mn" onClick={()=> navigate("/")}/>
            <div className='navlg'>
                <ul>
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li onClick={()=> navigate("/contact")}>Contact</li>
             
                </ul>
                <button className="rg-mn-btn m2 rg-pg" onClick={()=> navigate("/register")}>Register</button>
            </div>
    </nav>
      
      <div className="register-mn">
        <img src={dgraphic} alt="Register page" className="rg-img" />
        <div className="f-bord">
        <p className="registerhd">Register</p>
        
        <div className="rr-hd">
        <p className="b-part">Be part of this movement</p>
        <p className="c-r-a">CREATE YOUR ACCOUNT</p>
        </div>
         <form onSubmit={handleRegister}>
          
          <div className="form-iv">
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
          </div>
          <div className="div-fr">
          <div className="selectd ">
            <label>Category</label>
          <select className="cat">
            <option>Select your category</option>
            {
              categories.map(({ id, name})=> <option value={name} key={id}>{name}</option>)
            }
          </select>
          </div>
          <div className="selectd ">
            <label>Group size</label>
          <select className="grp">
            <option>Select</option>
          </select>
          </div>
          </div>
          
          <p className="pupr-note">
            Please review your registration details before submitting
                      </p>
          <div className="check-box">
            { formvalues.privacy_poclicy_accepted? <ImCheckboxChecked
            onClick={()=> setFormvalues({...formvalues, privacy_poclicy_accepted: !formvalues.privacy_poclicy_accepted})}/>: <ImCheckboxUnchecked
            onClick={()=> setFormvalues({...formvalues, privacy_poclicy_accepted: !formvalues.privacy_poclicy_accepted})}/> }
            <p>I agreed with the event terms and conditions
              and privacy policy</p>
          </div>
          
          <div className="c-s-d">
            <button className="cont-sub" type="submit">Submit</button>
          </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Register