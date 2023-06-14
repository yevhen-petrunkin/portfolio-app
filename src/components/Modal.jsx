import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ handleModalClick, handleBurgerMenu, isModalOpen }) {
  const modal = document.querySelector('#modal');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        handleModalClick(!isModalOpen);
      }
    };
    window.addEventListener('keydown', handleKeydown);
  }, []);

  return createPortal(
    <div
      className="modal__backdrop"
      onClick={() => handleModalClick(!isModalOpen)}
    >
      <div className="modal__content">
        <button
          className="modal__btn"
          onClick={() => handleBurgerMenu('portfolio')}
        >
          My Portfolio
        </button>
        <button
          className="modal__btn"
          onClick={() => handleBurgerMenu('information')}
        >
          About Me
        </button>
      </div>
    </div>,
    modal
  );
}

export default Modal;
