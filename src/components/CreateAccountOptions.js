export default function CreateAccountOptions({
  setStep,
  setAccountStep,
  loadProgressBar,
  checkInactivity,
  setActivateOptions,
}) {
  function handleStep(value) {
    checkInactivity();
    loadProgressBar(2000);
    setStep(9);
    setAccountStep(value);
  }

  return (
    <div
      className="account-options-container"
      onMouseLeave={() => setActivateOptions(false)}>
      <p className="account-options-items" onClick={() => handleStep(1)}>
        For myself
      </p>
      <p className="account-options-items" onClick={() => handleStep(2)}>
        For my child
      </p>
      <p className="account-options-items" onClick={() => handleStep(3)}>
        To manage my business
      </p>
    </div>
  );
}
