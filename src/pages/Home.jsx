import React from 'react'
import NavBar from '../components/Nav/Nav'
import PP from '../components/PrivacyPolicy/PP'
import Ignite from '../components/Ignite/Ignite'
import Intro from '../components/Intro/Intro'
import Rng from '../components/RnG/Rng'
import JcKa from '../components/Judging criteria/JcKa'
import PnS from '../components/PartnersnSponsor/PnS'
import PnRs from '../components/Prizes and Rewards/PnRs'
import Footer from '../components/Footer/Footer'
import FAQs from '../components/FAQs/FAQs'
import Timeline from '../components/Timeline/Timeline'

const Home = () => {
  return (
    <div>
        <NavBar />
        {/* <Ignite/> */}
        <Intro/>
        <Rng/>
        <JcKa />
        <FAQs/>
        <Timeline/>
        <PnRs/>
        <PnS/>
        <PP/>
        <Footer />
    </div>
  )
}

export default Home