import React, { Component } from 'react';
import data from './../../../components/data/data.json';
import './Project.css';

class Project extends Component {
    state = {
        displayModal: "none",
        videoPath: null
    };
    clip = (url) => {
        if(url){
            return (
                <video key={url} width="100%" controls onContextMenu={(e)=>{e.preventDefault()}}>
                    <source src={url} type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            );
        }
        return null;
    }
    displayPreview = (e) => {
        const path = require('./../../../assets/demo/' + e.target.id).default;
        this.setState({
            displayModal: "block",
            videoPath: path
        });
    }
    closeModal = (e) => {
        if(this.state.displayModal === "block"){
            if(e.target.className === "projectModalContent" || e.target.className === ""){
                e.stopPropagation();
            } else {
                this.setState({
                    displayModal: "none",
                    videoPath: null
                });
            }
        }
    }
    render(){
        let items = [];
        let duration = "";
        for(var i = 0; i < data.project.length; i++){
            duration = data.project[i].start + " - " + data.project[i].end;
            items.push(
                <div class="columnProject" id={data.project[i].preview} onClick={this.displayPreview}>
                    <h2 class="projectTitle">{data.project[i].name}</h2>
                    <h2 class="projectDuration">{duration}</h2>
                    <p class="projectDescription">{data.project[i].description}</p>
                </div>
            );
        }
        return (
            <div id="projectWrapper">
                <h1 id="projectHeader">Project</h1>
                <div class="rowProject">
                    {items}
                </div>
                <div className="projectModalWrapper" onClick={(e) => this.closeModal(e)} style={{display: this.state.displayModal}}>
                    <div className="projectModalContent">
                        {this.clip(this.state.videoPath)}
                    </div>
                </div>
            </div>)
        ;
    }
}
export default Project;