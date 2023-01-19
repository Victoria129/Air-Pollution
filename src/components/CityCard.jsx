import { useNavigate } from "react-router-dom";


const CityCard = () => {
  let navigate = useNavigate();
  const handleNavigation = (city) => {
    navigate(`${city}`)
  }
  return (
    <>
    <h1>City Name</h1>
    <h2>Country</h2>
    <button className='view-polution-btn' onClick={() => handleNavigation('city')}>
    view polution
    </button>
    </>
  )
}

export default CityCard;
