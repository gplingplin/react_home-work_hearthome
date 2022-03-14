import React, { useState } from "react";
import User from "./components/User";
import Announcement from "./components/Announcement";
import Card from "./components/Card";
import Recommend from "./components/Recommend";
import BasicInfo from "./components/BasicInfo";
import "./App.css";

function App() {
  const [memberInfo, setMemberInfo] = useState(false);
  const [salarySearch, setSalarySearch] = useState(false);
  const [platformMission, setPlatformMission] = useState(false);

  const mockData = {
    user: {
      avatar: "",
      name: "李姍姍",
      status: 1,
    },
    announcement: [
      "疫情期間，大家要多注意勤洗手，小心健康！",
      "若您已經施打完疫苗，可以透過小幫手回報給我們唷！",
    ],
    recommend: {
      code: "Homexin1314520",
      credit: "100",
    },
    memberInfo: {
      basic: {
        name: "李姍姍",
        sex: "女",
        birthday: "1995/03/11",
        height: "158公分",
        weight: "47公斤",
        city: "taipei",
      },
      contact: {
        phone: "0911-222-111",
      },
      bank: {
        bankCode: "812",
        account: "03112340210583",
      },
    },
  };
  return (
    <div className="homePage-basic">
      <User data={mockData.user} />
      <div className="main">
        <Announcement data={mockData.announcement} />
        <div className="card-block">
          <Card cssType={1} title="會員資訊" cardType={0} />
          <Card cssType={1} title="薪水查詢" cardType={1} isOpen={setSalarySearch} />
          <Card cssType={0} title="平台任務" cardType={2} />
        </div>
      </div>
      <Recommend data={mockData.recommend} />
      {salarySearch ? <BasicInfo data={mockData.memberInfo} /> : ""}
    </div>
  );
}

export default App;
