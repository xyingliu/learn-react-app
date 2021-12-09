/*
 * @Description: 创建函数组件
    ** const [value, setValue] = useState(null)
    ** const [todoList, setTodoList] = useState(list)
    ** 修改值 setValue(event.target.value)
    ** 增加list项 ()=> setTodoList((pre) => [...pre, value])

 * @Date: 2021-12-07 11:05:13
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 16:31:56
 */
import React, { useState } from 'react';
import store from './../../store/ReduxStore';

function FunctionCreateComp() {
    // const todoList = ['保存起来', '记得锻炼']
    const list = []
    const [value, setValue] = useState(null)
    const [todoList, setTodoList] = useState(list)
    // useEffect(() => {
    //     console.log('修改value',value);
    // }, [value])

    return (
        <div>
            <p><input type="text" onChange={(event) => setValue(event.target.value)} /><button onClick={()=> setTodoList((pre) => [...pre, value])}>增加</button></p>
            <p>在修改的值: {value}</p>
            <ul>
                {
                    todoList?.map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>)

                }
            </ul>
            <p>store结果值: {store.getState()}</p>
        </div>
    );
}

export default FunctionCreateComp;