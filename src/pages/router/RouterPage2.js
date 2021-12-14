/*
 * @Description: 
 * @Date: 2021-12-13 11:13:38
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-13 16:26:13
 */
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
// import { hashHistory } from 'react-router';
export default class ReactRoutePage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="/">首页</Link>
                    <Link to="/user">个人中心</Link>
                    <Link to="/settings">设置
                    </Link>

                    {this.props.children}
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/user" element={<UserPage />} />
                        <Route path="/settings" element={<Settings />}>
                            <Route path=":type" element={<Setting />} />
                        </Route>
                        <Route path="*" element={
                            <main style={{ padding: "1rem" }}>
                                <p>没有这个页面</p>
                            </main>
                        }/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>个人中心详情
                {this.props.children}
            </div>
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

function Settings() {
    const params = useParams();
    console.log('设置', params,);
    const list = [1, 2, 3]
    return (
        <div>
            <h1>设置params:  {params.type}</h1>
            {
                list.map((item, index) => {
                    return (
                        <Link
                            style={{ display: "block", margin: "1rem 0" }}
                            to={`/Settings/${item}`}
                            key={index + item}
                        >
                            当前index：{index} {item}
                        </Link>
                    )
                })
            }

        </div>
    )
}



function Setting() {
    const params = useParams();
    console.log('设置', params,);
    return (
        <div>
            <h1>密码</h1>
            <p>{params.type}</p>
        </div>
    )
}