import React, { Component } from 'react';
import Modal from './Modal';
import UpdateForm from "./UpdateForm";
//import PropTypes from 'prop-types';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            nBillboards: this.props.nBillboards,
            button: this.props.button
        }
    }
    render(){
        return (
            <nav className='Navigation'>
                <a href='http://localhost:3000/' className='Navigation-billboards'>
                    {this.state.title}
                    <span className="badge badge-pill badge-info ml-2">
                        {this.state.nBillboards}
                    </span>
                </a>
                <button className='Navigation-button'>
                    {this.state.button}
                </button>
                
            </nav>
        );
    }
}

export default Navigation;