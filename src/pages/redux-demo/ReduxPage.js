/*
 * @Description: 
 * @Date: 2021-12-09 16:00:23
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 16:12:22
 */
import React, { Component } from 'react';
import store from './../../store/ReduxStore';

class ReduxPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = () => {
        store.subscribe(() => {
            console.log('subscribe');
            this.forceUpdate()
        })
    }

    add = () => {
        store.dispatch({ type: 'ADD' })
    }

    minus = () => {
        store.dispatch({ type: 'MINUS' })
    }

    render() {
        return (
            <div>
               结果值: {store.getState()}

                <button onClick={this.add}>增加</button>

                <button onClick={this.minus}>减少</button>

            </div>
        );
    }
}

export default ReduxPage;