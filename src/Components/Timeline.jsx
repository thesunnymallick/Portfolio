import React from 'react'
import data from "../Assets/data.json"
import TimeLineBox from './TimeLineBox'
function Timeline() {
  return (
     <div id="timeline">
        <div className="timelineBox">
            {
               data.projects.map((item, index)=>(
                <TimeLineBox
                   key={index}
                   title={item.title}
                   date={item.date}
                   index={index}
                />
               ))
            }
        </div>
     </div>
  )
}

export default Timeline