import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMicrophone, faGear} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPollutionData,selectPollutionData } from "../redux/pollutionSlice";

const Pollution = () => {

  let location = useLocation()
  let data = location.state
  let navigate = useNavigate()
  const handleGoBackButton = ()=>{
    navigate(-1)
  }

  let pollutionData = useSelector(selectPollutionData(data.name))
  let dispatch = useDispatch()

  useEffect(() => {
    if(!pollutionData){

      dispatch(fetchPollutionData({country:data.name,lat:data.lat,lon:data.lon}))
    }


  }, [data])


  return (
<>
<div className = "pollution-card-header">
<FontAwesomeIcon className = "left-arrow-icon" onClick={handleGoBackButton} icon={faArrowLeft} size="1xs" />
<FontAwesomeIcon className = "microphone-icon" icon={faMicrophone} size="1xs" />
<FontAwesomeIcon className = "gear-icon" icon={faGear} size="1xs" />
</div>
<div className="pollution-card">
<div className="pollution-details">
  <h1>{data.name}</h1>
  <h2>Pollution Data</h2>
  <p>Air Pollutants</p>
  <p>no : {pollutionData?.no}</p>
  <p>co : {pollutionData?.co}</p>
  <p>no2 : {pollutionData?.no2}</p>
  <br />
  <p>Air Quality:  {pollutionData?.stringQuality}</p>
</div>
</div>
</>
  )
}



export default Pollution;
