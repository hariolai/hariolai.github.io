import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <div id="footerWrapper">
                <div id="footerContent">
                    <hr id="footerBorderLine"/>
                    <div id="footerContentText">
                        <p id="footerCopyRight">&#169;&nbsp;</p>
                        <p id="footerText">2021 by Hario Lai. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Footer;