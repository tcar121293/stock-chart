import React, { Component } from 'react'
import { BrowserRouter as Router,
        Route,
        Switch
} from 'react-router-dom'

import Layout from './container/Layout'

export default class App extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Route exact path='/' component={Layout} />
                </Router>
            </div>
        )
    }
}