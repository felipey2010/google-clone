import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/google-logo.png";
import "../styles/login.css";
import { BarLoader } from "react-spinners";
import SelectLanguage from "../components/supportedLanguages";
import { AppContext } from "../utils/Context";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function LoginPage() {
  const [loadingBar, setLoadingBar] = useState(false);
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const { userEmail, userPassword, setUserEmail, setUserPassword } =
    useContext(AppContext);

  function nextStep() {
    loadProgressBar(2000);
    checkInactivity();
    if (step === 0) {
      if (userEmail.includes("@") && userEmail !== "") {
        setStep(step + 1);
      }
    }

    if (step === 1) {
      if (userPassword !== "" && userPassword.length !== 0) {
        setStep(step + 1);
      }
    }
  }

  function prevStep() {
    loadProgressBar(2000);
    setStep(step - 1);
    checkInactivity();
  }

  function checkInactivity() {
    const timeoutId = setTimeout(() => {
      setStep(4);
    }, 36000);
    return () => clearTimeout(timeoutId);
  }

  function loadProgressBar(value) {
    setLoadingBar(true);
    //Clear loading screen after 2 seconds
    const timeoutId = setTimeout(() => {
      setLoadingBar(false);
    }, value);
    return () => clearTimeout(timeoutId);
  }

  function handleCheckBox(e) {
    setShowPassword(!showPassword);
    checkInactivity();
  }

  useEffect(() => {
    loadProgressBar(1500);
    checkInactivity();
  }, []);

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
        {step === 0 && (
          <>
            <h2>Sign in</h2>
            <p>Use your Google Account</p>
            <div className="login-input-container">
              <input
                type="text"
                required
                placeholder="Email or phone"
                value={userEmail}
                onChange={e => {
                  setUserEmail(e.target.value);
                  checkInactivity();
                }}
              />
              <Link to="#">Forgot email?</Link>
            </div>
            <div className="learn-more-container">
              <p>Not your computer? Use Guest mode to sign in privately.</p>
              <Link to="#">Learn more</Link>
            </div>
            <div className="login-button-container">
              <Link to="#">Create account</Link>
              <button onClick={() => nextStep()}>Next</button>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <h2>Welcome</h2>
            <div className="email-container" onClick={() => prevStep()}>
              <CgProfile />
              <p>{userEmail}</p>
              <RiArrowDownSLine />
            </div>
            <div className="password-input-container">
              <input
                className="password-text"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={userPassword}
                onChange={e => {
                  setUserPassword(e.target.value);
                  checkInactivity();
                }}
              />
              <label>
                <input
                  type="checkbox"
                  value={showPassword}
                  placeholder="Show Password"
                  onChange={e => handleCheckBox(e)}
                />
                Show Password
              </label>
            </div>
            <div className="login-button-container">
              <Link to="#">Forgot password?</Link>
              <button onClick={() => nextStep()}>Next</button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="inactive-container-1">
              <h3>You're not signed in</h3>
              <p>Your session ended because there was no activity.</p>
              <p>Try signing in again.</p>
            </div>
            <div className="inactive-container-2">
              <button onClick={() => setStep(0)}>Try again</button>
            </div>
          </>
        )}
      </div>
      <div className="login-footer">
        <div className="supported-languages">
          <SelectLanguage />
        </div>
        <div className="login-footer-2">
          <Link to="#">Help</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
        </div>
      </div>
    </div>
  );
}
