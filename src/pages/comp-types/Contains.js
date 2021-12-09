/*
 * @Description: 
 * @Date: 2021-12-08 17:33:00
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-08 17:55:38
 */
import React, { Component } from 'react';
import Title from './Title'
import TitleFunction from './TitleFunction'

class Contains extends Component {
    constructor(props) {
        super(props);
        this.state = { props }
    }
    render() {
        return (
            <div>
                <Title color="#ff9125" level="class方法组合使用">
                    <p>请求相信我吧</p>
                </Title>
                <TitleFunction color="red" title="函数方法组合使用">
                    <p>直接使用props接收</p>
                </TitleFunction>
            </div>

        );
    }
}

export default Contains;