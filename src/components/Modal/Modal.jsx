import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('Кликнули в бекдроп');

    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <Img
            src="https://pixabay.com/get/g5db2ef83755953ffa5f00a713346175c36a3b6ebc23d2ffbf9b30588a63a4846c917445962ac3a6a4050a46256c183ef_640.jpg"
            alt=""
          />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
