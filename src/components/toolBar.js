import { NavLink } from "react-router-dom";
import "../styles/toolbar.css";
import { CgSearch } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { BiImage, BiNews, BiDotsVerticalRounded } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";

export default function Toolbar() {
  return (
    <div className="toolbar-main">
      <NavLink to="/">
        <CgSearch />
        <p>All</p>
      </NavLink>
      <NavLink to="/">
        <RiVideoLine />
        <p>Videos</p>
      </NavLink>
      <NavLink to="/">
        <BiImage />
        <p>Images</p>
      </NavLink>
      <NavLink to="/">
        <BiNews />
        <p>News</p>
      </NavLink>
      <NavLink to="/">
        <IoPricetagOutline />
        <p>Shopping</p>
      </NavLink>
      <NavLink to="/">
        <BiDotsVerticalRounded />
        <p>More</p>
      </NavLink>
    </div>
  );
}
