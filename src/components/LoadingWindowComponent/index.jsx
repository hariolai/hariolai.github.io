import React, {Component} from 'react';
import './LoadingWindowComponent.css';

class LoadingWindowComponent extends Component {
    state = {
        transition : true,
        loadingBar : [
            ['O','O','O','O','O','O','O','O','O','O','O','O'],
            ['O',' ',' ','_',' ',' ',' ',' ','_',' ',' ','O'],
            ['O',' ','|',' ','|',' ',' ','|',' ','|',' ','O'],
            ['O',' ','|',' ','|',' ',' ','|',' ','|',' ','O'],
            ['O',' ','|',' ','|','_','_','|',' ','|',' ','O'],
            ['O',' ','|',' ',' ',' ',' ',' ',' ','|',' ','O'],
            ['O',' ','|',' ',' ','_','_',' ',' ','|',' ','O'],
            ['O',' ','|',' ','|',' ',' ','|',' ','|',' ','O'],
            ['O',' ','|',' ','|',' ',' ','|',' ','|',' ','O'],
            ['O',' ','|','_','|',' ',' ','|','_','|',' ','O'],
            ['O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','O'],
            ['O','O','O','O','O','O','O','O','O','O','O','O']
        ]
    }
    timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }
    componentDidMount(){
        let i = 0;
        const itv = setInterval( ()=>{
            if(i === 8){
                clearInterval(itv);
            }
            this.displayLoadingBar();
            i++;
        }, 900);
    }
    displayLoadingBar = async () => {
        var r1 = 0, c1 = 0, r2 = 11, c2 = 11, i, j;
        if(this.state.transition){
            for(i = c1; i <= c2; i++){
                await this.timeout(100);
                const newData = [...this.state.loadingBar];
                newData[r1][i] = "~";
                this.setState({
                    loadingBar: newData
                })
            }
            for(j = r1+1; j <= r2; j++){
                await this.timeout(100)
                const newData = [...this.state.loadingBar];
                newData[j][c2] = "~";
                this.setState({
                    loadingBar: newData
                })
            }
            for(i = c2-1; i >= c1; i--){
                await this.timeout(100)
                const newData = [...this.state.loadingBar];
                newData[r2][i] = "~";
                this.setState({
                    loadingBar: newData
                })
            }
            for(j = r2-1; j > r1; j--){
                await this.timeout(100);
                const newData = [...this.state.loadingBar];
                newData[j][c1] = "~";
                this.setState({
                    loadingBar: newData
                })
            }
            this.setState({
                transition: false
            })
        }
        else {
            for(i = c1; i <= c2; i++){
                await this.timeout(100);
                const newData = [...this.state.loadingBar];
                newData[r1][i] = "O";
                this.setState({
                    loadingBar: newData
                })
            }
            for(j = r1+1; j <= r2; j++){
                await this.timeout(100);
                const newData = [...this.state.loadingBar];
                newData[j][c2] = "O";
                this.setState({
                    loadingBar: newData
                })
            }
            for(i = c2-1; i >= c1; i--){
                await this.timeout(100);
                const newData = [...this.state.loadingBar];
                newData[r2][i] = "O";
                this.setState({
                    loadingBar: newData
                })
            }
            for(j = r2-1; j > r1; j--){
                await this.timeout(100);
                const newData = [...this.state.loadingBar];
                newData[j][c1] = "O";
                this.setState({
                    loadingBar: newData
                })
            }
            this.setState({
                transition: true
            })
        }
        
    }

    render() {
        let items = [];
        for (var i = 0; i < 12; i++) {
            for(var j = 0; j < 12; j++){
                if(this.state.loadingBar[i][j] === ' '){
                    items.push(<span>&nbsp; </span>);
                } else if(this.state.loadingBar[i][j] === '|' || this.state.loadingBar[i][j] === '_') {
                    items.push(<span class="h">{this.state.loadingBar[i][j]} </span>);
                } else {
                    items.push(<span>{this.state.loadingBar[i][j]} </span>);
                }
            }
            items.push(<br/>);
        }
        return <div style={{display: this.props.display}} id="loading-bar">{items}<br/></div>;
    }
}

export default LoadingWindowComponent;