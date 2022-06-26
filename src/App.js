import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/Navigation.css';
import Navigation from './components/Navigation.js';
import Billboards from './components/Billboards.js';
import LoginForm from './components/LoginForm';
import dataJSON from './billboards';
//import getBillboards from './helpers/getBillboards';

const App = () => {

  const [billboards, setBillboards] = useState([]);
  const [navInfo, setNavInfo] = useState({
    title: 'Carteleras Anime',
    login: 'Login',
    button: 'Nuevo'
  });

  useEffect(() => {
    setBillboards(dataJSON.response);
  })

  return (
    <div className='App'>
      <Navigation
        title={navInfo.title}
        nBillboards={billboards.length}
        button={navInfo.button}
      />

      <div className='container'>
        <div className='row mt-4'>
          <Billboards
            className='App-billboard'
            billboards={billboards}
          />
        </div>
      </div>
    </div >
  );
}

export default App;
