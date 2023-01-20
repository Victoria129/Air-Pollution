import { useNavigate } from "react-router-dom";


const CityCard = ({name,continent,flag}) => {
  let navigate = useNavigate();
  const handleNavigation = (city) => {
    navigate(`${city}`)
  }
  return (
    <>

    <h1>{name}</h1>
    <h2>{continent}</h2>
    <img src={flag} style={{width:'150px',height:'150px'}} alt="" />
    <button className='view-polution-btn' onClick={() => handleNavigation('city')}>
    view polution
    </button>
    </>
  )
}

export default CityCard;
