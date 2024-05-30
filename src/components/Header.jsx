import React from "react";

const Header = () => {
  return (
    <>
    <h1 className="header-h1" style={{lineHeight:"6rem", padding:"0 3rem"}}>Family Wellness</h1>
    <p className="header-p" style={{lineHeight:"4rem", padding:"0 3rem"}}>MASSAGE THERAPY</p>
    <div className="nav-links">
      <div>
        <span>Home</span>
      </div>
      <div>
        <span>About</span>
      </div>
      <div>
        <span>Services</span>
      </div>
      <div>
        <span>FAQ</span>
      </div>
      <div>
        <span>Contact</span>
      </div>
    </div>
    </>
  );
};

export default Header;
