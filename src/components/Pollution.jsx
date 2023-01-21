import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPollutionData,selectPollutionData } from "../redux/pollutionSlice";
const Pollution = () => {
  
  let location = useLocation()
  let data = location.state
  // console.log("data", data)
  let navigate = useNavigate()
  const handleGoBackButton = ()=>{
    navigate(-1)
  }
  
  let pollutionData = useSelector(selectPollutionData(data.name))
  let dispatch = useDispatch()

  // dispatch(fetchPollutionData({lat:data.lat,lon:data.lon}))
  
  // console.log("In comp",pollutionData)

  useEffect(() => {
    if(!pollutionData){

      dispatch(fetchPollutionData({country:data.name,lat:data.lat,lon:data.lon}))
    }
  
   
  }, [data])
  

  return (
<>




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

<button onClick={handleGoBackButton}>Go Back</button>
</>
  )
}

export default Pollution;