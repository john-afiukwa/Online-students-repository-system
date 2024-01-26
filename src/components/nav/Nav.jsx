import React, { useState } from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Ebsulogo.png";
import { links } from "../../data";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Nav = () => {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const toggleSideBar = () => setIsSideBarActive(!isSideBarActive);

  const UpdateSideMenuTogglingIcons = ({ isActive, handleClickAction }) => {
    if (isActive) {
      return (
        <AiIcons.AiOutlineClose
          onClick={handleClickAction}
          className={"x-bar"}
        />
      );
    }
    return (
      <FaIcons.FaBars onClick={handleClickAction} className={"menu-bar"} />
    );
  };

  return (
    <>
      <div className="navbar">
        <div className="navlogo">
          <Link to="/home">
            <img
              className="logo"
              src={Logo}
              alt="School logo"
              onClick={() => setIsSideBarActive(false)}
            />
          </Link>
        </div>

        <nav className={`${isSideBarActive ? "active" : ""} nav__menu`}>
          {links.map(({ name, path }, index) => {
            return (
              <div
                key={index}
                onClick={() => setIsSideBarActive((prev) => !prev)}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? "active__nav" : "")}
                  to={path}
                >
                  {name}
                </NavLink>
              </div>
            );
          })}

          <UpdateSideMenuTogglingIcons
            isActive={isSideBarActive}
            handleClickAction={toggleSideBar}
          />
        </nav>
      </div>
    </>
  );
};

export default Nav;
