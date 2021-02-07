import React, {Component} from 'react'
import './Education.css'
import data from './../../../components/data/data.json'
import Timeline from '../../../components/Timeline'

class Education extends Component {
    render(){
        let items = [];
        let direction = "";
        let duration = "";
        for(var i = 0; i < data.education.length; i++){
            if(i % 2 === 0){
                direction = "left";
            } else {
                direction = "right";
            }
            duration = data.education[i].start + " - " + data.education[i].end;
            let description = [];
            for(var j = 0; j < data.education[i].description[0].length; j++){
                description.push(<li>{data.education[i].description[0][j]}</li>)
            }
            items.push(<Timeline direction={direction} logo={data.education[i].logo} title={data.education[i].major} organization={data.education[i].name} duration={duration} location={data.education[i].location} description={description}/>)
        }
        return (
        <div id="edContainer">
            <h1 id="edTitle">Education</h1>
            <div class="timeline">
                {items}
            </div>
        </div>
        )
    }
}
export default Education;