import React from 'react'
import rng from "../../assets/rng.png"
import "./rng.css"

const Rng = () => {
  return (
          <div className="intro rng sect">
        <div className="imd-idea">
            <img src={rng} alt="rules and guidelines" />
          </div>
        <div className="desc-intro">
            <p className="lg-txt">Rules and 
               <span className="int-purp">Guidelines</span>
            </p>
            <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
                day: to shape the future. Whether you're 
                a coding genius, a design maverick, or a 
                concept wizard, you'll have the chance to transform your ideas into reality. Solving 
                real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world, that's what we're all about!
            </p>
        </div>
    </div>
  )
}

export default Rng