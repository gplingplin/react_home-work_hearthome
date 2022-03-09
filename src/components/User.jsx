import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "../css/user.css";

function User({ data }) {
  let { avatar, name, status } = data;
  const [count, setCount] = useState(0);

  return (
    <div className="user-block">
      <Avatar sx={{ width: 69, height: 69 }}>林</Avatar>
      <div className="name-block">
        <div className="user-name">{name}</div>
        <div className="user-status">{status ? "上線中" : "離線"}</div>
      </div>
    </div>
  );
}

export default User;
