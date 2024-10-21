import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footerContainer">

        {/* About Section */}
        <div className="footerMenuDiv">
          <div className="singleGrid">
            <ul className="footerUl">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Help Center</li>
              <li className="footerLi">Trust and Safety</li>
            </ul>
          </div>
        </div>

        {/* Footer Lower Section */}
        <div className="lowerSection">
          <p>2024 All rights reserved <a href="mailto:h190334n@hit.ac.zw">h190334n@hit.ac.zw</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;