import React, { useState, useEffect } from "react";
import '../styles/SingleAnime.css';
import Modal from './Modal';
import UpdateForm from "./UpdateForm";
//import img from "../images/naruto_image.jpg"
//import PropTypes from 'prop-types';

const SingleAnime = (currentAnime) => {

  const [singleAnime, setSingleAnime] = useState(currentAnime.anime);
  const [modalUpdateState, setModalUpdateState] = useState(false);

  useEffect( () => {
    setModalUpdateState(modalUpdateState);
  })

  const { id, animeName, urlImage, creator, releaseDate, finishDate, description } = singleAnime;

  return (
    <div className='col-md-4' key={id}>
      <div className='card mt-4 mb-4'>
        <div className='card-header'>
          <h3>{animeName}</h3>
          <img src={urlImage} alt={animeName} width='100%'/>
          <br />
          <span className="badge badge-pill badge-danger ml-2">
            {creator}
          </span>
        </div>
        <div className='card-body'>
          <p>{releaseDate} - {finalizedAnime(finishDate)}</p>
          <p>{description}</p>
        </div>
        <div className='card-footer'>
          <button 
            className='delete-button'
            onClick={handleRemoveSingleAnime(singleAnime)}>
            Eliminar
          </button>
          <button 
            className='update-button'
            onClick={ () => setModalUpdateState(!modalUpdateState) }>
            Editar
          </button>
          
          
          <Modal
            state={modalUpdateState}
            setState={setModalUpdateState}
            title={'Modificar Cartelera'}
          >
              <UpdateForm 
                stateAnime={singleAnime}
                setStateAnime={setSingleAnime}
                />
          </Modal>
        </div>
      </div>
    </div>
  )
}

const finalizedAnime= (finishDate) => {
  return finishDate != null ? finishDate : "En emisión";
}

const handleRemoveSingleAnime = (singleAnime) => {
  console.log(singleAnime.id);
}

export default SingleAnime;