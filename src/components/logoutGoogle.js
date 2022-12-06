import React from "react";
import { GoogleLogout } from "react-google-login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogoutGoogle = () => {
  const navigate = useNavigate();
  const googleId = useSelector((state) => state.googleId);

  const onSuccess = () => {
    localStorage.removeItem(`jwt-${googleId}`);
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
