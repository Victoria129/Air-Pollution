// import CityCard from "../components/CityCard";
import {CityCard} from './utils.jsx'
import { render, screen } from '@testing-library/react';
import React from "react";


let fakeData= { name:"name", continent:"continent", flag:"flag", lat:"lat", lon:"lon"}


test('should render CityCard', () => {
  render(<CityCard props={fakeData}/>);

});
