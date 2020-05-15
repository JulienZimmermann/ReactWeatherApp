import React from 'react';
import Rain from './Rain';

function Thunderstorm(){
    return(
            <div className="sky_weather sky_thunderstorm">
                <div className="thunderstorm"></div>
                <Rain />
            </div>
    )
}

export default Thunderstorm