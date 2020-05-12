import React from 'react';
import Cloud from '../svgElements/Cloud'

function Clouds(){

    return(
        <React.Fragment>
            <Cloud 
                className="cloud1 cloud"
            />

            <Cloud 
                transform="scale(1.4)"
                className="cloud2  cloud"
            />

            <Cloud 
                transform="scale(1.2)"
                className="cloud3  cloud"
            /> 

            <Cloud 
                transform="scale(1.6)"
                className="cloud4  cloud"
            /> 

            <Cloud 
                transform="scale(1.4)"
                className="cloud5  cloud"
            />  

            <Cloud 
                transform="scale(1.6)"
                className="cloud6  cloud"
            />
                </React.Fragment>
    )
}

export default Clouds