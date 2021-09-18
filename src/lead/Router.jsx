import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Page from './Page';
import { ClimbingBoxLoader } from 'react-spinners';

const Router = () => {

    const [isLoading, setIsLoading] = useState(true);


    window.addEventListener('load', () => {
        setIsLoading(false)
    })

    return (
        <>

        <BrowserRouter>
                {isLoading ?
                <div className="loader position-fixed">
                    <ClimbingBoxLoader color='white'  loading={isLoading} />
                </div> : ''}
            <Switch>
                <Route path='/' exact component={Page} />
            </Switch>
        </BrowserRouter>
            
        </>
    )
}

export default Router
