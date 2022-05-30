import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/12072057/pexels-photo-12072057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="headerImg"
      />
    </div>
  );
};

export default Header;
