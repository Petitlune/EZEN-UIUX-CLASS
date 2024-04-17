import React from "react";

const LoginPage = ({ PrivateRoute }) => {
  return (
    <div>
      <div>LoginPage</div>
      <button onClick={PrivateRoute}>로그인</button>
    </div>
  );
};

export default LoginPage;
