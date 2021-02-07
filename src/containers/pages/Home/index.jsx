import React, {Component} from 'react'
import './Home.css'
import images from './../../../assets/images/bg-1.png'
import linkedin from './../../../assets/images/linkedin.png'
import github from './../../../assets/images/github-dark.png'
import data from './../../../components/data/data.json'

class Home extends Component {
    render(){
        return (
        <div id="homeContainer">
            <img alt="personal-bg" id="homePhoto" src={images}/>
            <div id="homeBanner"></div>
            <div id="homeContent">
                <h2 id="homeTitle">Hario Lai</h2>
                <h1 id="homeDetailText">{data.home.title}</h1>
                <div id="homeAccountSection">
                    <a href={data.home.linkedin} target="_blank" rel="noopener noreferrer"><img id="linkedin" src={linkedin} width="35px" alt="linkedin-profile"/></a>
                    <a href={data.home.github} target="_blank" rel="noopener noreferrer"><img id="github" src={github} width="35px" alt="github-profile"/></a>
                </div>
            </div>
        </div>
        )
    }
}
export default Home;