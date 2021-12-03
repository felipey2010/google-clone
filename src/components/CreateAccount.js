import { useState } from "react";

export default function CreateAccout({
  accountStep,
  checkInactivity,
  setStep,
  loadProgressBar,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [useNewEmail, setUseNewEmail] = useState(false);
  const [oldEmail, setOldEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function clearInput() {
    setUserName("");
    setOldEmail("");
  }

  function handleCheckBox(e) {
    setShowPassword(!showPassword);
    checkInactivity();
  }

  return (
    <>
      <div className="create-account-div">
        {accountStep === 1 && (
          <>
            <h2>Create your Google Account</h2>
            <div className="create-account-div-row">
              <input
                className="create-account-div-input"
                type="text"
                required
                placeholder="First name"
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value);
                  checkInactivity();
                }}
              />
              <input
                className="create-account-div-input"
                type="text"
                required
                placeholder="Last name"
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value);
                  checkInactivity();
                }}
              />
            </div>
            {useNewEmail ? (
              <div className="old-email-div">
                <input
                  className="old-email-div-input"
                  type="text"
                  required
                  placeholder="Your email address"
                  value={oldEmail}
                  onChange={e => {
                    setOldEmail(e.target.value);
                    checkInactivity();
                  }}
                />
              </div>
            ) : (
              <div className="username-div">
                <div className="username-container">
                  <input
                    className="username-div-input"
                    type="text"
                    required
                    placeholder="Username"
                    value={userName}
                    onChange={e => {
                      setUserName(e.target.value);
                      checkInactivity();
                    }}
                  />
                  <p className="username-div-p">@gmail.com</p>
                </div>
              </div>
            )}
            <div className="switch-email-div">
              <button
                className="switch-emaill-div-button"
                onClick={() => {
                  clearInput();
                  setUseNewEmail(!useNewEmail);
                }}>
                {useNewEmail
                  ? "Create a new Gmail address instead"
                  : "Use my current email address instead"}
              </button>
            </div>
            <div className="create-account-div-row-2">
              <input
                className="create-account-div-input"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  checkInactivity();
                }}
              />
              <input
                className="create-account-div-input"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Confirm"
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                  checkInactivity();
                }}
              />
            </div>
            <div className="show-password-div">
              <label className="show-password-div-label">
                <input
                  className="show-password-div-input"
                  type="checkbox"
                  value={showPassword}
                  placeholder="Show Password"
                  onChange={e => handleCheckBox(e)}
                />
                Show Password
              </label>
            </div>

            <div className="create-buttons-div">
              <button
                className="create-button-1"
                onClick={() => {
                  loadProgressBar(2000);
                  setStep(0);
                }}>
                Sign in instead
              </button>
              <button className="create-button-2">Next</button>
            </div>
          </>
        )}
        {accountStep === 2 && <div>For my childf</div>}
        {accountStep === 3 && <div>To manage my business</div>}
      </div>
    </>
  );
}
