import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";
import { CgMenuGridO, CgSearch } from "react-icons/cg";
import profileIMG from "../images/avenger.jpeg";
import GoogleLogo from "../images/google-logo.png";
import { BiMicrophone } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { AppContext } from "../utils/Context";
import CookieNotification from "../components/CookieNotification";

export default function Home() {
  const { clearText, searchText, setSearchText, signedIn, setSignedIn } =
    useContext(AppContext);
  let history = useNavigate();

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      localStorage.setItem("clone-search-query", searchText);
      history("/search/");
    }
  }

  return (
    <div className="home-container">
      <div className="home-div-top">
        <div className="home-div-top-right">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <CgMenuGridO />
          {signedIn ? (
            <div
              className="profile-image"
              onClick={() => setSignedIn(!signedIn)}>
              <img src={profileIMG} alt="profile" />
            </div>
          ) : (
            <Link to="/signin" className="login-button">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <div className="home-div-middle">
        <div className="google-logo">
          <img src={GoogleLogo} alt="google logo" />
        </div>
        <div className="search-div">
          <div className="search-div-icon-1">
            <CgSearch />
          </div>

          <input
            id="search-query"
            type="text"
            autoFocus
            value={searchText}
            onKeyPress={e => handleEnterKey(e)}
            onChange={e => setSearchText(e.target.value)}
          />

          <div className="clear-text-div">
            {clearText && <MdClear onClick={() => setSearchText("")} />}
          </div>

          <div className="search-div-icon-2">
            <BiMicrophone />
          </div>
        </div>
        <div className="search-buttons-div">
          <div className="search-buttons-container">
            <button className="google-search-button">
              {searchText ? (
                <Link
                  to="/search/"
                  onClick={() =>
                    localStorage.setItem("clone-search-query", searchText)
                  }>
                  Google Search
                </Link>
              ) : (
                <>Google Search</>
              )}
            </button>
            <button className="feeling-lucky-button">I'm Feeling Lucky</button>
          </div>
        </div>
        <div className="languages-div">
          <p>Google offered in: </p>
          <Link to="/">Português (Portugal)</Link>
          <Link to="/">Hausa</Link>
          <Link to="/">Akan</Link>
          <Link to="/">Ewe</Link>
          <Link to="/">Ga</Link>
        </div>
      </div>
      <div className="home-div-bottom">
        <div className="country-div">
          <p>Ghana</p>
        </div>
        <div className="info-section">
          <div className="info-section-1">
            <Link to="/">About</Link>
            <Link to="/">Advertising</Link>
            <Link to="/">Business</Link>
            <Link to="/">How Search works</Link>
          </div>
          <div className="info-section-2">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Settings</Link>
          </div>
        </div>
      </div>
      <CookieNotification />
    </div>
  );
}
