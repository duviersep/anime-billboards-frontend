import React, { Component } from 'react';
import './App.css';
import './styles/Navigation.css';
import Navigation from './components/Navigation.js';
import Billboards from './components/Billboards.js';
import dataJSON from './billboards';
//import getBillboards from './helpers/getBillboards';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      billboards : dataJSON.response,
      navInfo : {
                 title: 'Carteleras Anime',
                 login: 'Login',
                 button: 'Nuevo'
                }
    };
  }

  render(){
    return (
      <div className='App'>
        <Navigation
          title={this.state.navInfo.title}
          nBillboards={this.state.billboards.length}
          button={this.state.navInfo.button}
        />
  
        <div className='container'>
          <div className='row mt-4'>
            <Billboards
              className='App-billboard'
              billboards={this.state.billboards}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
