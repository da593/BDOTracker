import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.css';
import './styles/wrappers.css';
import './styles/style.css';
import Home from './pages/Home';
import PearlMarket from './pages/PearlMarket';
import ImperialCooking from './pages/ImperialCooking';
import ImperialAlchemy from './pages/ImperialAlchemy';
import Farming from './pages/Farming';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route> 
            {/*<Route exact path='/' element={<Home/>}></Route> */}
            <Route exact path='/pearlmarket' element={<PearlMarket/>}></Route> 
            <Route exact path='/cooking' element={<ImperialCooking/>}></Route> 
            <Route exact path='/alchemy' element={<ImperialAlchemy/>}></Route> 
            <Route exact path='/farming' element={<Farming/>}></Route> 
          </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



