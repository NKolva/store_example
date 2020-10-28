import React, { useEffect } from 'react';

import './modal.scss';

interface Props {
    onSubmit?: () => void;
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({ onSubmit, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);


    return(
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal__header">
                    Shopping Cart
                    <i className="material-icons modal__icon" onClick={onClose}>close</i>
                </div>

                <div className="modal__content">
                    Content
                </div>

                <div className="modal__footer">
                    <button onClick={onSubmit}>Order</button>
                </div>
            </div>
        </div>
    )
}