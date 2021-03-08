import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../store/types/UserTypes";
import './Navbar.css'
const Navbar = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  const { user } = useSelector((state) => state.AuthReducer);

  const logout = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: "LOGOUT" });
  };
  const Links = user ? (
    <div className="logout">
      <li>
        <Link to="/create">CreatePost</Link>
      </li>
      <li>
        <Link style={{ padding: 30 }} to="/dashboard">
          {user.name}
        </Link>
      </li>
      <Link to="/">
        <span onClick={logout}>logout</span>
      </Link>
    </div>
  ) : (
    <div></div>
  );

  return (
    <>
      <nav>
        <div className="logo">
          <h3>Hedefizik</h3>
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            <Link onClick={boxHandler} to="/">
              ANASAYFA
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to="/about">
              HAKKIMIZDA
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to="/egitim">
              Egitim
            </Link>
          </li>
          <li className="button-btn">
            <i class="fas fa-horizontal-rule"></i>
          </li>
          <li>
            <Link onClick={boxHandler} to="/giris">
              Giriş
            </Link>
          </li>
          <Link
            style={{ textDecoration: "none" }}
            onClick={boxHandler}
            to="/egitim"
          ></Link>
          <Link style={{ textDecoration: "none" }} to="/kayitol">
            <a className="start-btn" href="/kayitol">
              Başla
            </a>
          </Link>
        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {Links}
      </nav>
    </>
  );
};

export default Navbar;
