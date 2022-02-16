import React from "react";
import Style from "../styles/Modal.module.css";
export const Modals = ({ title, setStateModal, children }) => {
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={`${Style.modal_container}`} onClick={setStateModal}>
      <div className={`${Style.modal_card}`} onClick={handlePropagation}>
        <div className={`${Style.head_card}`}>
          <h2>{title}</h2>
          <button type="button" className="btn btn-outline-success" onClick={setStateModal}>
            Close
          </button>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};
