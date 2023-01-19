import React from "react";
import CityCard from "../components/CityCard";
import Pollution from "../components/Pollution";

const HomePage = () => {
return (
  <>
  <div className="header">
  <h2>Air Polution</h2>
  </div>

  <div className="container">
    <CityCard />
  </div>

  </>
)
}

export default HomePage;
