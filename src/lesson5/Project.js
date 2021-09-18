
import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        console.log("This is constructor")

        this.state = {
        }

    }

    compnentDidMount() {
        console.log('THis is componentDidMount')
    }

    render() {
        console.log('This is render')
        return(
            <>
                
            </>
        );
    };
}

export default Project;