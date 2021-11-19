import { NavLink } from "react-router-dom";
import "../styles/toolbar.css";
import { CgSearch } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { BiImage, BiNews, BiDotsVerticalRounded } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";

export default function Toolbar() {
  return (
    <div className="toolbar-main">
      <NavLink to="/search" activeClassName="active-toolbar">
        <CgSearch />
        <p>All</p>
      </NavLink>
      <NavLink to="/search/images" activeClassName="active-toolbar">
        <BiImage />
        <p>Images</p>
      </NavLink>
      <NavLink to="/search/videos" activeClassName="active-toolbar">
        <RiVideoLine />
        <p>Videos</p>
      </NavLink>

      <NavLink to="/search/news" activeClassName="active-toolbar">
        <BiNews />
        <p>News</p>
      </NavLink>
      <NavLink to="/search/shopping" activeClassName="active-toolbar">
        <IoPricetagOutline />
        <p>Shopping</p>
      </NavLink>
      <NavLink to="/search/finance" activeClassName="active-toolbar">
        <BiDotsVerticalRounded />
        <p>More</p>
      </NavLink>
    </div>
  );
}
