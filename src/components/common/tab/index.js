import React, { Component } from 'react'
import './index.scss'

export default class Tab extends Component {
 
    render() {
    console.log(this.props.tabF)
        return (
          <header>
    {this.props.tabF && <i className = "fas fa-angle-left"></i> }   
              <span>
                  猫眼电影
              </span>
          </header>
        )
    }
}
