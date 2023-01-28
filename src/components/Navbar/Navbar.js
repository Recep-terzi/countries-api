import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../redux/countriesSlice";
import "./Navbar.Module.css";
const Navbar = () => {
  const mode = useSelector((state) => state.countries.modeSetting);
  const dispatch = useDispatch();

  const modeClick = () => {
    dispatch(setMode(!mode));
    if (!mode) {
      document.body.style.backgroundColor = "#202d36";
      document.body.style.transition = "500ms background-color";
    } else {
      document.body.style.backgroundColor = "#e2e2e264";
      document.body.style.transition = "500ms background-color";
    }
  };
  return (
    <navbar id={mode ? "darkMode-navbar-section" : "navbar-section"}>
      <div className="container">
        <div className="navbar-logo">Where in the world?</div>
        <div className="navbar-button" onClick={() => modeClick()}>
          <MdOutlineDarkMode />
          Dark Mode
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
