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
import AppMenu from "../components/AppMenu";

export default function Home() {
  const {
    clearText,
    searchText,
    setSearchText,
    signedIn,
    setSignedIn,
    appMenu,
    setAppMenu,
  } = useContext(AppContext);
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
          <Link to="/" className="home-link hovered">
            Gmail
          </Link>
          <Link to="/" className="home-link hovered">
            Images
          </Link>
          <CgMenuGridO onClick={() => setAppMenu(!appMenu)} />
          {signedIn ? (
            <div
              className="profile-image"
              onClick={() => setSignedIn(!signedIn)}>
              <img src={profileIMG} alt="profile" />
            </div>
          ) : (
            <Link to="/signin" className="login-button home-link">
              Sign In
            </Link>
          )}
        </div>
      </div>
      {appMenu && (
        <div
          className="app-menu-container"
          onMouseLeave={() => setAppMenu(false)}>
          <AppMenu />
        </div>
      )}
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
                  className="search-button-link"
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
          <p className="languages-div-p">Google offered in: </p>
          <Link to="/" className="languages-div-a">
            Português (Portugal)
          </Link>
          <Link to="/" className="languages-div-a">
            Hausa
          </Link>
          <Link to="/" className="languages-div-a">
            Akan
          </Link>
          <Link to="/" className="languages-div-a">
            Ewe
          </Link>
          <Link to="/" className="languages-div-a">
            Ga
          </Link>
        </div>
      </div>
      <div className="home-div-bottom">
        <div className="country-div">
          <p className="country-div-p">Ghana</p>
        </div>
        <div className="info-section">
          <div className="info-section-1">
            <Link to="/" className="info-section-a info-section-1-a">
              About
            </Link>
            <Link to="/" className="info-section-a info-section-1-a">
              Advertising
            </Link>
            <Link to="/" className="info-section-a info-section-1-a">
              Business
            </Link>
            <Link to="/" className="info-section-a info-section-1-a">
              How Search works
            </Link>
          </div>
          <div className="info-section-2">
            <Link to="/" className="info-section-a info-section-2-a">
              Privacy
            </Link>
            <Link to="/" className="info-section-a info-section-2-a">
              Terms
            </Link>
            <Link to="/" className="info-section-a info-section-2-a">
              Settings
            </Link>
          </div>
        </div>
      </div>
      <CookieNotification />
    </div>
  );
}
