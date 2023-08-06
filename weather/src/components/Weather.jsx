import React, { useState } from 'react'
import './styles/weather.css'
import DataVisualized from './DataVisualized';



function Weather() {
  const[global, setglobal] = useState(null) // set Default value to null, can be changed to object  ask GPT how these works
  const [value, setValue] = useState('')
  const [days, setDays] = useState('')

  const handleInputChange = async (event) => {
    event.preventDefault()
    const api_key = "f239f1ad70b1459f9e8141247230408"
    const api_url =  `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${value}&days=${days + 1}`
    const globalData = await getApi(api_url)
    setglobal(globalData) // seperate callback function for global access of API
    getApi(api_url)
  };

async function getApi(url){
  const response = await fetch(url) // we await since it returns a PROMISE 
  var data = await response.json();
  console.log(data)
 return data
}


// api variables :


  return (
    <div className='weather-main-container'>

      <form onSubmit={handleInputChange} className='weather-inputs'>
        <label htmlFor="PlaceInput">Place: </label>
        <input type="text" name='PlaceInput'  onChange={(e) => setValue(e.target.value)} required/> {/* we then get our input from txtboxes*/}
        <label htmlFor="Days">days: </label>
        <input type="text" name='Days' onChange={(e) =>setDays(e.target.value)} required/>
        <input type="submit" />
        

        </form>
      
      {global && (// if global is true then ? ask GPT how this works

<div className='data-container'>
<p> date now: {global.location.localtime}</p>
<p>
  max temp: {days} days from now {global.forecast.forecastday[days].day.maxtemp_c}
</p>
<p>
  sunrise: {days} days from now {global.forecast.forecastday[days].astro.sunrise}
</p>
<p>
  sunset: {days} days from now {global.forecast.forecastday[days].astro.sunset}
</p>
<p>
  date: {days} days from now {global.forecast.forecastday[days].date}
</p>
<DataVisualized forecast={global.forecast} />
</div>

      )}





    </div>


  )
}

export default Weather