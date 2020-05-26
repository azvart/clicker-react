import React from 'react';
import { Button,  Row, Divider } from 'antd';

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
        this.setState(state => ({count: state.count - 1}));
    }



    render(){
        return(<>
            <div className='view'>
                <Divider>
                <Row>
                    <Divider>
                        <span> {this.state.count}</span>
                    </Divider>
                </Row>
                <Button type="primary" onClick={this.plus}>+</Button>
                <Button type="primary"  onClick = {this.reset}>Reset</Button>
                <Button type="primary" danger onClick = {this.minus}>-</Button>
                </Divider>
            </div>
            </>
        )
    }
}



export default View;