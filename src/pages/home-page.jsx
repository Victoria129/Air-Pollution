import React, { useState } from "react";
import CityCard from "../components/CityCard";
import Pollution from "../components/Pollution";
import {useDispatch, useSelector} from 'react-redux'
import {selectAllCountries,changeContinent} from '../redux/countriesSlice'

const HomePage = () => {

  let dispatch = useDispatch()
const countriesArray = useSelector(selectAllCountries)
// console.log("All Countries", countriesArray)

const [continent, setContinent] = useState("All")

const handleContinentChange=(continent)=>{
  // console.log("Button clicked")
  // setContinent(continent)
  dispatch(changeContinent(continent))
}


return (
  <>

     <button onClick={()=>handleContinentChange("All")}>All</button>
     <button onClick={()=>handleContinentChange("Africa")}>Africa</button>
     <button onClick={()=>handleContinentChange("Asia")}>Asia</button>
     <button onClick={()=>handleContinentChange("Europe")}>Europe</button>
     <button onClick={()=>handleContinentChange("Oceania")}>Ocenia</button>
     <button onClick={()=>handleContinentChange("Americas")}>Americas</button>


  <div className="header">
  <h2>Air Pollution</h2>
  </div>

  <div className="container">
    {

   countriesArray.map((country)=>{
    // console.log(country)
  return  <CityCard   key={country.name} name={country.name} continent={country.continent} flag={country.flag} lat={country.lat} lon={country.lon}/>
})
    }
  </div>

  </>
)
}

export default HomePage;
