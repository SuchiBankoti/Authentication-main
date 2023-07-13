import { useRef, useState } from "react";

import classes from "./AuthForm.module.css";
const signUPapi =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvMhMxDWfRmYEbmRy4ORKoiOLsxpVokq0";
const signINapi =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvMhMxDWfRmYEbmRy4ORKoiOLsxpVokq0";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [req, setReq] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  function handleSubmit(event) {
    event.preventDefault();
    setReq(true);
    // get data from input then check if its in login mode or new account and send post req accordingly
    // post request with headers and body with dtails and a key
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (isLogin) {
      fetch(`${signINapi}`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setReq(false);
        if (res.ok) {
          alert("USER LOGGED IN");
        } else {
          return res.json().then((data) => {
            let errMsg = "Authenticaton Failed";
            if (data && data.error && data.error.message) {
              errMsg = data.error.message;
            }
            alert(errMsg);
          });
        }
      });
    } else {
      fetch(`${signUPapi}`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setReq(false);
        if (res.ok) {
          alert("ACCOUNT CREATED");
        } else {
          return res.json().then((data) => {
            let errMsg = "Authenticaton Failed";
            if (data && data.error && data.error.message) {
              errMsg = data.error.message;
            }
            alert(errMsg);
          });
        }
      });
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {req ? <p style={{ color: "white" }}>Sending request...</p> : ""}
        <div className={classes.actions}>
          <button onClick={handleSubmit}>
            {isLogin ? "Login" : "Register"}
          </button>
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
