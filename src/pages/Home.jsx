import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { CgMenuGridO } from "react-icons/cg";
import profileIMG from "../images/avenger.jpeg";
import GoogleLogo from "../images/google-logo.png";
import { CgSearch } from "react-icons/cg";
import { BiMicrophone } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { AppContext } from "../utils/Context";

export default function Home() {
  const { clearText, searchText, setSearchText } = useContext(AppContext);

  return (
    <div className="home-container">
      <div className="home-div-top">
        <div className="home-div-top-right">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <CgMenuGridO />
          <div className="profile-image">
            <img src={profileIMG} alt="profile" />
          </div>
        </div>
      </div>
      <div className="home-div-middle">
        <img src={GoogleLogo} alt="google logo" />
        <div className="search-div">
          <div className="search-div-icon">
            <CgSearch />
          </div>

          <input
            type="text"
            autoFocus
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

          <div className="clear-text-div">
            {clearText && <MdClear onClick={() => setSearchText("")} />}
          </div>

          <div className="search-div-icon">
            <BiMicrophone />
          </div>
        </div>
        <div className="search-buttons-div">
          <div className="search-buttons-container">
            <button className="google-search-button">Google Search</button>
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
    </div>
  );
}
