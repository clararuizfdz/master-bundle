import React from "react";
const logo = require('./content/logo_1.png');

export const Header: React.FC = () => {
  return (
    <div className="main" id="main">
      <img src={logo} className="logo" />
      <span>Hello World!</span>
    </div>
  );
};