import React from "react";

import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img
            className="header-logo"
            src="\images\MeetMyCoach Logo.svg"
            alt="CTA Logo One"
          />
          <div className="search">
            <button className="menu-button">
              <img src="\images\Group 1072.svg" alt="search button" />
            </button>
            <input type="text" placeholder="Search for coaches" />
            <button className="search-button">
              <img src="\images\Path 3.svg" alt="search button" />
            </button>
          </div>
        </div>
        <div className="header-right">
          <a href="/#">HOW IT WORKS</a>
          <a className="border-button" href="/#">
            FIND A COACH
          </a>
          <a className="hightlight-button" href="/#">
            JOIN AS A COACH
          </a>
          <a href="/#">LOGIN</a>
        </div>
      </div>
    </header>
  );
}
