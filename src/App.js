import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Element from './components/Element'
import Background from './components/Background'
import Clock from './components/Clock';

function App() {


  let[city, setCity] = useState('')
  let[country, setCountry] = useState('none')
  let [query, setQuery] = useState('')
  let [weather, setWeather] = useState('')
  let [code, setCode] = useState('q')
  let[responseQuery, setResponseQuery] = useState([])
  let [disabled, setDisabled] = useState(true) 
  let[noCity, setNoCity] = useState(false)
  let[errorAPI, setErrorAPI] = useState(false)


  useEffect(()=>{

    if(query.length > 0 && country !== 'none'){
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
    console.log("mis à jour de query")
  }

  //Update city value with input text
  function updateCity(e){
    city = e.target.value
    setCity(city)

    if(city.length > 0){
      setDisabled(false)
    }
  }

  //Update country with select form
  function updateCountry(e){
    country = e.target.value
    setCountry(country)
    console.log(country);
    
  }

  let timeHours =  new Date().getHours()

  return(
    <React.Fragment>
      <Background
        weather={weather}
        timeHours={timeHours}
      >
        <Clock />
        <main className="main">
          <div className="container_main_big_title">
            <h1 className="main_big_title">Weather App</h1>
          </div>
          <Form 
            city={city}
            updateCity={updateCity}
            updateQuery={updateQuery}
            disabled={disabled}
            updateCountry={updateCountry}
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
