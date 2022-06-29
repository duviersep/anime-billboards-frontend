import React, { useState, useEffect } from "react";
import '../styles/UpdateForm.css';

const UpdateForm = ( {stateAnime, handleSubmit} ) => {

 const [dataState, setDataState] = useState(stateAnime);

 const { animeName, creator, releaseDate, finishDate, description } = dataState;

 const handleInput = (e) => {
    const { value, name } = e.target;

    console.log({ value, name })
    //setDataState([name] : value);

    setDataState({...dataState, [name]: value})


    //setAnime={[name] : value}; Este funciona?
    //setStateAnime={[name] : value};
    //setAnime={'animeName': 'TORIYAMA'}
    //setStateAnime={[name] : value};
    //useState.setAnime={[name] : value};
    //onChange={() => {setStateAnime={'animeName' : 'narutico'}; console.log(stateAnime)}}
}




    return (
        <form onSubmit={() => handleSubmit(dataState)} >
            <label htmlFor='title' className='form-label'>Título</label>
            <input
                type='text'
                id='animeName'
                name='animeName'
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



export default UpdateForm;