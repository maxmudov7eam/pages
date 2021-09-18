import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page from './Page'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Page} />
                </Switch>
            </BrowserRouter>


        </>
    )
}

export default Router
