import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "../css/card.css";

function Card({ type, title }) {
  const styleType = ["card-style card-main", "card-style card-sub"];
  const imgStyleType = ["img-position-block", "img-block"];
  const titleStyleType = ["mission-card-title", "card-title"];
  return (
    <div className={styleType[type]}>
      <div className={imgStyleType[type]}>
        <Avatar
          sx={type ? { width: 50, height: 50 } : { width: 80, height: 80 }}
        ></Avatar>
      </div>
      <h1 className={titleStyleType[type]}>{title}</h1>
    </div>
  );
}

export default Card;
