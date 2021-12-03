import { MdDuo } from "react-icons/md";
import { AiOutlineGoogle, AiOutlineFileProtect } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaGoogleDrive, FaGooglePlay } from "react-icons/fa";
import {
  SiGoogletranslate,
  SiGooglenews,
  SiGooglemaps,
  SiYoutube,
  SiGmail,
  SiGooglemeet,
  SiGooglechat,
  SiGooglecalendar,
  SiGooglephotos,
} from "react-icons/si";

export default function AppMenu() {
  return (
    <div className="app-grid">
      <div className="grid-item">
        <AiOutlineFileProtect className="grid-item-icon" />
        <p className="grid-item-p">Account</p>
      </div>
      <div className="grid-item">
        <AiOutlineGoogle className="grid-item-icon" />
        <p className="grid-item-p">Search</p>
      </div>
      <div className="grid-item">
        <SiGooglemaps className="grid-item-icon" />
        <p className="grid-item-p">Maps</p>
      </div>
      <div className="grid-item">
        <SiYoutube className="grid-item-icon" />
        <p className="grid-item-p">YouTube</p>
      </div>
      <div className="grid-item">
        <FaGooglePlay className="grid-item-icon" />
        <p className="grid-item-p">Play</p>
      </div>
      <div className="grid-item">
        <SiGooglenews className="grid-item-icon" />
        <p className="grid-item-p">News</p>
      </div>
      <div className="grid-item">
        <SiGmail className="grid-item-icon" />
        <p className="grid-item-p">Gmail</p>
      </div>
      <div className="grid-item">
        <SiGooglemeet className="grid-item-icon" />
        <p className="grid-item-p">Meet</p>
      </div>
      <div className="grid-item">
        <SiGooglechat className="grid-item-icon" />
        <p className="grid-item-p">Chat</p>
      </div>
      <div className="grid-item">
        <IoMdContact className="grid-item-icon" />
        <p className="grid-item-p">Contacts</p>
      </div>
      <div className="grid-item">
        <FaGoogleDrive className="grid-item-icon" />
        <p className="grid-item-p">Drive</p>
      </div>
      <div className="grid-item">
        <SiGooglecalendar className="grid-item-icon" />
        <p className="grid-item-p">Calendar</p>
      </div>
      <div className="grid-item">
        <SiGoogletranslate className="grid-item-icon" />
        <p className="grid-item-p">Translate</p>
      </div>
      <div className="grid-item">
        <SiGooglephotos className="grid-item-icon" />
        <p className="grid-item-p">Photos</p>
      </div>
      <div className="grid-item">
        <MdDuo className="grid-item-icon" />
        <p className="grid-item-p">Duo</p>
      </div>
    </div>
  );
}
