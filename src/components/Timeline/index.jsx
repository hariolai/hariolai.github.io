import React from 'react';
import './Timeline.css';

const Timeline = (props) => {
    const image = require('../../assets/images/company/' + (props.logo === undefined ? 'default.png' : props.logo)).default;
    const direction = "container " + props.direction;
    return (
        <div class={direction}>
            <div class="content">
                <div class="content-timeline-image">
                    <img class="content-timeline-logo" src={image} alt="logo" onContextMenu={(e)=>{e.preventDefault()}}/>
                </div>
                <div class="content-timeline-text">
                    <p class="content-timeline-title">{props.title}</p>
                    <p class="content-timeline-organization">{props.organization}</p>
                    <p class="content-timeline-duration">{props.duration}</p>
                    <p class="content-timeline-location">{props.location}</p>
                    <ul class="content-timeline-description">
                        {props.description}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Timeline;