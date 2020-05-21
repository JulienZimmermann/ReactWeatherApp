import React from 'react';


function Element({responseQuery, noCity, errorAPI}){

    return(

        <React.Fragment>

            <div className="element_weather">

                {
                    noCity === true &&

                    <div className="error_message nocity_message">
                        <h1>Ville Inconnu</h1>
                    </div>
                }

                {
                    errorAPI === true && 

                    <div className="error_message errorAPI_message">
                        <h1>Nous rencontrons une erreur technique</h1>
                    </div>
                }
                
                
              {responseQuery.length === 0 ? 

                null

                :

                
                <div className="container_informations_weather">
                    
                    <h1 className="big_title_informations_weather">{responseQuery.name}</h1>
                    
                    <div className="container_text_informations_weather">
                        <p className="element_information_weather text_information_weather_description">Temps: {responseQuery.weather[0].description}</p>
                        <img className="element_information_weather image_information_weather" src ={`http://openweathermap.org/img/wn/${responseQuery.weather[0].icon}.png`} />
                        <p className="element_information_weather text_information_weather_temperature">Temérature: {Math.round(responseQuery.main.temp)}</p>
                        <p className="element_information_weather text_information_weather_temperature_min">Température min: {Math.round(responseQuery.main.temp_min)}</p>
                        <p className="element_information_weather text_information_weather_temperature_max">Température max: {Math.round(responseQuery.main.temp_max)}</p>
                        <p className="element_information_weather text_information_weather_wind">Vitesse du vent: {responseQuery.wind.speed} m/s</p>
                    </div>
                     
                </div>
               
                }       
            </div>  
        </React.Fragment>
        
    )
}

export default Element