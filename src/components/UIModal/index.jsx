import React from 'react';
import PropTypes from 'prop-types';
import ModalStyled from './styled/ModalStyled';

function Modal({ isOpen, title, message, onClose, onSubmit }) {
  return (
    <ModalStyled open={isOpen} onClick={onClose}>
      <div className="modal">
        {title && <div className="modal__head">{title}</div>}
        <div className="modal__content">{message}</div>
        <div className="modal__footer">
          {onClose && (
            <div className="modal__btn" onClick={onClose}>
              Cancel
            </div>
          )}
          {onSubmit && (
            <div className="modal__btn" onClick={onSubmit}>
              Ok
            </div>
          )}
        </div>
      </div>
    </ModalStyled>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Modal;
