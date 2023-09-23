import React from 'react'
import line from "../../assets/bent.png"
import chain from "../../assets/chain.png"
import bulb from "../../assets/Creative 1.png"
import fire from "../../assets/fire.png"
import "./ignite.css"

const Ignite = () => {
  return (
    <div className="ignite-sect">
        <div className="bg-tex-bnd">
         <p>Igniting a Revolution in HR Innovation</p>
         <img src={line} alt="line" />
        </div>
        <div className='hi-sz'>
        <div>
        <div>
        <div className="lag-txt">
            <img src={bulb} alt="bulb" className="fre-purp" />
            <p>getlinked Tech</p>
            <p>Hackathon <span className="pupr-tx">1.0
            <img src={chain} alt="chain" />
            <img src={fire} alt="fire" />
            </span></p>
            
        </div>
        <p className="nom-txt">
            Participate in getlinked tech Hackathon 2023 stand 
            a chance to win a Big prize
        </p>
        <button className="rg-mn-btn rgig">Register</button>

        <p>
            <span className="bgN">00</span>
            <span className="sml">H</span>
            <span className="bgN">00</span>
            <span className="sml">M</span>
            <span className="bgN">00</span>
            <span className="sml">S</span>
        </p>
        </div>
        </div>
        <div className="ai-img">

        </div>
        </div>
        
    </div>
  )
}

export default Ignite