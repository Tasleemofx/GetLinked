import React from 'react'
import pns from "../../assets/Partner and Sponsors.png"
import pnsbg from "../../assets/pnsbg.png"
import "./pns.css"

const PnS = () => {
  return (
    <div className="pns sect">
        <div>
        <p className="pns-lg lg-txt">
            Partners and Sponsors
        </p>
        <p className="pns-bod">
            Getlinked Hackathon 1.0 is honored to have the
            following major companies as its partners and 
            sponsors
        </p>
        <div className="logo-boxs">
          {/* <picture>
            <source media='(min-width: 768px)' srcSet={pnsbg} />
            <source media='(max-width: 767px)' srcSet={pns} />
          </picture> */}
          <img src={pns} alt="pns" className="sm-scr" />
          <img src={pnsbg} alt="pns" className="bg-scr" />
        </div>
        </div>
    </div>
  )
}

export default PnS