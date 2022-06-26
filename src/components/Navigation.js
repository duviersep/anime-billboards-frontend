import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import UpdateForm from "./UpdateForm";
//import PropTypes from 'prop-types';

const Navigation = ({ title, nBillboards, button }) => {

    const [modalUpdateState, setModalUpdateState] = useState(false);
    const [singleAnime, setSingleAnime] = useState([]);

    useEffect( () => {
        setSingleAnime({"id": null,
        "animeName": null,
        "creator": null,
        "releaseDate": null,
        "finishDate": null,
        "description": null,
        "urlImage": null});
        setModalUpdateState(modalUpdateState);
      })

    return (
        <nav className='Navigation'>
            <a href='http://localhost:3000/' className='Navigation-billboards'>
                {title}
                <span className="badge badge-pill badge-info ml-2">
                    {nBillboards}
                </span>
            </a>
            <button className='Navigation-button'
            onClick={ () => setModalUpdateState(!modalUpdateState) }>
                {button}
            </button>
            <Modal
            state={modalUpdateState}
            setState={setModalUpdateState}
            title={'Crear Cartelera'}
          >
              <UpdateForm anime={singleAnime}/>
          </Modal>
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