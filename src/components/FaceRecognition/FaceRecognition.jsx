import React from "react";
import style from "./FaceRecognition.module.css";

const FaceRecognition = ({ imageUrl, squareCoords, isFetching }) => {
  const { top, left, right, bottom } = squareCoords;
  const boxPosition = { top: top, left: left, right: right, bottom: bottom };
  const preloader = (
    <div style={boxPosition} className={style.lds_spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <div className={style.container}>
      <div className={style.img_wrapper}>
        <img id="faceImg" src={imageUrl} alt="" />
        {isFetching ? preloader : (
          <div style={boxPosition} className={style.bounding_box}></div>
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;
