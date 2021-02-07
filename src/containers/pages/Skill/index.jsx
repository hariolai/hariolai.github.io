import React, {Component} from 'react';
import data from './../../../components/data/data.json';
import './Skill.css';

class Skill extends Component{
    render(){
        let items = [];
        for(var i = 0; i < data.skill.length; i++){
            const image = require('./../../../assets/images/icon/' + data.skill[i].icon).default;
            items.push(
                <div class="columnSkill">
                    <img class="skillImage" src={image} alt={data.skill[i].icon} onContextMenu={(e)=>{e.preventDefault()}}></img>
                    <h2 class="skillTitle">{data.skill[i].name}</h2>
                </div>
            );
        }
        return(
            <div id="skillWrapper">
                <h1 id="skillHeader">Skill</h1>
                <div class="rowSkill">
                    {items}
                </div>
            </div>
        )
    }
};

export default Skill;