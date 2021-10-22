import reactDom from "react-dom";
import cross from "assets/icns/cross.png";

import AnimateContainer from "./AnimateContainer";

export default function Modal({ isOpen, onClose, data, children }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <AnimateContainer animation="fade-in">
        <div className="modal">
          <div className="modal-header">
            <h2>{children}</h2>
            <button className="btn-close" onClick={onClose}>
              <img alt="close" src={cross} />
            </button>
          </div>
          {/* Form goes here */}
        </div>
      </AnimateContainer>
    </>,
    document.getElementById("modal")
  );
}
