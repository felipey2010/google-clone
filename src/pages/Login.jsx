import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/google-logo.png";
import "../styles/login.css";
import { BarLoader } from "react-spinners";

export default function LoginPage() {
  const [loadingBar /*, setLoadingBar*/] = useState(false);
  return (
    <div className="login-main">
      <div className="login-main-container">
        <div className="loading-bar-container">
          {loadingBar && (
            <BarLoader height={5} width="100%" color="var(--text-color-2)" />
          )}
        </div>
        <Link to="/">
          <img src={logo} alt="google logo" />
        </Link>
        <h2>Sign in</h2>
        <p>Use your Google Account</p>
        <div className="login-input-container">
          <input type="text" placeholder="Email or phone" />
          <Link to="#">Forgot email?</Link>
        </div>
        <div className="learn-more-container">
          <p>Not your computer? Use Guest mode to sign in privately.</p>
          <Link to="#">Learn more</Link>
        </div>
        <div className="login-button-container">
          <Link to="#">Create account</Link>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
