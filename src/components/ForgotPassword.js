import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../utils/Context";

export default function ForgotPassword({
  setStep,
  handleCheckBox,
  checkInactivity,
  nextStep,
  showPassword,
  setPasswordRecovery,
  passwordRecovery,
}) {
  const { userEmail } = useContext(AppContext);
  return (
    <>
      <h2>Account Recovery</h2>
      <div className="email-container" onClick={() => setStep(0)}>
        <CgProfile />
        <p>{userEmail}</p>
        <RiArrowDownSLine />
      </div>
      <p>Enter the last password you remember using with this Google Account</p>
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
  );
}
