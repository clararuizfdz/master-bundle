import React from "react";
import {Header} from "./header";
import {Footer} from "./footer";


export const Layout: React.FC = () => {
  return (
    <div className="main" id="main">
        <Header/>
        <Footer/>
    </div>
  );
};