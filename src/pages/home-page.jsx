import React from "react";
import CityCard from "../components/CityCard";
import Pollution from "../components/Pollution";
import {useSelector} from 'react-redux'
import {selectAllCountries} from '../redux/countriesSlice'



const HomePage = () => {

const countriesArray = useSelector(selectAllCountries)
// console.log("All Countries", countriesArray)
return (
  <>
  <div className="header">
  <h2>Air Pollution</h2>
  </div>

  <div className="container">
    {

   countriesArray.map((country)=>{
    console.log(country)
  return  <CityCard   key={country.name} name={country.name} continent={country.continent} flag={country.flag}/>
})
    }
  </div>

  </>
)
}

export default HomePage;
