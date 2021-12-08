import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.css';
import './styles/navbar.css';

import Header from './components/Header';
import Home from './pages/Home';
import PearlMarket from './pages/PearlMarket';
import ImperialCooking from './pages/ImperialCooking';
import ImperialAlchemy from './pages/ImperialAlchemy';
import Farming from './pages/Farming';
import ContentWrapper from './components/ContentWrapper';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
        <ContentWrapper>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route> 
            <Route exact path='/Home' element={<Home/>}></Route> 
            <Route exact path='/PearlMarket' element={<PearlMarket/>}></Route> 
            <Route exact path='/cooking' element={<ImperialCooking/>}></Route> 
            <Route exact path='/alchemy' element={<ImperialAlchemy/>}></Route> 
            <Route exact path='/Farming' element={<Farming/>}></Route> 
          </Routes>
        </ContentWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



