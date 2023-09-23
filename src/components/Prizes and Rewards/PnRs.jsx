import React from 'react'
import prizecup from "../../assets/prizecup.png"
import goldmedal from "../../assets/gold_medal.png"
import silvermedal from "../../assets/silver_medal.png"
import bronzemedal from "../../assets/bronze_medal.png"
import "./pnrs.css"

const PnRs = () => {
  return (
    <section className="pnr sect">
            <div className="top-h">
                <p className="lg-txt"> Prizes and <span className="int-purp">Rewards</span></p>
                
                <p className="desc-intro">Highlight of the prizes or rewards for winners 
                and for participants.
                </p>
            </div>
            
            <img src={prizecup}  alt="prize main" className="prize-main" />
            <div className="prizecards">
                <div className="silv pnrcard">
                    <img src={silvermedal} alt="medal" />
                    <p className="crd-det">
                        2nd <span>Runner</span>
                    </p>
                    <p className="mn-prize">N300,000</p>
                </div>
                <div className="gold pnrcard">
                    <img src={goldmedal} alt="medal" />
                    <p className="crd-det">
                        1st <span>Runner</span>
                    </p>
                    <p className="mn-prize gld-prz">N400,000</p>
                </div>
                <div className="bron pnrcard">
                    <img src={bronzemedal} alt="medal" />
                    <p className="crd-det">
                        3rd <span>Runner</span>
                    </p>
                    <p className="mn-prize">N150,000</p>
                </div>
            </div>
       

    </section>
  )
}

export default PnRs