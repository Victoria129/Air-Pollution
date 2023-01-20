import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HomePage from './pages/home-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pollution from './components/Pollution';
import { Provider } from 'react-redux';
import store from './redux/store';

import {fetchAllCountries} from './redux/countriesSlice'

store.dispatch(fetchAllCountries())

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: ':city',
    element: <Pollution />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </>,
)
