import React from 'react'
import "./timeline.css"

const Timeline = () => {
  return (
    <section className="timeline sect">
        <p className="lg-txt">Timeline
            </p>
            <p className="desc-intro">
                Here is the breakdown of the time we
                anticipate using for the upcoming event.
            </p>

            <div className="timeline-dets">
                <div className="det-one">
                    <p className="timelinehd">Hackathon Announcement</p>
                    <div className="tline">
                        <span className="circ-num">1</span>
                    </div>
                    
                    <p className="timelinebd">
                        The GetLinked hackathon 1.0 is formally announced to the general public
                        and teams begin to get ready to register
                    </p>
                </div>
                <div className="det-one">
                    <p className="timelinehd">Team Registration begins</p>
                    <div className="tline">
                        <span className="circ-num">2</span>
                    </div>
                    <p className="t-date">November 18, 2023</p>
                    <p className="timelinebd">
                        Interested teams can now show their interest 
                        in the getlinked tech hackathon 1.0 2023 by 
                        proceeding to register
                    </p>
                </div>
                 <div className="det-one">
                    <p className="timelinehd">Team Registration begins</p>
                    <div className="tline">
                        <span className="circ-num">3</span>
                    </div>
                    <p className="t-date">November 18, 2023</p>
                    <p className="timelinebd">
                        Interested teams can now show their interest 
                        in the getlinked tech hackathon 1.0 2023 by 
                        proceeding to register
                    </p>
                </div>
                <div className="det-one">
                    <p className="timelinehd">Team Registration ends</p>
                    <div className="tline">
                        <span className="circ-num">4</span>
                    </div>
                    <p className="t-date">November 18, 2023</p>
                    <p className="timelinebd">
                        Interested Participants are no longer Allowed
                        to register
                    </p>
                </div>
                <div className="det-one">
                    <p className="timelinehd">Announcement of the accepted teams
                        and ideas</p>
                    <div className="tline">
                        <span className="circ-num">5</span>
                    </div>
                    <p className="t-date">November 18, 2023</p>
                    <p className="timelinebd">
                        All teams whom idea has been accepted into 
                        getlinked tech hackathon 1.0 2023 are formally 
                        announced
                    </p>
                </div>
                <div className="det-one">
                    <p className="timelinehd">Getlinked Hackathon 1.0 Offically Begins</p>
                    <div className="tline">
                        <span className="circ-num">6</span>
                    </div>
                    <p className="t-date">November 18, 2023</p>
                    <p className="timelinebd">
                        Accepted teams can now proceed to build 
                        their ground breaking skill driven solution 
                    </p>
                </div>
                <div className="det-one">
                    <p className="timelinehd">Demo Day</p>
                    <div className="tline">
                        <span className="circ-num">7</span>
                    </div>
                    <p className="t-date">November 18, 2023</p>
                    <p className="timelinebd">
                        Teams get the opportunity to pitch their 
                        projects to judges. The winner of the 
                        hackathon will also be announced on this day 
                    </p>
                </div>
            </div>
    </section >
  )
}

export default Timeline