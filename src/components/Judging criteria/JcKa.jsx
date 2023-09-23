import React from 'react'
import judge from "../../assets/judge.png"
import "./jcka.css"

const JcKa = () => {
  return (
     <div className="intro sect">
        <div className="imd-idea">
            <img src={judge} alt="light idea" />
        </div>
        <div className="desc-intro">
            <p className="lg-txt">Judging Criteria
               <span className="int-purp">Key attributes</span>
            </p>
            <div>
                <ul className="judgin-list">
               <li> <span className="judge-purp">Innovation and Creativity: </span>
                Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.
                </li>
                <li> <span className="judge-purp">Functionality:</span>
                 Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
                </li>
                <li> <span className="judge-purp">Impact and Relevance: </span>
                  Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
                </li>
                <li> <span className="judge-purp">Technical Complexity: </span>
                Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
                </li>
                <li><span className="judge-purp">Adherence to Hackathon Rules: </span>
                 Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
                </li>
                </ul>
                <button className="rg-mn-btn jck-btn">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default JcKa