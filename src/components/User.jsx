import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
function User({data}) {
  console.log(data);
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Avatar sx={{ width: 69, height: 69 }}>林</Avatar>
    </div>
  );
}

export default User;
