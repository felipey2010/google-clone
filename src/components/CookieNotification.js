import CookieConsent from "react-cookie-consent";

export default function CookieNotification() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept and Continue"
      cookieName="google-clone-cookie"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        backgroundColor: "var(--background-color)",
        color: "var(--color)",
        fontSize: "13px",
        border: "1px solid var(--button-color)",
        borderRadius: "10px",
        height: "40px",
      }}>
      <strong>Google Clone:</strong> By continuing to browse or by clicking
      "Accept and Continue", you agree to the storing of cookies on your local
      device to enhance your site experience.
    </CookieConsent>
  );
}
