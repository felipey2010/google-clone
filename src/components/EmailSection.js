import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../utils/Context";

export default function EmailSection({
  checkInactivity,
  handleForgotEmail,
  nextStep,
}) {
  const { userEmail, setUserEmail } = useContext(AppContext);
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
        <Link to="#" className="login-button-container-a">
          Create account
        </Link>
        <button onClick={() => nextStep()}>Next</button>
      </div>
    </>
  );
}
