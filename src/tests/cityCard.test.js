import { render } from '@testing-library/react';
import React from 'react';
import { CityCard } from './utils';

const fakeData = {
  name: 'name', continent: 'continent', flag: 'flag', lat: 'lat', lon: 'lon',
};

test('should render CityCard', () => {
  render(<CityCard props={fakeData} />);
});
