import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../Assets/data.json"
function Project() {
  return (
     <div id="project">
        <h2>Project</h2>
        <section>
            <article>
                <Carousel
                  autoPlay={true}
                   infiniteLoop={true}
                   showArrows ={false}
                   showStatus={false}
                   showThumbs={false}
                   showIndicators={false}
                >
                  {
                    data.projects.map(i=>(
                        <div className="workItems" key={i.title}>
                            <img src={i.imgSrc} alt={i.title} />
                            <aside>
                                <h4>{i.title}</h4>
                                 <p>{i.description}</p>
                                 <div>
                                    <a target="blank" href={i.url}>View Demo</a>
                                    <a target="blank" href={i.github_url}>Github</a>
                                 </div>
                            </aside>
                        </div>
                    ))
                  }
                </Carousel>
            </article>
        </section>
     </div>
  )
}

export default Project