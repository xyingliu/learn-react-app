/*
 * @Description: setState的使用
 * @Date: 2021-12-06 16:12:05
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-07 14:40:45
 */
import { Component } from 'react'
const showList = [
    {
        index: 0,
        name: '谁是宝藏歌手',
        description: '歌唱类节目'
    },
    {
        index: 1,
        name: '天天向上',
        description: '搞笑类节目'
    },
    {
        index: 2,
        name: '歌手',
        description: '竞技类节目'
    }
]

export default class setStatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showList: showList,
            current: 0,
            currentShow: showList[0],
            newValue: '',
            newDescription: ''
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    checkoutState = () => {

        this.setState(state => {
            console.log(state);
            const current = state.current === 2 ? 0 : state.current + 1
            return {
                current,
                currentShow: showList[current]
            };
        });

        console.log('切换了节目了=====>', this.state.current, this.state.currentShow);
    }

    addShow = () => {
        const addMap = {
            name: this.state.newValue,
            description: this.state.newDescription
        }
        this.setState({
            showList: [...this.state.showList, addMap]
        }, (call) => {
            console.log('回调里什么都没有======》', call);
            console.log('增加结果======》', this.state.showList);
        })
    }

    handleChange(key, event) {
        this.setState({ [key]: event.target.value });
    }
    handleChange2(event) {
        this.setState({ newDescription: event.target.value });
    }

    render() {
        return (
            <div>
                <button onClick={this.checkoutState}>切换节目</button>
                <div>
                    {/* 名称:<input type="text" onChange={this.handleChange} value={this.state.newValue} />
                    描述:<input type="text" onChange={this.handleChange2} value={this.state.newDescription} /> */}
                    名称:<input type="text" onChange={(e) => this.handleChange('newValue', e)} value={this.state.newValue} />
                    描述:<input type="text" onChange={(e) => this.handleChange('newDescription', e)} value={this.state.newDescription} />
                    <button onClick={this.addShow}>增加节目</button>
                </div>
                <ul>
                    {
                        this.state.showList.map((item, index) => <li key={index}>
                            名称: {item.name}
                            描述: {item.description}
                        </li>)
                    }

                </ul>
            </div>

        )
    }
}