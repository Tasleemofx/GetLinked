import React from 'react'

import "./styles/contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
        
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
          <div className="c-s-d">
            <button className="cont-sub">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Contact