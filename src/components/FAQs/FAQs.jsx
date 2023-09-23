import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import workcasual from "../../assets/cwok_casual.png"
import "./faqs.css"

const FAQs = () => {
  return (
    <section className="faq sect">
        <div>
         <p className="lg-txt">Frequently Asked
               <span className="int-purp">Questions</span>
            </p>

            <p className="desc-intro">
                We got answers to the questions that you might
                want to ask about getlinked Hackathon 1.0
            </p>
            <div className="ac-div">
                <button className="accordion"><span>Can I work on a project I started before the hackathon?</span>
                <AiOutlinePlus /></button>

                <button className="accordion"><span>What happens if I need help during the hackathon?</span>
                <AiOutlinePlus/></button>

                <button className="accordion"><span>What happens if I don't have an idea for a project?</span>
                <AiOutlinePlus /></button>

                <button className="accordion"><span>Can I join a team or do I have to come with one?</span>
                <AiOutlinePlus /></button>
                
                <button className="accordion"><span>What happens after the hackathon ends?</span>
                <AiOutlinePlus /></button>

                <button className="accordion"><span>Can I work on a project I started before the hackathon?</span>
                <AiOutlinePlus /></button>
                
            </div>
        </div>
        <img src={workcasual} alt="Questions" className="faq-image" />
    </section >
  )
}

export default FAQs