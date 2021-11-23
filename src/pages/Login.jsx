import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/google-logo.png";
import "../styles/login.css";
import { BarLoader } from "react-spinners";
import SelectLanguage from "../components/supportedLanguages";
import { AppContext } from "../utils/Context";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import AccountNotFound from "../components/AccountNotFound";

export default function LoginPage() {
  const [loadingBar, setLoadingBar] = useState(false);
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [recoveryDetails, setRecoveryDetails] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordRecovery, setPasswordRecovery] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);

  const { userEmail, userPassword, setUserEmail, setUserPassword } =
    useContext(AppContext);

  /*
  Step 0 - Email
  Step 1 - Password
  Step 2 - Forgot email or phone number
  Step 3 - Name section
  Step 4 - Inactivity notification
  Step 5 - Account Not Found
  Step 6 - Something went wrong
  Step 7 - Forgot password
  */

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

    if (step === 3) {
      setStep(5);
    }

    if (step === 7) {
      getRandomNumber();
      setStep(step + 1);
    }
  }

  function prevStep() {
    loadProgressBar(2000);
    setStep(step - 1);
    checkInactivity();
  }

  function getRandomNumber() {
    setRandomNumber(Math.floor(Math.floor(Math.random() * (100 - 10) + 10)));
  }

  function handleForgotEmail() {
    loadProgressBar(2000);
    if (step === 0) {
      setStep(2);
      return;
    }
    setStep(step + 1);
  }

  function checkInactivity() {
    const timeoutId = setTimeout(() => {
      setStep(4);
    }, 1080000);
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
        <Link to="/" className="logo-link">
          <img src={logo} alt="google logo" />
        </Link>

        {/* Email Section */}
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
              <div className="login-input-forgot-email">
                <p onClick={() => handleForgotEmail()}>Forgot email?</p>
              </div>
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
        {/* End of Email Section */}

        {/* Password Section */}
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
              <div className="label-container">
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
            </div>
            <div className="login-button-container">
              <p onClick={() => setStep(7)}>Forgot password?</p>
              <button onClick={() => nextStep()}>Next</button>
            </div>
          </>
        )}
        {/* End of Password Section */}

        {/* Forgot E-mail Section */}
        {step === 2 && (
          <>
            <h2>Find your email</h2>
            <p>Enter your phone number or recovery email</p>
            <div className="forgot-email-input">
              <input
                type="text"
                required
                placeholder="Phone number or email"
                value={recoveryDetails}
                onChange={e => {
                  setRecoveryDetails(e.target.value);
                  checkInactivity();
                }}
              />
              <div className="forgot-email-button">
                <button onClick={() => handleForgotEmail()}>Next</button>
              </div>
            </div>
          </>
        )}
        {/* End of Forgot Email Section */}

        {/* Name Section */}
        {step === 3 && (
          <>
            <h2>What’s your name?</h2>
            <p>Enter the name on your Google Account</p>

            <div className="name-section-container">
              <input
                className="password-text"
                type="text"
                placeholder="First name"
                required
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value);
                  checkInactivity();
                }}
              />

              <input
                className="password-text"
                type="text"
                placeholder="Last name"
                required
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value);
                  checkInactivity();
                }}
              />
            </div>
            <div className="name-section-button">
              <button onClick={() => nextStep()}>Next</button>
            </div>
          </>
        )}
        {/* End of Name Section */}

        {/* When inactive notification */}
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
        {/* End of Inactive Section */}

        {step === 5 && <AccountNotFound setStep={setStep} />}

        {/* Something went wrong */}
        {step === 6 && (
          <>
            <div className="inactive-container-1">
              <h3>Something went wrong</h3>
              <p>Sorry, something went wrong there. Try again.</p>
            </div>
            <div className="inactive-container-2">
              <button onClick={() => setStep(0)}>Next</button>
            </div>
          </>
        )}
        {/* End of Something went wrong */}
        {/* Forgot Password */}
        {step === 7 && (
          <>
            <h2>Account Recovery</h2>
            <div className="email-container" onClick={() => setStep(0)}>
              <CgProfile />
              <p>{userEmail}</p>
              <RiArrowDownSLine />
            </div>
            <p>
              Enter the last password you remember using with this Google
              Account
            </p>
            <div className="password-input-container">
              <input
                className="password-text"
                type={showPassword ? "text" : "password"}
                placeholder="Enter last password"
                required
                value={passwordRecovery}
                onChange={e => {
                  setPasswordRecovery(e.target.value);
                  checkInactivity();
                }}
              />
              <div className="label-container">
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
            </div>
            <div className="login-button-container">
              <Link to="#">Try another way</Link>
              <button onClick={() => nextStep()}>Next</button>
            </div>
          </>
        )}
        {step === 8 && (
          <>
            <h2>Account Recovery</h2>
            <p>This helps show that this account really belongs to you</p>
            <div className="email-container" onClick={() => setStep(0)}>
              <CgProfile />
              <p>{userEmail}</p>
              <RiArrowDownSLine />
            </div>
            <div className="random-number">
              <p>{randomNumber}</p>
            </div>
            <div className="check-phone-1">
              <p>Check your phone</p>
            </div>
            <div className="check-phone-2">
              <p>
                Google sent a notification to your phone. Tap{" "}
                <strong>Yes</strong> on the notification, then tap{" "}
                <strong>{randomNumber}</strong> on your phone to verify it’s
                you.
              </p>
            </div>
            <div className="forgot-password-buttons">
              <button>Resend it</button>
              <button>I don't have my phone</button>
            </div>
          </>
        )}
        {/* End of Forgot password */}
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
