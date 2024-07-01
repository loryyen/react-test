import React, { useState } from "react";
import useLogin from "./hooks/use-login";
import DropDown from "./components/DropDown";
import TabContainer from "./components/TabContainer";
import "./Right.css";

function Right() {
  const { isLogged, Login, userInfo } = useLogin();
  const [userLoginData, setUserLoginData] = useState({
    userName: "",
    password: "",
  });
  return (
    <div className="Right">
      <h1>公司資訊</h1>
      <h2>公司名稱: XXX</h2>
      <h2>公司地址: YYY</h2>
      <hr></hr>
      {isLogged ? (
        <div>
          <DropDown
            contentRender={() => {
              return (
                <TabContainer tabs={["版本號", "登入的名稱和密碼"]}>
                  {(activeTabIndex) => {
                    const { userName, password } = userInfo;
                    if (activeTabIndex === 0)
                      return <div className="TabContain">v1.42.34</div>;
                    if (activeTabIndex === 1)
                      return (
                        <div className="TabContain">
                          <div>名稱 {userName}</div>
                          <div>密碼 {password}</div>
                        </div>
                      );
                  }}
                </TabContainer>
              );
            }}
          />
        </div>
      ) : (
        <div>
          <div>
            名稱
            <input
              onChange={(e) => {
                setUserLoginData({
                  ...userLoginData,
                  userName: e.target.value,
                });
              }}
            ></input>
          </div>
          <div>
            密碼
            <input
              onChange={(e) => {
                setUserLoginData({
                  ...userLoginData,
                  password: e.target.value,
                });
              }}
            ></input>
          </div>
          <button
            onClick={() => {
              Login(userLoginData);
            }}
          >
            登入
          </button>
        </div>
      )}
    </div>
  );
}

export default Right;
