/*
 * @Description: 
 * @Date: 2021-12-08 17:36:27
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-08 18:01:13
 */
import React, { Component } from 'react';
class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <span>{this.props.color}</span>
                <span>{this.props.level}</span>
                {this.props.children}
            </div>
        );
    }
}

export default Title;