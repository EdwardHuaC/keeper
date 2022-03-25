import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Hua Cong All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
