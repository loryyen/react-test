import React, { useState } from "react";
import "./style.css";
const DropDown = ({ contentRender }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="Dropdown" onClick={() => setShowContent(!showContent)}>
        <spn>請選擇</spn>
        <img
          src={
            showContent
              ? require("./arrow-up.png")
              : require("./arrow-down.png")
          }
          className="Img"
          alt="arrow"
        ></img>
      </div>
      {showContent && contentRender && contentRender()}
    </>
  );
};
export default DropDown;
