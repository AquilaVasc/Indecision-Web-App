import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.option}
        onRequestClose={props.closeModal}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        <p className='modal__body'>{props.option}</p>
        <button 
            className='button'
            onClick={props.closeModal}
        >
            Okay
        </button>
    </Modal>
);


export default OptionModal;