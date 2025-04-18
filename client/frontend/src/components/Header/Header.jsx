import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const getMenuPosition = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" }; //this sets the position of the menu out of the screen depending upon the value of menuOpen
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings inner-width h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuPosition(menuOpen)}>
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:vedant.gadgegsis@gmail.com">Contact</a>

            {/* login button */}
            {
              !isAuthenticated ?
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button> : <div><ProfileMenu user={user} logout={logout}/></div>
            }
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
