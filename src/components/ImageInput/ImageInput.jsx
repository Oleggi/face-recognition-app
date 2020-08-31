import React from "react";
import style from "./ImageInput.module.css";

const ImageInput = ({ inputData, onInputChange, onButtonSubmit }) => {
  return (
    <div className={style.container}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Image link"
          aria-label="Image link"
          aria-describedby="button-addon2"
          value={inputData}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-light"
            type="button"
            id="button-addon2"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
