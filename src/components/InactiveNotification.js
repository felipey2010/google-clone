export default function InactiveNotification({ setStep }) {
  return (
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
  );
}
