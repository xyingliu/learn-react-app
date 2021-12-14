import React, { useEffect, useState } from 'react'

const HookPage = (props) => {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        document.title = `点击了${count}次`
        console.log('点击次数');
    }, [count])

    useEffect(() => {
        console.log('date effect')
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])


    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                console.log('点击按钮');
                return setCount(count + 1)
            }}>按钮</button>

            <p>{date.toLocaleTimeString()}</p>


            <div>
                <WeatherComp count={count}></WeatherComp>
                {/* <p><button onClick={getWeather}>点击获取今天天气</button></p> */}
            </div>
        </div>
    )

}

function WeatherComp(props) {

    useEffect(() => {
        console.log(props.count);
    }, [props.count])

    return (
        <div>天气{props?.count}</div>
    )

}
export default HookPage;
