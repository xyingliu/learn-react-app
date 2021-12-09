/*
 * @Description: 
 * @Date: 2021-12-09 10:32:48
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 15:11:43
 */
import React, { Component } from 'react';
import Layout from './app-demo/Layout';
// import PropTypes from 'prop-types';
class LifCyclePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        const { count } = state;
        console.log('数值的值========>', count);
        // 可以对state中的数据进行监控,并在指定时刻更改这个数据
        return count < 5 ? null : { count: 0 }
    }

    componentDidMount() {
        console.log("componentDidMount", this.state.count);
    }
    componentWillUnmount() {
        //组件卸载之前
        console.log("componentWillUnmount", this.state.count);
    }
    /* UNSAFE_componentWillUpdate() {
     //不推荐，将会被废弃
     console.log("componentWillUpdate", this.state.count);
     } */
    componentDidUpdate() {
        console.log("componentDidUpdate", this.state.count);
    }

    addCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.addCounter}>点击增加</button>
                <span>{count}</span>
                {count % 3 === 0 ? <Layout /> : null}
            </div>
        );
    }
}

export default LifCyclePage;