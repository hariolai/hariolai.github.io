import React, {Component} from 'react';
import data from './../../../components/data/data.json';
import './Competition.css';

class Competition extends Component{
    state = {
        displayModal: "none",
        imagePath: null
    };
    displayPreview = (e) => {
        const image = require('./../../../assets/images/certificates/' + e.target.id).default;
        this.setState({
            displayModal: "block",
            imagePath: image
        });
        // console.log(e.target.id);
    }
    closeModal = (e) => {
        if(this.state.displayModal === "block"){
            if(e.target.className === "competitionModalContent" || e.target.className === "" || e.target.className === "certificateContainer"){
                e.stopPropagation();
            } else {
                this.setState({
                    displayModal: "none",
                    imagePath: null
                });
            }
        }
    }
    render(){
        let items = [];
        let duration = "";
        for(var i = 0; i < data.competition.length; i++){
            duration = data.competition[i].start + " - " + data.competition[i].end;
            const image = require('./../../../assets/images/company/' + data.competition[i].logo).default;
            items.push(
                <div class="columnCompetition" id={data.competition[i].certificate} onClick={this.displayPreview}>
                    <h2 class="competitionTitle">{data.competition[i].name} by&nbsp;</h2>
                    <img class="competitionImage" src={image} alt={data.competition[i].certificate}></img>
                    <h2 class="competitionDuration">{duration}</h2>
                    <p class="competitionDescription">{data.competition[i].description}</p>
                </div>
            );
        }
        return(
            <div id="competitionWrapper">
                <h1 id="competitionHeader">Competition</h1>
                <div class="rowCompetition">
                    {items}
                </div>
                <div class="competitionModalWrapper" onClick={(e) => this.closeModal(e)} style={{display: this.state.displayModal}}>
                    <div class="competitionModalContent">
                        <img class="certificateContainer" src={this.state.imagePath} alt="certificate" onContextMenu={(e)=>{e.preventDefault()}}></img>
                    </div>
                </div>
            </div>
        );
    }
};

export default Competition;