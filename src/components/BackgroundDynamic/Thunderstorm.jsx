import React from 'react';
import Rain from './Rain';

function Thunderstorm(){
    return(
        <React.Fragment>
            <div className="thunderstorm"></div>
            <Rain />
        </React.Fragment>
    )
}

export default Thunderstorm