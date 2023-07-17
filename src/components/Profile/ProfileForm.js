import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import { myContext } from "../../Context";

const ProfileForm = () => {
  const { token, saveToLocStr } = useContext(myContext);
  const passRef = useRef();
  const changePassApi = process.env.REACT_APP_CHANGE_PASS_API_KEY;

  function handleChangePassword(event) {
    event.preventDefault();
    const newPassword = passRef.current.value;
    console.log(newPassword);
    fetch(changePassApi, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        password: newPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => saveToLocStr(data.idToken));
        alert("PASSWORD CHNAGED SUCCESSFULY");
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

  return (
    <form className={classes.form} onSubmit={handleChangePassword}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
