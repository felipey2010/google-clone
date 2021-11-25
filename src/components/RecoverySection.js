export default function RecoverySection({
  setRecoveryDetails,
  checkInactivity,
  handleForgotEmail,
  recoveryDetails,
}) {
  return (
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
  );
}
