import React, { useState } from 'react'





function Weather() {
  const [value, setValue] = useState('')
  const handleInputChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  
const api_key = "f239f1ad70b1459f9e8141247230408"
const Location = value

const api_url =  `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${Location}`
async function getApi(url){
  const response = await fetch(url)
  var data = await response.json();
  console.log(data)

}

getApi(api_url)

  return (
    <div>
        <label htmlFor="PlaceInput">Place: </label>
        <input type="text" value={value} name='PlaceInput' onChange={handleInputChange}/>
        <input type="submit" />
        <p>{value}</p>
    </div>
  )
}

export default Weather