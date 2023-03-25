import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CityCard from '../components/CityCard';

const fakeData = {
  name: 'name', continent: 'continent', flag: 'flag', lat: 'lat', lon: 'lon',
};

test('should render CityCard', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<CityCard props={fakeData} />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  );
});
