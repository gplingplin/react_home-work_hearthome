import React, { useState } from "react";
import Button from '@mui/material/Button';
import "../css/recommend.css";

function Recommend({ data }) {
  let { code, credit } = data;
  
  const handlerClick = ()=>{
    navigator.clipboard.readText().then(text => {
        console.log(text); // 剪貼簿中的文本內容
      });
  }
  
  return (
    <div className="recommend-block">
      <h1>我的推薦碼</h1>
      <p>
        我的推薦碼是{code}，快點一起來Home心接案賺錢吧！註冊成功還有{credit}
        元可以領取唷！
      </p>
      <Button onClick={handlerClick} variant="contained" color="success" disableElevation>點我複製推薦碼</Button>
    </div>
  );
}

export default Recommend;
