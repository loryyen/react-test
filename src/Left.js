import React from "react";
import useLogin from "./hooks/use-login";
import "./Left.css";

function Left() {
  const { Login, Logout } = useLogin();

  return (
    <div className="Left">
      <button>首頁</button>
      <button onClick={Login}>登入</button>
      <button onClick={Logout}>登出</button>
    </div>
  );
}

export default Left;
