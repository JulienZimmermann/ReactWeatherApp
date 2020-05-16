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

    // function getHours(time){
    //     if(time >= 12 && time <= 17){
    //         return <p>Bonne après-midi</p>
    //     }else if(time >= 18 && time <= 22){
    //         return <p>Bonne soirée</p>
    //     }else if(time >= 23 && time >= 5){
    //         return <p>Bonne nuit</p>
    //     }else{
    //         return <p>Bonjour !! </p>
    //     }
    // }

    let timeHours =  new Date().getHours()

    return(

        <div className="clock">
            <p>{time}</p>
        </div>
    )
}

export default Clock;