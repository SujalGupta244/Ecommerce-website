import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-center">
        <div id='logo'>Logo</div>
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
