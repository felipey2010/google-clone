import { useState } from "react";

export default function NameSection({ checkInactivity, nextStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
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
  );
}
