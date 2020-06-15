import React from 'react';

const logo = require("./content/source.gif");

export const Footer: React.FC = () => {
  return (   
      <div className="footer">
        <span>{process.env.ENVIRONMENT} Environment</span>
      </div>
  );
};