import React, {useState} from 'react';

function Simulation({weatherSimulation}){

    let [hidden, setHidden] = useState(true)

    function changeClasses(){
        setHidden(!hidden)
    }

    function getBadgeClasses(){
        let classes = "container_simulation "
        return hidden ? classes += ' simulation_hidden' : classes += 'simulation_visible';
    }

    // function weatherSimulation(e){
     
    //     console.log(e.target.value);   
    // }

    return(
        <div className={getBadgeClasses()} >
            <div onClick={changeClasses} className="option">
                <span className="option_sign">{hidden ? '+' : '-'}</span>
            </div>
            <div className="option_simulation">
                <h2 className="title_option_simulation">Simulation météo</h2>
                <button onClick={weatherSimulation} value="Thunderstorm" className="item_option_simulation">Orage</button>
                <button onClick={weatherSimulation} value="Rain" className="item_option_simulation">Pluie</button>
                <button onClick={weatherSimulation} value="Clouds" className="item_option_simulation">Couvert</button>
                <button onClick={weatherSimulation} value="Clear" className="item_option_simulation">Ciel dégagé</button>  
            </div>
        </div>
    )
}

export default Simulation;