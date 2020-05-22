import React, { useState, useEffect } from 'react';


function Clock(){


    let [time, setTime] = useState(new Date().toLocaleTimeString())


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
        setTime(new Date().toLocaleTimeString())
    }

    return(

        <div className="time_container">
            <p>{time}</p> 
        </div>
    )
}

export default Clock;