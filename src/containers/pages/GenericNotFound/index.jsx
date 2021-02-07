import React, {Component} from 'react';
import logo from '../../../assets/images/icon/logo.png';
import error from '../../../assets/images/error.jpg';
import './GenericNotFound.css';

class GenericNotFound extends Component {

    render(){
        return (
            <div className="wrapper">
                <div className="wrapper-left">
                    <img className="app-logo" src={logo} alt="app-logo" />
                    <div className="title">
                        <p className="error-text">That's an error.</p>
                        <p className="error-code">404 - Page Not Found</p>
                    </div>
                    <p className="error-text">The Requested URL was not found on this server.</p>
                </div>
                <div className="wrapper-right">
                    <img src={error} className="robot" alt="error-robot"/>
                </div>
            </div>
        )
    }
}

export default GenericNotFound;