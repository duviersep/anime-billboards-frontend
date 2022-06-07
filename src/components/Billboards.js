import React, { useState, useEffect } from 'react';
import SingleAnime from './SingleAnime';
//import PropTypes from 'prop-types';

const Billboards = ({ billboards }) => {

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setAnimes(billboards);
  })

  return (
    animes.map(currentAnime => 
      <SingleAnime
      key={currentAnime.id}
      anime={currentAnime}
      />
    )
  )
}
  /*
  Billboards.propTypes = {
    billboards: PropTypes.array.isRequired
  }
  */
  export default Billboards;