import React from 'react';


class View extends React.Component{
    constructor(props){
        super(props);
   this.state = {count:0};
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
    }
    reset(){
        this.setState(state => ({count:0}));
    }
    plus(){
        this.setState(state => ({count: state.count + 1}));
    }
    minus(){
        this.setState(state =>({count: state.count -1}));
    }



    render(){
        return(
            <div className='view'>
                <span> {this.state.count}</span>
                <button onClick={this.plus}>+</button>
                <button onClick = {this.reset}>Reset</button>
                <button onClick = {this.minus} >-</button>
            </div>
        )
    }
}



export default View;