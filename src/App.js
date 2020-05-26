import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Element from './components/Element'
import Background from './components/Background'
import Clock from './components/Clock';
import Simulation from './components/Simulation';

function App() {


  let[city, setCity] = useState('') //Input City value
  let[country, setCountry] = useState('none') //Selecty country value
  let [query, setQuery] = useState('') //Query
  let [weather, setWeather] = useState('') // Weather Main
  let [code, setCode] = useState('q') // ZIP or CODE
  let[responseQuery, setResponseQuery] = useState([])
  let [disabled, setDisabled] = useState(true) 
  let[noCity, setNoCity] = useState(false) //ERROR CITY SEARCH
  let[errorAPI, setErrorAPI] = useState(false) // ERROR CALL API
  let[choiseWeatherSimulation, setChoiseWeatherSimulation] = useState('') //CHOISE WEATHER SIMULATION


  useEffect(()=>{

    if(query.length > 0){
      getRequest()
    } 

    return  function cleanup(){
          setCity('')
          setCountry('none')
          setDisabled(true)
          setResponseQuery([])
          setNoCity(false)
    }
  },[query])

  //Update code: ZIP or Q
  function getCode(codeMethod){
    
    if(codeMethod.length === 5 && (`${Number.parseInt(codeMethod)}` === codeMethod) ){
      code = "zip"
      setCode(code)

    }else{
      code = "q"
      setCode(code)
    }
  }

  async function getRequest(){

    getCode(query)

    try {
      
      
      let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?${code}=${query},${country}&appid=09290ade0b004a4b2b1d695dec899458&lang=fr&units=metric`)
      
      if(request.ok){
        let data = await request.json()
        
        //Update query array
        setResponseQuery(data)

        //Rain, Clear, Thunderstorm, Clouds
        setWeather(data.weather[0].main);
        
      }else{
        setNoCity(true)
      }
      
          
    } catch (error) {
      setErrorAPI(true)
      console.error(error)
    }
    
  }

  //Update query with submit form
  function updateQuery(e){
    e.preventDefault()
    setQuery(city)
    setCountry(country)
  }

  //Update city value with input text
  function updateCity(e){
    city = e.target.value
    setCity(city)
  }

  //Update country with select form
  function updateCountry(e){
    country = e.target.value
    setCountry(country)

    country !== 'none' && setDisabled(false)
    console.log(country);
  }

  function weatherSimulation(e){
    choiseWeatherSimulation = e.target.value;
    setChoiseWeatherSimulation(choiseWeatherSimulation)
    console.log(choiseWeatherSimulation);
       
}

  let timeHours =  new Date().getHours()

  return(
    <React.Fragment>
      <Background
        weather={weather}
        timeHours={timeHours}
        weatherSimulation={choiseWeatherSimulation}
      >
        <Clock />
        <Simulation 
          weatherSimulation={weatherSimulation}
        />
        <main className="main">
          <div className="container_main_big_title">
            <h1 className="main_big_title">Weather App</h1>
          </div>
          <Form 
            city={city}
            updateCity={updateCity}
            updateQuery={updateQuery}
            updateCountry={updateCountry}
            disabled={disabled}
            country={country}
          />

          <Element 
            query={query}
            responseQuery={responseQuery}
            noCity={noCity}
            errorAPI={errorAPI}
          />
        </main>
      </Background>
    </React.Fragment>
    
  )
}

export default App;
