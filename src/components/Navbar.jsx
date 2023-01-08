import React from "react";
const Navbar = () => {
  const Photo = `camera1.png`;
  return (
    <div className="navbar">
      <div className="blockfirst">
        <div className="navelement">
          About me
        </div>
        <div className="navelement">
          My portfolio
        </div>
        <div className="navelement">
          Contact me
        </div>
      </div>
      <img src={Photo} alt="photo" className="camera" />
      <div className="blocksecond">
        <div className="navelement">
          <a href="">Facebook</a>
        </div>
        <div className="navelement">
          <a href="">Instagram</a>
        </div>
        <div className="navelement">
          <a href="">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
