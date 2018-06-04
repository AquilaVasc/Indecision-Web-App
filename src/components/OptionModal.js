import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>{
    return (
        <Modal 
            isOpen={!!props.option}
            contentLabel='Selected Option'
        >
            <h3>Selected Option</h3>
            <p>{props.option}</p>
            <button onClick={props.closeModal}>Okay</button>
        </Modal>
    );
}

export default OptionModal;