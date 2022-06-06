import React, { useState } from 'react';
//import PropTypes from 'prop-types';

const Navigation = ({ title, nBillboards, login, button }) => {
    /*
    const [ title, setTitle ] = useState('');
    const [ nBillboards, setNBillboards ] = useState(0);

    setTitle(title);
    setNBillboards(nBillboards);
    */
    return (
        <nav className='Navigation'>
            <a href='http://localhost:3000/' className='Navigation-billboards'>
                {title}
                <span className="badge badge-pill badge-info ml-2">
                    {nBillboards}
                </span>
            </a>
            <a href='http://localhost:3000/login' className='Navigation-login' >
                {login}
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