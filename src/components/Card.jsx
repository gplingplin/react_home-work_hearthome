import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import "../css/card.css";

function Card({ data,type,title }) {
  
  const styleType = ["card-style card-main","card-style card-sub"];
  return (
    <div className={styleType[type]}>
      <Avatar sx={{ width: 50, height: 50 }}>N</Avatar>
      <h1>{title}</h1>
    </div>
  );
}

export default Card;
