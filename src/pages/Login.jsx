import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/google-logo.png";
import "../styles/login.css";
import { BarLoader } from "react-spinners";
import SelectLanguage from "../components/supportedLanguages";
import { AppContext } from "../utils/Context";
import AccountNotFound from "../components/AccountNotFound";
import PasswordSection from "../components/PasswordSection";
import EmailSection from "../components/EmailSection";
import NameSection from "../components/NameSection";
import ForgotPassword from "../components/ForgotPassword";
import ForgotPasswordVerification from "../components/ForgotPasswordVerification";
import InactiveNotification from "../components/InactiveNotification";
import RecoverySection from "../components/RecoverySection";
import CreateAccout from "../components/CreateAccount";

export default function LoginPage() {
  const [loadingBar, setLoadingBar] = useState(false);
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [recoveryDetails, setRecoveryDetails] = useState("");
  const [passwordRecovery, setPasswordRecovery] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [accountStep, setAccountStep] = useState(1);

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
  Step 7 & 8 - Forgot password
  Step 9 - Create Account (For myself)
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

  function loadDefaultValues() {
    setUserEmail("");
    setUserPassword("");
  }

  useEffect(() => {
    loadDefaultValues();
    loadProgressBar(1500);
    checkInactivity();

    // eslint-disable-next-line
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
          <EmailSection
            setStep={setStep}
            nextStep={nextStep}
            checkInactivity={checkInactivity}
            handleForgotEmail={handleForgotEmail}
            setAccountStep={setAccountStep}
            accountStep={accountStep}
            loadProgressBar={loadProgressBar}
          />
        )}
        {/* End of Email Section */}

        {/* Password Section */}
        {step === 1 && (
          <PasswordSection
            prevStep={prevStep}
            nextStep={nextStep}
            checkInactivity={checkInactivity}
            setStep={setStep}
            handleCheckBox={handleCheckBox}
            showPassword={showPassword}
          />
        )}
        {/* End of Password Section */}

        {/* Forgot E-mail Section */}
        {step === 2 && (
          <RecoverySection
            handleForgotEmail={handleForgotEmail}
            setRecoveryDetails={setRecoveryDetails}
            checkInactivity={checkInactivity}
            recoveryDetails={recoveryDetails}
          />
        )}
        {/* End of Forgot Email Section */}

        {/* Name Section */}
        {step === 3 && (
          <NameSection nextStep={nextStep} checkInactivity={checkInactivity} />
        )}
        {/* End of Name Section */}

        {/* When inactive notification */}
        {step === 4 && <InactiveNotification setStep={setStep} />}
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
          <ForgotPassword
            setStep={setStep}
            checkInactivity={checkInactivity}
            passwordRecovery={passwordRecovery}
            setPasswordRecovery={setPasswordRecovery}
            nextStep={nextStep}
            showPassword={showPassword}
            handleCheckBox={handleCheckBox}
          />
        )}
        {step === 8 && (
          <ForgotPasswordVerification
            randomNumber={randomNumber}
            setStep={setStep}
            checkInactivity={checkInactivity}
          />
        )}
        {/* End of Forgot password */}

        {step === 9 && (
          <CreateAccout
            setStep={setStep}
            accountStep={accountStep}
            checkInactivity={checkInactivity}
            loadProgressBar={loadProgressBar}
          />
        )}
      </div>

      {/* Footer */}
      <div className="login-footer">
        <div className="supported-languages">
          <SelectLanguage />
        </div>
        <div className="login-footer-2">
          <Link to="#" className="login-footer-2-a">
            Help
          </Link>
          <Link to="#" className="login-footer-2-a">
            Privacy
          </Link>
          <Link to="#" className="login-footer-2-a">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
