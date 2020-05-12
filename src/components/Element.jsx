import React, {useState, useEffect} from 'react';
import Clock from './Clock';


function Element({results}){

    // function weatherCondition(description){

    //     switch(description){
    //         case 'Thunderstorm':
    //          console.log("11d")
    //          break;
        
    //         case 'Drizzle':
    //             console.log("09d")
    //             break;

    //         case 'Rain':
    //             console.log("10d")
    //             break;

    //         case 'Snow':
    //             console.log("13d")
    //             break;

    //         case 'Clear':
    //             console.log("01d")
    //             break;

    //         case 'Clouds':
    //             console.log("02d")
    //             break;

    //         default:
    //             console.log("default")      
    //     }

    // }

    return(

        
        <React.Fragment>
            <div className="element_weather">

              {results.length === 0 ? 

                null

                :

                <div className="container_informations_weather">
                   
                    <h1 className="big_title_informations_weather">{results.name}</h1>
           
                    <Clock />
                    <div className="container_text_informations_weather">
                    {results.weather[0].main}
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