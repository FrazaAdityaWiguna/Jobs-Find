import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { setJWT } from "../reducer/loginAction";

const LoginGoogle = () => {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = (response) => {
    dispatch(
      setJWT({
        googleId: response.googleId,
        tokenJWT: response.xc.access_token,
      })
    );
    // console.log(new Date(Date.now() + response.tokenObj.expires_in));
    // console.log("date: ", Date.now());
    // console.log("expired ", response.tokenObj.expires_in);

    // cookies.set(`jwt-${response.googleId}`, response.xc.access_token, {
    //   maxAge: Date.now(),
    // });
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
