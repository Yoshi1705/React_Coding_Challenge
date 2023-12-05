import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    zIndex: 1000,
    display: isOpen ? 'block' : 'none',
    borderRadius: 40,
    overflow:"hidden"
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'block' : 'none',
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      });
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);
  


  return (
    <div>
      <div style={overlayStyle}></div>
      <div ref={modalRef} style={modalStyle}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
