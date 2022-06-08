import React, { useState, useEffect } from "react";
import '../styles/UpdateForm.css';

const UpdateForm = ( singleAnime ) => {

 const [anime, setAnime]= useState({});
 const animeUpdated = {};

 useEffect( () => {
    setAnime(singleAnime.anime);
  })

 const { animeName, urlImage, creator, releaseDate, finishDate, description } = anime;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Título</label>
            <input
                type='text'
                id='title'
                name='title'
                onChange={handleInput}
                defaultValue={animeName}
                
            />
            <label htmlFor='creator'>Creador</label>
            <input
                type='text'
                id='creator'
                name='creator'
                onChange={handleInput}
                defaultValue={creator}
                />
            <label htmlFor='releaseDate'>Estreno</label>
            <input
                type='date'
                id='releaseDate'
                name='releaseDate'
                onChange={handleInput}
                defaultValue={releaseDate}
                />
            <label htmlFor='finishDate'>Finalización</label>
            <input
                type='date'
                id='finishDate'
                name='finishDate'
                onChange={handleInput}
                defaultValue={finishDate}
            />
            <label htmlFor='description'>Descripción</label>
            <textarea
                type='text'
                id='description'
                name='description'
                onChange={handleInput}
                defaultValue={description}
            />
            <button className='save-button'>
                Guardar
            </button>
        </form>
    );
}

const handleInput = (e, animeUpdated) => {
    const { value, name } = e.target;
    //Armar JSON
    //animeUpdated.{name} = value;
    console.log(e.target.value, e.target.name);
}

const handleSubmit = (e) => {
    e.preventDefault();
    //Fetch Post
    console.log('sending data...')
}

export default UpdateForm;