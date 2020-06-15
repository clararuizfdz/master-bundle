import React from 'react';
const classes = require("./footerStyles.scss");

export const Footer: React.FC = () => {
  return (   
      <div className={classes.footer}>
        <span>{process.env.ENVIRONMENT} Environment</span>
      </div>
  );
};