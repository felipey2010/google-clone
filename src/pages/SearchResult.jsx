import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../utils/Context";
import "../styles/searchResult.css";
import { CgSearch, CgMenuGridO } from "react-icons/cg";
import { BiMicrophone } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import profileIMG from "../images/avenger.jpeg";
import Toolbar from "../components/toolBar";

export default function SearchResult() {
  const { searchText, clearText, setSearchText } = useContext(AppContext);
  const [refreshPage, setRefreshPage] = useState(false);
  let navigate = useNavigate();

  function handleEnterKey(key) {
    if (key === "Enter") {
      reloadPage();
    }
  }

  function reloadPage() {
    localStorage.setItem("clone-search-query", searchText);
    setRefreshPage(true);
    navigate("/search");
    const timeoutId = setTimeout(() => {
      setRefreshPage(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    setSearchText(localStorage.getItem("clone-search-query") ?? searchText);

    // eslint-disable-next-line
  }, [refreshPage]);

  return (
    <div className="search-result-div">
      <div className="search-result-header">
        <div className="logo-search-bar">
          <Link to="/">
            <p>Google</p>
          </Link>
          <div className="search-input">
            <input
              type="text"
              value={searchText}
              onKeyUp={e => handleEnterKey(e.key)}
              onChange={e => setSearchText(e.target.value)}
            />
            <div className="clear-text">
              {clearText && <MdClear onClick={() => setSearchText("")} />}
            </div>

            <div className="search-icon-1">
              <BiMicrophone />
            </div>
            <div className="search-icon-2">
              <CgSearch />
            </div>
          </div>
        </div>
        <div className="settings-menu">
          <div className="settings-icon-1">
            <IoSettingsOutline />
          </div>
          <div className="settings-icon-2">
            <CgMenuGridO />
          </div>
          <div className="settings-profile">
            <img src={profileIMG} alt="profile" />
          </div>
        </div>
      </div>
      <div className="search-result-toolbar">
        <Toolbar />
        <div className="search-tool">
          <p>Tool</p>
        </div>
        <div className="safe-search">
          <p>SafeSearch on</p>
        </div>
      </div>
      <div>Content</div>
      <div>Footer</div>
    </div>
  );
}
