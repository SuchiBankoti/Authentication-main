import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { myContext } from "../../Context";

const MainNavigation = () => {
  const { token, removeFromLocStr } = useContext(myContext);
  return (
    <header className={classes.header}>
      <Link to="/Authentication-main">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {token ? (
            ""
          ) : (
            <li>
              <Link to="/Authentication-main/auth">Login</Link>
            </li>
          )}
          <li>
            <Link to="/Authentication-main/profile">Profile</Link>
          </li>
          {token ? (
            <li>
              <button onClick={removeFromLocStr}>
                {" "}
                <Link to="/Authentication-main/auth">Logout</Link>
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
