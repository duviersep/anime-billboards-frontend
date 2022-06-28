import React, { Component } from "react";
import '../styles/SingleAnime.css';
import styled from 'styled-components';
import Modal from './Modal';
import UpdateForm from "./UpdateForm";

class SingleAnime extends Component {

  constructor(props){
    super(props);
    this.state={
      singleAnime : this.props.anime,
    }

    this.finalizedAnime = this.finalizedAnime.bind(this);
    this.handleRemoveSingleAnime = this.handleRemoveSingleAnime.bind(this);
  }

  render(){
    const { id, animeName, urlImage, creator, releaseDate, finishDate, description } = this.state.singleAnime;

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
          <p>{releaseDate} - {this.finalizedAnime(finishDate)}</p>
          <p>{description}</p>
        </div>
        <div className='card-footer'>
          <button 
            className='delete-button'
            onClick={this.handleRemoveSingleAnime}>
            Eliminar
          </button>
          <button 
            className='update-button'
            onClick={ () => this.props.modalUpdateState(!this.props.modalUpdateState) }>
            Editar
          </button>
          
          <Modal
            state={this.props.modalUpdateState}
            setState={this.props.setModalUpdateState}
            title={'Modificar Cartelera'}
          >
              <UpdateForm 
                stateAnime={this.state.singleAnime}
                setStateAnime={this.state.setSingleAnime}
                />
          </Modal>
        </div>
      </div>
    </div>
  )
  }

  finalizedAnime(finishDate) {
    return finishDate != null ? finishDate : "En emisión";
  }
  
  handleRemoveSingleAnime(singleAnime) {
    console.log(singleAnime.id);
  }
}
/*
  const [singleAnime, setSingleAnime] = useState(currentAnime.anime);
  const [modalUpdateState, setModalUpdateState] = useState(false);

  useEffect( () => {
    //setSingleAnime(currentAnime.anime);
    setModalUpdateState(modalUpdateState);
    console.log("Render...");
  })
*/

export default SingleAnime;

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