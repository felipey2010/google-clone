import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import { AppContext } from "../utils/Context";
import "../styles/searchResult.css";
import { CgSearch, CgMenuGridO } from "react-icons/cg";
import { BiMicrophone } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import profileIMG from "../images/avenger.jpeg";
import Toolbar from "../components/toolBar";

import AllPage from "./innerPages/allPage";
import ImagesPage from "./innerPages/imagesPage";
import VideosPage from "./innerPages/videosPage";
import NewsPage from "./innerPages/newsPage";
import ShoppingPage from "./innerPages/shoppingPage";
import MapsPage from "./innerPages/mapsPage";
import FinancePage from "./innerPages/financePage";
import BooksPage from "./innerPages/booksPage";
import AppMenu from "../components/AppMenu";

export default function SearchResult() {
  const {
    searchText,
    clearText,
    setSearchText,
    signedIn,
    setSignedIn,
    appMenu,
    setAppMenu,
  } = useContext(AppContext);
  const [refreshPage, setRefreshPage] = useState(false);
  let navigate = useNavigate();

  function handleEnterKey(key) {
    if (key === "Enter" && searchText.length !== 0) {
      reloadPage();
    }
  }

  function reloadPage() {
    localStorage.setItem("clone-search-query", searchText);
    setRefreshPage(true);
    navigate("/search/");
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
            <CgMenuGridO onClick={() => setAppMenu(true)} />
          </div>
          {signedIn ? (
            <div
              className="settings-profile"
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
      {appMenu && (
        <div
          className="app-menu-container-2"
          onMouseLeave={() => setAppMenu(false)}>
          <AppMenu />
        </div>
      )}
      <div className="search-result-toolbar">
        <Toolbar />
        <div className="search-tool">
          <p>Tools</p>
        </div>

        <div className="safe-search">{signedIn && <p>SafeSearch on</p>}</div>
      </div>
      <div className="search-content">
        <Routes>
          <Route path="/search" element={<AllPage />} />
          <Route path="/search/images" element={<ImagesPage />} />
          <Route path="/search/videos" element={<VideosPage />} />
          <Route path="/search/news" element={<NewsPage />} />
          <Route path="/search/shopping" element={<ShoppingPage />} />
          <Route path="/search/finance" element={<FinancePage />} />
          <Route path="/search/maps" element={<MapsPage />} />
          <Route path="/search/books" element={<BooksPage />} />
        </Routes>
      </div>
      <div>Footer</div>
    </div>
  );
}
