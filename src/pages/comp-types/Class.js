/*
 * @Description: class组件的创建
 * @Date: 2021-12-07 11:05:27
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-07 14:44:44
 */

import React, { Component } from 'react';
class ClassCreateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: {
                cctv: '新冠最新情况'
            }
        }
    }
 
    getNews = () => {
        this.setState({
            news: {
                ...this.state.news,
                cctv2: '百家讲坛'
            }
        }, () => {
            console.log(
                '新闻情报:' + this.state.news?.cctv2
            );
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getNews}>获取新闻情况</button>
                <div>{this.state.news?.cctv2}</div>
                
            </div>
        );
    }
}

export default ClassCreateComp;