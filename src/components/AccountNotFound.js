export default function AccountNotFound({ setStep }) {
  return (
    <>
      <div className="inactive-container-1">
        <h3>No account found</h3>
        <p>There’s no Google Account with the info you provided.</p>
      </div>
      <div className="inactive-container-2">
        <button onClick={() => setStep(0)}>Try again</button>
      </div>
    </>
  );
}
