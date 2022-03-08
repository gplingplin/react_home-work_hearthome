import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import "../css/announcement.css";

function Announcement({ data }) {
  
  return (
    <div className="announcement-block">
      <h1 className="title">公告</h1>
      <Divider/>
      <ul>
        {data.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default Announcement;
