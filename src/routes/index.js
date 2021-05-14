import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../view/page/HomePage'

class Routes extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes