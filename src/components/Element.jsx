import React from 'react';
import Clock from './Clock';


function Element({results}){

    return(

        <React.Fragment>

            <div className="element_weather">

            <h1><Clock /></h1>

              {results.length === 0 ? 

                null

                :

                
                <div className="container_informations_weather">
                    
                    <h1 className="big_title_informations_weather">{results.name}</h1>
                    
                    <div className="container_text_informations_weather">
                        <p className="element_information_weather text_information_weather_description">Temps: {results.weather[0].description}</p>
                        <img className="element_information_weather image_information_weather" src ={`http://openweathermap.org/img/wn/${results.weather[0].icon}.png`} />
                        <p className="element_information_weather text_information_weather_temperature">Temérature: {Math.round(results.main.temp)}</p>
                        <p className="element_information_weather text_information_weather_temperature_min">Température min: {Math.round(results.main.temp_min)}</p>
                        <p className="element_information_weather text_information_weather_temperature_max">Température max: {Math.round(results.main.temp_max)}</p>
                        <p className="element_information_weather text_information_weather_wind">Vitesse du vent: {results.wind.speed} m/s</p>
                    </div>
                     
                </div>
               
                }       
            </div>  
        </React.Fragment>
        
    )
}

export default Element