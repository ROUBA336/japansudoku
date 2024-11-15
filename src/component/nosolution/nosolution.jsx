import React from "react";
import "./nosolution.css";

import Button from "../button/button.jsx";

const NoSolution = ({ closeModal }) => {
  return (
    <div className="NoSolution">
      <div className="modal-container">
        <div className="modal-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal-title">
          <h1>No Solution Found</h1>
        </div>
        <div className="modal-body">
          <p>
            The Current Grid Doesnot have any solution, please change some cell values.
          </p>
        </div>
        <div className="modal-footer">
          <Button
            onClick={closeModal}
            buttonStyle="btn--primary--solid"
            text="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default NoSolution;
