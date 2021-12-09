/*
 * @Description: 
 * @Date: 2021-12-08 17:36:27
 * @LastEditors: 刘晓莹
 * @LastEditTime: 2021-12-09 10:04:56
 */

import React from 'react';
function TitleFunction(props) {
    return (
        <div>
            <span>{props.color}</span>
            <span>{props.level}</span>
            {props.children}
        </div>
    );
}

export default TitleFunction;