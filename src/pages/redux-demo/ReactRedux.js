/*
 * @Description: 
 * @Date: 2021-12-09 17:28:58
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 17:49:24
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReactRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { num, add, minus } = this.props
        return (
            <div>
                <h1>ReactReduxPage</h1>
                <p>{num}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        num: state
    }
}
const mapDispatchToProps = {
    add: () => {
        return { type: 'ADD' }
    },
    minus: () => {
        return { type: 'MINUS' }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactRedux);