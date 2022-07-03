import { useContext } from "react";
import { LoginContext } from "../Home/LoginContext";

function Login() {
  const loginContext = useContext(LoginContext);

  const onLogin = () => {
    loginContext.login(true);
  };

  const renderLogin = () => {
    if (loginContext.loggedIn) {
      return (
        <div>
          <span>Username here</span>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={onLogin}>Log In</button>
        </div>
      );
    }
  };

  return <div>{renderLogin()}</div>;
}

export default Login;
