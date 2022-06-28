import React, { Component } from 'react';
import SingleAnime from './SingleAnime';
//import PropTypes from 'prop-types';

class Billboards extends Component {

  constructor(props){
    super(props);
    this.state={
      billboards : this.props.billboards
    }
  }
  render(){
    return (
      this.state.billboards.map(currentAnime => 
        <SingleAnime
        key={currentAnime.id}
        anime={currentAnime}/>
        )
    )
  }
}

export default Billboards;