import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-center">
        <div id='logo'><Link to={'/'}>LOGO</Link></div>
        <h4>Privacy Policy</h4>
        <h4>Customer Support</h4>
        <div className="social">
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
        </div>
      </div>

    </div>
  );
}

export default Footer;
