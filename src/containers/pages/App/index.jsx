import React, {Component, Fragment} from 'react';
import LoadingWindowComponent from './../../../components/LoadingWindowComponent';
import Home from './../Home';
import About from './../About';
import Experience from './../Experience';
import Education from './../Education';
import Project from './../Project';
import Competition from './../Competition';
import Skill from './../Skill';
import Footer from './../Footer';
import GenericNotFound from './../GenericNotFound';

class App extends Component{

    state = {
        display : 'inline-block',
        mainDisplay: 'none',
        // mainDisplay: 'block',
        errorDisplay: 'none'
    }
    componentDidMount(){
        let path = window.location.pathname;
        if(path === '/'){
            let i = 0;
            const itv = setInterval( ()=>{
                if(i === 12){
                    clearInterval(itv);
                    this.setState({
                        display: 'none',
                        mainDisplay: 'block',
                        errorDisplay: 'none'
                    })
                }
                i++;
            }, 900);
        } else {
            this.setState({
                display: 'none',
                mainDisplay: 'none',
                errorDisplay: 'block'
            })
        }
    }
    render() {
        return (
            <Fragment>
                <LoadingWindowComponent display={this.state.display}/>
                <div style={{display: this.state.mainDisplay}}>
                    <Home/>
                    <About/>
                    <Experience/>
                    <Education/>
                    <Project/>
                    <Competition/>
                    <Skill/>
                    <Footer/>
                </div>
                <div style={{display: this.state.errorDisplay}}>
                    <GenericNotFound/>
                </div>
                
            </Fragment>
        )
    }
}

export default App;