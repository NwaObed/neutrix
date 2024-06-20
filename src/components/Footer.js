import React from "react";

function Footer() {
  const logo = "Neutrix Hub"
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {logo} {currentYear} All rights reserved.</p>
    </footer>
  );
}

export default Footer;
