import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';

const Navigation = ({ title, nBillboards, button }) => {

    return (
        <nav className='Navigation'>
            <a href='http://localhost:3000/' className='Navigation-billboards'>
                {title}
                <span className="badge badge-pill badge-info ml-2">
                    {nBillboards}
                </span>
            </a>
            <button className='Navigation-button'>
                {button}
            </button>
            
        </nav>
    );
}
/*
Navigation.propTypes = {
    title: PropTypes.string.isRequired,
    nBillboards: PropTypes.number.isRequired
  }
*/
export default Navigation;