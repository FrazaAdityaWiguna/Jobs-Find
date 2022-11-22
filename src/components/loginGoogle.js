import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();
  const onSuccess = (response) => {
    localStorage.setItem("jwt", response.xc.access_token);
    navigate("/jobs-find");
  };

  const onFailure = () => {
    console.log(`[Login Failed]`);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: client_id,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <div>
      <GoogleLogin
        clientId={client_id}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginGoogle;
