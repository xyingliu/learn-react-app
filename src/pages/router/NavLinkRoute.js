/*
 * @Description: 
 * @Date: 2021-12-13 16:13:55
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-13 16:30:28
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class NavLinkRoute extends Component {
    render() {
        const list = [1, 2, 3, 4, 5]
        return (
            <div>
                {
                    list.map((path, index) => {
                        return (
                            <NavLink to={path}>
                                <p>index==== {index}</p>
                                <p>path======== {path}</p>
                            </NavLink>
                        )
                    })
                }


            </div>
        );
    }
}

export default NavLinkRoute;