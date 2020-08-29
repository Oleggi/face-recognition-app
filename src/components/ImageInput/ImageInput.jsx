import React from "react";
import style from "./ImageInput.module.css";

const ImageInput = () => {
  return (
      <div className="input-group mb-3 container-sm">
        <input
          type="text"
          class="form-control"
          placeholder="Image link"
          aria-label="Image link"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-light"
            type="button"
            id="button-addon2"
          >
            Detect
          </button>
        </div>
      </div>
  );
};

export default ImageInput;
