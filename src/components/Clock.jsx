import React, { useState, useEffect } from 'react';


function Clock(){


    let [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        let intervalID = setInterval(
            () => currentTime(),
            1000
        )
        return () => {
            clearInterval(intervalID)
        }
    })

    function currentTime(){
        setTime(new Date().toLocaleString())
    }
    return(
        <p>{time}</p>
    )
}

export default Clock;