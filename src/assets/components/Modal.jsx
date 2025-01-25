import React from 'react';
import './Model.css';

const Modal = ({ isopen, onClose, children }) => {
  if (!isopen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content overflow-auto pl-[25px]" onClick={(e) => e.stopPropagation()}>
        <img src='/modal_exit.png' className="modal-close size-[30px] mt-1" onClick={onClose}></img>
        {children}
      </div>
    </div>
  );
};

export default Modal;
