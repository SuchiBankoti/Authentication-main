import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { myContext } from "../../Context";

const MainNavigation = () => {
  const { token, setToken } = useContext(myContext);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {token ? (
            ""
          ) : (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {token ? (
            <li>
              <button onClick={() => setToken("")}>
                {" "}
                <Link to="/auth">Logout</Link>
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
