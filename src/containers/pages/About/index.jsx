import React, {Component} from 'react'
import './About.css'
import personalPhoto from './../../../assets/images/bg-1.png'
import data from './../../../components/data/data.json'

class About extends Component{
    render(){
        return(
            <div id="aboutContainer">
                <img alt="personal-bg" id="aboutPhoto" src={personalPhoto} onContextMenu={(e)=>{e.preventDefault()}}/>
                <div className="aboutChild">
                    <h1 className="aboutChild title">About me</h1>
                    <p className="aboutChild text">{data.aboutMe}</p>
                </div>
            </div>
        )
    }
}
export default About;