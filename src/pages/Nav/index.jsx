import React, { useState } from "react";
import "./style.css"; // App.css 파일에 네비게이션 바에 필요한 스타일을 작성합니다.

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar" onClick={toggleMenu}>
      <div className="nav-logo">ResponsiveNavbar</div>
      <div className={`nav-menu ${showMenu ? "active" : ""}`}>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>FAQ</div>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars">더보기</i>
      </div>
    </nav>
  );
}
