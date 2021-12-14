/*
 * @Description: 
 * @Date: 2021-12-13 11:13:38
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-13 15:08:30
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { hashHistory } from 'react-router';
export default class ReactRoutePage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user/">个人中心</Link>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/user/" element={<UserPage />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>个人中心</div>
        );
    }
}



class HomePage extends Component {
    render() {
        return (
            <div>首页</div>
        );
    }
}


