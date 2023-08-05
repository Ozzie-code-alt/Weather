import React, { useState } from 'react'





function Weather() {
  const[global, setglobal] = useState(null) // set Default value to null, can be changed to object  ask GPT how these works
  const [value, setValue] = useState('')
  const [days, setDays] = useState('')

  const handleInputChange = async (event) => {
    event.preventDefault()
    const api_key = "f239f1ad70b1459f9e8141247230408"
    const Location = value
    const Days = days
    const api_url =  `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${Location}&days=${days}`
    console.log(Days)

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

  return (
    <div>
      <form onSubmit={handleInputChange}>
        <label htmlFor="PlaceInput">Place: </label>
        <input type="text" name='PlaceInput'  onChange={(e) => setValue(e.target.value)}/> {/* we then get our input from txtboxes*/}
        <label htmlFor="Days">days: </label>
        <input type="text" name='Days' onChange={(e) =>setDays(e.target.value)} />
        <input type="submit" />
        </form>
      
      {global && (// if global is true then ? ask GPT how this works
        <div> 
          <p> {global.location.lat}</p> {/* access global state here and add to DOM*/}
        </div>
      )}

    </div>


  )
}

export default Weather