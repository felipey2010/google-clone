import { useContext } from "react";
import { AppContext } from "../utils/Context";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function ForgotPasswordVerification({
  randomNumber,
  setStep,
  checkInactivity,
}) {
  const { userEmail } = useContext(AppContext);
  return (
    <>
      <h2>Account Recovery</h2>
      <p>This helps show that this account really belongs to you</p>
      <div
        className="email-container"
        onClick={() => {
          checkInactivity();
          setStep(0);
        }}>
        <CgProfile />
        <p>{userEmail}</p>
        <RiArrowDownSLine />
      </div>
      <div className="random-number">
        <p>{randomNumber}</p>
      </div>
      <div className="check-phone-1">
        <p>Check your phone</p>
      </div>
      <div className="check-phone-2">
        <p>
          Google sent a notification to your phone. Tap <strong>Yes</strong> on
          the notification, then tap <strong>{randomNumber}</strong> on your
          phone to verify it’s you.
        </p>
      </div>
      <div className="forgot-password-buttons">
        <button>Resend it</button>
        <button>I don't have my phone</button>
      </div>
    </>
  );
}
