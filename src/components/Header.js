import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <>
      <div className="header">
        <div className="header_text">
          <h1>Notebook App</h1>
        </div>
        <button onClick={handleToggleDarkMode} className="btn">
          Toggle Mode
        </button>
      </div>
    </>
  );
};

export default Header;
