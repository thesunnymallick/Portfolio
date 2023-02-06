import React from 'react'

function TimeLineBox({title, date, index}) {
  return (
    <div className={`timelineItem ${index%2===0? 'leftTimeline' : 'rightTimeline'}`}>
        <div>
            <h2>{title}</h2>
             <p>{date}</p>
        </div>
    </div>
  )
}

export default TimeLineBox