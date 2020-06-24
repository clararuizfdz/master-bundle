import React from "react";
import {Header} from "./header";
import {Footer} from "./footer";
const classes = require("./layoutStyles.scss");


export const Layout: React.FC = () => {
  return (
    <div className={classes.main}>
        <Header/>
        <Footer/>
    </div>
  );
};