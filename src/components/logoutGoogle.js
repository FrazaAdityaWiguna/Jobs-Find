import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const LogoutGoogle = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  return (
    <>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        onLogoutSuccess={onSuccess}
      />
    </>
  );
};

export default LogoutGoogle;
