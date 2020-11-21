import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

export function Login(props) {

    const [state,dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
            alert(error.message);
        })
    }

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://cdn2.hubspot.net/hubfs/521324/slack-logo.png" />
        <h1>Sign in to CoberApps HQ</h1>
        <p>coberapps.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
