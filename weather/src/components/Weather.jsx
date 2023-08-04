import React from 'react'
const api_key = "f239f1ad70b1459f9e8141247230408"
const Location = 'Paris'
const api_url =  `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${Location}`
async function getApi(url){
  const response = await fetch(url)
  var data = await response.json();
  console.log(data)

}

getApi(api_url)


function Weather() {
  return (
    <div>
        <label htmlFor="PlaceInput">Place: </label>
        <input type="text" id='PlaceInput' name='PlaceInput'/>
        <input type="submit" />
    </div>
  )
}

export default Weather