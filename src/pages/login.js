import React from "react";
import LoginGoogle from "../components/loginGoogle";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md w-60 flex items-center justify-center flex-col">
        <div className="mb-3 font-bold">Login With</div>
        <LoginGoogle />
      </div>
    </div>
  );
};

export default Login;
