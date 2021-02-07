import React, {Component} from 'react'
import './Experience.css'
import data from './../../../components/data/data.json'
import Timeline from '../../../components/Timeline'

class Experience extends Component {
    render(){
        let items = [];
        let direction = "";
        let duration = "";
        for(var i = 0; i < data.experiences.length; i++){
            if(i % 2 === 0){
                direction = "left";
            } else {
                direction = "right";
            }
            duration = data.experiences[i].start + " - " + data.experiences[i].end;
            let description = [];
            for(var j = 0; j < data.experiences[i].description[0].length; j++){
                description.push(<li>{data.experiences[i].description[0][j]}</li>)
            }
            items.push(<Timeline direction={direction} logo={data.experiences[i].logo} title={data.experiences[i].role} organization={data.experiences[i].company} duration={duration} location={data.experiences[i].location} description={description}/>)
        }
        return (
        <div id="expContainer">
            <h1 id="expTitle">Experience</h1>
            <div class="timeline">
                {items}
            </div>
        </div>
        )
    }
}
export default Experience;