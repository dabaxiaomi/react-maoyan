import React from 'react'

import './index.scss'


import { NavLink } from 'react-router-dom'
const TabBar = props => {
    const Navs = [
        {
            id: 1,
            iconName: 'fa-home',
            path: '/home',
            text: '电影'
        },
        {

            id: 2,
            iconName: 'fa-gifts',
            path: '/cinema',
            text: '影院'
        },

        {
            id: 3,
            iconName: 'fa-user-secret',
            path: '/mine',
            text: '我的'
        }
    ]
    function footerNav() {
        return (
            Navs.map(

                val =>
                
                    <li key={val.id}>
                        <NavLink to={val.path}
                            activeClassName='active'
                        >
                            <i className={'fas ' + val.iconName}></i>
                            <span>{val.text}</span>
                        </NavLink>

                    </li>

            )
        )
    }
    return (
        <footer>
            <ul>
             
                    {footerNav()}
               
            </ul>
        </footer>
    )

}
export default TabBar