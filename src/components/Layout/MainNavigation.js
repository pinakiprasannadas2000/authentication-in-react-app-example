import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const auth_context = useContext(AuthContext);

  const isLoggedIn = auth_context.isLoggedIn;

  const logoutHandler = () => {
    auth_context.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;