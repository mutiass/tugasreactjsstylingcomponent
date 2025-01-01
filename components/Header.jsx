import React from "react";
import bg from "../assets/images/bg.png"; // Import gambar dari assets
import "./Header.css"; // Import file CSS

function Header() {
  return (
    <div className="header-container position-relative text-center">
      <img
        src={bg}
        className="img-fluid w-100"
        alt="background"
      />
      <div
        className="header-content position-absolute top-50 start-50 translate-middle text-white"
        style={{ zIndex: 1 }}
      >
        <h1>
          Hello There, I'm Mutia Sakinah <br /> Check Out My Portfolio
        </h1>
      </div>
    </div>
  );
}

export default Header;