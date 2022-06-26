import React, { useState, useEffect } from "react";
import '../styles/UpdateForm.css';

const UpdateForm = ( singleAnime ) => {

 const [anime, setAnime]= useState({});

 useEffect( () => {
    setAnime(singleAnime.anime);
  })

 const { animeName, urlImage, creator, releaseDate, finishDate, description } = anime;

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor='title' className='form-label'>Título</label>
            <input
                type='text'
                id='title'
                name='title'
                onChange={handleInput}
                defaultValue={animeName}
                className='form-control'
            />
            <label htmlFor='creator' className='form-label'>Creador</label>
            <input
                type='text'
                id='creator'
                name='creator'
                onChange={handleInput}
                defaultValue={creator}
                className='form-control'
                />
            <label htmlFor='releaseDate' className='form-label'>Estreno</label>
            <input
                type='date'
                id='releaseDate'
                name='releaseDate'
                onChange={handleInput}
                defaultValue={releaseDate}
                className='form-control'
                />
            <label htmlFor='finishDate' className='form-label'>Finalización</label>
            <input
                type='date'
                id='finishDate'
                name='finishDate'
                onChange={handleInput}
                defaultValue={finishDate}
                className='form-control'
            />
            <label htmlFor='description' className='form-label'>Descripción</label>
            <textarea
                type='text'
                id='description'
                name='description'
                onChange={handleInput}
                defaultValue={description}
                className='form-control'
            />
            <button className='save-button'>
                Guardar
            </button>
        </form>
    );
}

const handleInput = (e) => {
    const { value, name } = e.target;
    console.log(e.target.value, e.target.name);
    //setAnime={[name] : value};
    //setAnime({[name] : value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sending data...')
}

export default UpdateForm;