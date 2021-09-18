
import React, { Component, useState, useEffect } from 'react';

class MiniTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolling: false
        }

    }

    render() {

        const scrollEffect = (event) => {

            console.log(event)
            console.log(event.target)

        }

        return (

            <>

                <div className="section vh-100"></div>
            </>

        )
    }
}

export default MiniTodo;