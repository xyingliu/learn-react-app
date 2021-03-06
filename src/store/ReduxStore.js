/*
 * @Description: 
 * @Date: 2021-12-09 15:56:55
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 16:21:46
 */
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default store