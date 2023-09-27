import keyboy from "../../assets/keyboy.png"
import lockfaint from "../../assets/lockfaint.png"
import "./pp.css"

const PP = () => {
  return (
    <div className="priv-pol sect">
        <div className="txdiv">
        <p className="section-header">
            Privacy Policy and <span className='light-m'>Terms</span>
        </p>
        <p>Last updated on September 12, 2023</p>
        <p>
            Below are our privacy & policy, which outline a 
            lot of goodies. it’s our aim to always take of our 
            participant
        </p>
        <div className="bord-terms">
            <p>
                At getlinked tech Hackathon 1.0, we 
                value your privacy and are committed 
                to protecting your personal information.
                This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your data 
                when you participate in our tech hackathon 
                event. By participating in our event, you 
                consent to the practices described in this 
                policy.
            </p>
            <p className='licenpol'>
                Licencing Policy
            </p>
            <p>Here are terms of our Standard Licence</p>
            <ul className="stanli-list">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2"/>
                </svg>
                <p>The Standard License grants you a 
                    non-exclusive right to navigate and 
                    register for our event
                </p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                    <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2"/>
                    </svg>
                    <p>
                        You are licensed to use the item 
                        available at any free source sites, for 
                        your project developement
                    </p>
                </li>
            </ul>
            <button className="rg-mn-btn">Read More</button>
        </div>
        </div>
        <div className="security-im-cont">
            <img src={lockfaint} alt="lock" className="sec-loc"/>
            <img src={ keyboy} alt="open-lock" className="sec-boi"/> 
        </div>
    </div>
  )
}

export default PP