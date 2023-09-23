import React from 'react'
import bigidea from "../../assets/bigidea.png"
import "./intro.css"

const Intro = () => {
  return (
    <div className="intro sect">
        <div className="imd-idea">
            <img src={bigidea} alt="light idea" />
        </div>
        <div className="desc-intro">
            <p className="lg-txt">Introduction to getlinked
               <span className="int-purp"> tech Hackathon 1.0</span>
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

export default Intro