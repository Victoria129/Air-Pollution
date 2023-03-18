import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CityCard = ({name,continent,flag,lat,lon}) => {
  let dispatch = useDispatch()
  let navigate = useNavigate();


  const handleNavigation = (city) => {
    // dispatch(fetchPollutionData({lat,lon}))
    navigate(`${city}`,{state:{name,continent,lat,lon}})
  }
  return (
    <div className='city-card'>
    <h1>{name}</h1>
    <h2>{continent}</h2>
    <img src={flag} alt="country-flag" />
    <button className='view-polution-btn' onClick={() => handleNavigation('city')}>
    view polution
    </button>
    </div>
  )
}



export default CityCard;
