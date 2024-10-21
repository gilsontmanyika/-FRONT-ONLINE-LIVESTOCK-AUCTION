import React from 'react';
import {Route, RouterProvider, Routes} from 'react-router-dom';
import './App.css'
import router from './routes/router';

//importing all components into this main App component
import Layout from  "./Components/Layout/Layout";
import Auctions from './pages/Auctions';


const App = () => {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App