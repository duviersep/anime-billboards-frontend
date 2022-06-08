import React from 'react';
import styled from 'styled-components';

const Modal = ({ children, state, setState, title='Anime' }) => {
    return (
        <div>
            {state &&
                <Overlay>
                    <ModalContainer>
                        <ModalHeader>
                            <h3>{title}</h3>
                        </ModalHeader>
                        <CloseButton 
                            onClick={ () => setState(false) }>
                        X
                        </CloseButton>
                        {children}
                    </ModalContainer>
                </Overlay>
            }
        </div>
    );
}

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 30px;
        text-align: center;
        color: #000;
    }
`;

const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    
    &:hover {
        background: #E83610 ;
    }
`;