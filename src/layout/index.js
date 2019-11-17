import React, { Component } from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from '../pages/home'
import Cinema from '../pages/cinema'
import Mine from '../pages/mine'
import Error from '../pages/error'


export default class LayOut extends Component {
    constructor() {
        super()
        this.state = {
            tabF: true
        }
    }
    render() {
        return (
            <div className="layout">
                <Tab tabF={this.state.tabF}></Tab>
                <Switch>
                    <Redirect from="/" to="/home" exact></Redirect>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/cinema" component={Cinema} />
                    <Route path = "/mine" component={Mine}/>
                    <Route component={Error}/>
                </Switch>
                <TabBar></TabBar>

            </div>
        )
    }
}

