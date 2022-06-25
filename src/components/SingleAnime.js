import React, { useState, useEffect } from "react";
import '../styles/SingleAnime.css';
import styled from 'styled-components';
import Modal from './Modal';
import UpdateForm from "./UpdateForm";
import img from "../images/naruto_image.jpg"
//import PropTypes from 'prop-types';

const SingleAnime = (currentAnime) => {

  const [singleAnime, setSingleAnime] = useState([]);
  const [modalUpdateState, setModalUpdateState] = useState(false);

  useEffect( () => {
    setSingleAnime(currentAnime.anime);
    setModalUpdateState(modalUpdateState);
  })

  const { id, animeName, urlImage, creator, releaseDate, finishDate, description } = singleAnime;

  return (
    <div className='col-md-4' key={id}>
      <div className='card mt-4 mb-4'>
        <div className='card-header'>
          <h3>{animeName}</h3>
          <img src={img} alt={animeName} width='100' />
          <br />
          <span className="badge badge-pill badge-danger ml-2">
            {creator}
          </span>
        </div>
        <div className='card-body'>
          <p>{releaseDate} - {finalizedAnime(finishDate)}</p>
          <p>{description}</p>
          <button className='delete-button'>
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
              <UpdateForm anime={singleAnime}/>
          </Modal>

        </div>
      </div>
    </div>
  )
}

const finalizedAnime= (finishDate) => {
  return finishDate != null ? finishDate : "En emisión";
}

/*
SingleBillboard.propTypes = {
    //billboard: PropTypes.object.isRequired
    id: PropTypes.number.isRequired,
    animeName: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    finishDate: PropTypes.string,
    description: PropTypes.string.isRequired
}
*/
export default SingleAnime;
/*
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
*/