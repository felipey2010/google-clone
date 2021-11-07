import React from "react";
import { Link } from "react-router-dom";
import "../styles/Page404.css";
import { useLocation } from "react-router-dom";

export default function Page404() {
  let location = useLocation();

  return (
    <div className="not-found-main">
      <div className="not-found-container">
        <p className="not-found-text">404</p>
        <p className="not-found-description">
          Page <strong>{location.pathname} not found</strong>
        </p>
        <button className="not-found-button">
          Return to the <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
}
