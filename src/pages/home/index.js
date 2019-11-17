import React, { Component } from 'react'
import './index.scss'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import Hot from './Hot'
import Coming from './Coming'


export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <Route path="/home/hot" component={Hot} />
                <Route path="/home/coming" component={Coming} />
            </div>
        )
    }
}
