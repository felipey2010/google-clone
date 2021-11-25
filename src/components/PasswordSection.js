import { useContext } from "react";
import { AppContext } from "../utils/Context";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function PasswordSection({
  prevStep,
  checkInactivity,
  handleCheckBox,
  setStep,
  nextStep,
  showPassword,
}) {
  const { userPassword, userEmail, setUserPassword } = useContext(AppContext);

  return (
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
  );
}
