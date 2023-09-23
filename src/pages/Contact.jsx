import React from 'react'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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
        <form className="form-outline">
          <MDBInput label='First Name' id='form1' type='text' className="con-inp" />
          <MDBInput label='Mail' id='form1' type='text' className="con-inp" />
          <MDBTextArea label='Message' id='textAreaExample' rows={4} className="con-ta" />
          <div className="c-s-d">
            <button className="cont-sub">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Contact