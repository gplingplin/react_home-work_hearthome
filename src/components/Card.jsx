import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import BasicInfo from "./BasicInfo";
import "../css/card.css";

function Card({ cssType, title, cardType ,isOpen}) {
  const styleType = ["card-style card-main", "card-style card-sub"];
  const imgStyleType = ["img-position-block", "img-block"];
  const titleStyleType = ["mission-card-title", "card-title"];

  const handlerClick = () => {
    switch (cardType) {
      case 0:
        return console.log("會員資訊");
      case 1:
        return isOpen(true);
      case 2:
        return console.log("平台任務");
    }
  };

  return (
    <div onClick={handlerClick} className={styleType[cssType]}>
      <div className={imgStyleType[cssType]}>
        <Avatar
          sx={cssType ? { width: 50, height: 50 } : { width: 80, height: 80 }}
        ></Avatar>
      </div>
      <h1 className={titleStyleType[cssType]}>{title}</h1>
    </div>
  );
}

export default Card;
