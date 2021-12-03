import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../utils/Context";
import CreateAccountOptions from "./CreateAccountOptions";

export default function EmailSection({
  checkInactivity,
  handleForgotEmail,
  nextStep,
  setStep,
  setAccountStep,
  accountStep,
  loadProgressBar,
}) {
  const { userEmail, setUserEmail, activateOptions, setActivateOptions } =
    useContext(AppContext);
  return (
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
        <Link to="#" className="learn-more-container-a">
          Learn more
        </Link>
      </div>
      <div className="login-button-container">
        {activateOptions && (
          <CreateAccountOptions
            setStep={setStep}
            setAccountStep={setAccountStep}
            loadProgressBar={loadProgressBar}
            checkInactivity={checkInactivity}
            setActivateOptions={setActivateOptions}
          />
        )}
        <p
          className="login-button-container-p"
          onClick={() => setActivateOptions(true)}>
          Create account
        </p>
        <button
          onClick={() => nextStep()}
          className="login-button-container-button">
          Next
        </button>
      </div>
    </>
  );
}
