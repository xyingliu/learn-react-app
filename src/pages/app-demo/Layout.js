/*
 * @Description: 
 * @Date: 2021-12-07 16:55:50
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 15:12:16
 */
import React, { Component } from 'react';
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUnmount() {
        console.log('组件卸载');
    }
    render() {
        return (
            <div> this.state.i % 3 === 0 is true</div>
        );
    }
}

export default Layout;