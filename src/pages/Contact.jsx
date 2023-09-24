import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/getlinkedlogo.png"
import "./styles/contact.css"

const Contact = () => {
  const [formvalues, setFormvalues] = React.useState({
    firstname:"",
    email: "",
    topic: "",
    message: ""
  })
  const navigate = useNavigate()
  return (
    <div className="contact-page">
      
      <div onClick={()=> navigate(-1)} className="bck-con">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)"/>
          <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white"/>
          <defs>
            <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
              <stop stop-color="#903AFF"/>
              <stop offset="1" stop-color="#FF26B9"/>
            </linearGradient>
          </defs>
        </svg>
        </div>
        <nav className="mn-navbar">
        <img src={logo} alt="logo" className="lg-mn" onClick={()=> navigate("/")}/>
         <div className='navlg'>
                <ul>
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li onClick={()=> navigate("/contact")}>Contact</li>
             
                </ul>
                <button className="rg-mn-btn m2" onClick={()=> navigate("/register")}>Register</button>
            </div>
      </nav>
      <div className="a-bg">
        
      <div className="a-bgform">
        <p className="contact-title">
          Questions or need 
          assistance?
          Let us know about it
        </p>
        <p className="cont-info">
          Email us below to any question related 
          to our event
        </p>
        
        <form>
           <div className={formvalues.firstname? "con-div fld":"con-div"} >
            <input type="text" id="firstName" onChange={(e)=> setFormvalues({...formvalues, firstname: e.target.value})}/>
            <label htmlFor="firstName" >First Name</label>
          </div>
          <div className={formvalues.email? "con-div fld":"con-div"}>
            <input type="email" id="mail" onChange={(e)=> setFormvalues({...formvalues, email: e.target.value})}/>
            <label htmlFor="mail" >Email</label>
          </div>
          <div className={formvalues.topic? "con-div fld":"con-div"}>
            <input type="text" id="topic" onChange={(e)=> setFormvalues({...formvalues, topic: e.target.value})}/>
            <label htmlFor="topic" >Topic</label>
          </div>
          <div className={formvalues.message? "con-div fld ta-div":"con-div ta-div"}>
            <textarea type="text" id="message" onChange={(e)=> setFormvalues({ ...formvalues, message: e.target.value})}></textarea>
            <label htmlFor="message" >Message</label>
          </div>
          <div className="c-s-d">
            <button className="cont-sub">Submit</button>
          </div>
        </form>
        </div>
        <div className="footer-con">
          <div className="g-it-lg">
          <p className="bigget">Get in touch</p>
          <p className="cont-info">Contact information</p>
          <p className="cont-info">27,Alara Street
          Yaba 100012
          Lagos State</p>
          <p className="cont-info">Call Us : 07067981819</p>
          <p className="cont-info">we are open from Monday-Friday
          08:00am - 05:00pm</p>
        </div>
          <p className="share">Share on</p>
          <div className="soc-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M5.38143 1.37985H11.1768C13.3845 1.37985 15.1783 3.17365 15.1783 5.3814V11.1768C15.1783 12.238 14.7567 13.2558 14.0063 14.0063C13.2559 14.7567 12.2381 15.1783 11.1768 15.1783H5.38143C3.17368 15.1783 1.37988 13.3845 1.37988 11.1768V5.3814C1.37988 4.32013 1.80147 3.30232 2.55191 2.55188C3.30235 1.80144 4.32016 1.37985 5.38143 1.37985ZM5.24345 2.7597C4.58472 2.7597 3.95298 3.02137 3.48719 3.48716C3.0214 3.95295 2.75973 4.58469 2.75973 5.24342V11.3147C2.75973 12.6877 3.8705 13.7985 5.24345 13.7985H11.3148C11.9735 13.7985 12.6052 13.5368 13.071 13.071C13.5368 12.6052 13.7985 11.9735 13.7985 11.3147V5.24342C13.7985 3.87047 12.6877 2.7597 11.3148 2.7597H5.24345ZM11.9012 3.79458C12.1299 3.79458 12.3493 3.88544 12.511 4.04717C12.6727 4.2089 12.7636 4.42826 12.7636 4.65698C12.7636 4.88571 12.6727 5.10506 12.511 5.26679C12.3493 5.42853 12.1299 5.51939 11.9012 5.51939C11.6725 5.51939 11.4531 5.42853 11.2914 5.26679C11.1297 5.10506 11.0388 4.88571 11.0388 4.65698C11.0388 4.42826 11.1297 4.2089 11.2914 4.04717C11.4531 3.88544 11.6725 3.79458 11.9012 3.79458ZM8.27911 4.82946C9.194 4.82946 10.0714 5.1929 10.7184 5.83983C11.3653 6.48676 11.7287 7.36418 11.7287 8.27908C11.7287 9.19397 11.3653 10.0714 10.7184 10.7183C10.0714 11.3652 9.194 11.7287 8.27911 11.7287C7.36421 11.7287 6.48679 11.3652 5.83986 10.7183C5.19294 10.0714 4.82949 9.19397 4.82949 8.27908C4.82949 7.36418 5.19294 6.48676 5.83986 5.83983C6.48679 5.1929 7.36421 4.82946 8.27911 4.82946ZM8.27911 6.20931C7.73017 6.20931 7.20372 6.42737 6.81556 6.81553C6.4274 7.20369 6.20934 7.73014 6.20934 8.27908C6.20934 8.82801 6.4274 9.35447 6.81556 9.74262C7.20372 10.1308 7.73017 10.3488 8.27911 10.3488C8.82804 10.3488 9.3545 10.1308 9.74265 9.74262C10.1308 9.35447 10.3489 8.82801 10.3489 8.27908C10.3489 7.73014 10.1308 7.20369 9.74265 6.81553C9.3545 6.42737 8.82804 6.20931 8.27911 6.20931Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
              <path d="M4.83764 0.759689H0.666748L5.5884 7.21867L0.934877 12.4884H2.51386L6.3201 8.17867L9.60438 12.4884H13.7753L8.64627 5.75728L13.0603 0.759689H11.4813L7.91457 4.79787L4.83764 0.759689ZM10.2002 11.3155L3.05012 1.93256H4.2418L11.3919 11.3155H10.2002Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d="M5.64342 8.00387H7.36823L8.05815 5.24418H5.64342V3.86434C5.64342 3.15372 5.64342 2.48449 7.02327 2.48449H8.05815V0.166352C7.83324 0.136686 6.98394 0.0697632 6.08704 0.0697632C4.2139 0.0697632 2.88373 1.21296 2.88373 3.3124V5.24418H0.813965V8.00387H2.88373V13.8682H5.64342V8.00387Z" fill="#F8F8F8"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M5.22991 3.44961C5.22972 3.81557 5.08417 4.16647 4.82527 4.42511C4.56637 4.68375 4.21533 4.82895 3.84937 4.82877C3.48341 4.82858 3.13252 4.68303 2.87387 4.42413C2.61523 4.16523 2.47003 3.81419 2.47022 3.44823C2.4704 3.08227 2.61595 2.73138 2.87485 2.47274C3.13375 2.21409 3.48479 2.06889 3.85075 2.06908C4.21671 2.06926 4.5676 2.21481 4.82625 2.47371C5.08489 2.73261 5.23009 3.08365 5.22991 3.44961ZM5.2713 5.85054H2.51161V14.4884H5.2713V5.85054ZM9.63161 5.85054H6.88572V14.4884H9.60401V9.95558C9.60401 7.43046 12.8949 7.19589 12.8949 9.95558V14.4884H15.6201V9.01729C15.6201 4.76046 10.7493 4.91915 9.60401 7.00961L9.63161 5.85054Z" fill="#F8F8F8"/>
            </svg>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact