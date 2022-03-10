import React, { Fragment, useState } from "react";
import Divider from "@mui/material/Divider";
import "../css/basicInfo.css";

const renderBasicHtml = (data) => {
  const titleMap = {
    name: "姓名",
    sex: "性別",
    birthday: "出生年月日",
    height: "身高",
    weight: "體重",
    city: "主要服務縣市",
		phone:"手機號碼",
		bankCode: "銀行代碼",
    account: "銀行帳號",
  };
  return Object.keys(data).map((key, index) => (
    <div className="detail-block" key={index}>
      <div>{titleMap[key]}</div>
      <div>{data[key]}</div>
    </div>
  ));
};

//need optimization
function Basic({ basicData }) {
  return (
    <div>
      <h1>基本資料</h1>
      {renderBasicHtml(basicData)}
    </div>
  );
}

function Contact({contactData}) {
  return (
    <div>
      <h1>聯絡資料</h1>
      {renderBasicHtml(contactData)}
    </div>
  );
}

function Collect({bankData}) {
  return (
    <div>
      <h1>收款資料</h1>
			{renderBasicHtml(bankData)}
    </div>
  );
} 

function BasicInfo({ data }) {
  let { basic, contact, bank } = data;
  return (
    <div className = "basicInfo-block">
      <Basic basicData = {basic} />
      <Divider />
      <Contact contactData = {contact} />
      <Divider />
      <Collect bankData={bank}/>
    </div>
  );
}

export default BasicInfo;
