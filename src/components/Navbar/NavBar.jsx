import React, { useState, useEffect } from "react";
import css from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import logo from "../../assets/logo.jpg";
const NavBar = () => {
  const [isMenuOpen, setMenuOPen] = useState(false);
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const handleMenuClose = () => {
    setMenuOPen(!isMenuOpen);
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("AuthData", JSON.stringify(res.data));
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.nav}>
          <div className={css.menu_icon_box}>
            <span
              onClick={handleMenuClose}
              className={`material-symbols-outlined ${css.nav_menu_icon}`}
            >
              menu
            </span>
          </div>
          {/* <NavLink to="/mentor">Hello</NavLink> */}

          <div className={css.mainNav}>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className={css.center_box}>
              <div className={css.nav_item_box}>
                <NavLink div className={css.nav_item} to="/">
                  <span>Home</span>
                </NavLink>
                <NavLink className={css.nav_item} to="mentor">
                  <span>Mentor</span>
                </NavLink>
                <NavLink className={css.nav_item} to="about">
                  <sp>About</sp>
                </NavLink>
                <NavLink className={css.nav_item} to="courses">
                  <sp>Courses</sp>
                </NavLink>
                <NavLink className={css.nav_item} to="contact-us">
                  <span>Contact Us</span>
                </NavLink>
                <NavLink className={css.nav_item} to="talk">
                  <span>Talk</span>
                </NavLink>
                {/* <NavLink className={css.nav_item} to="register">
                  <span>Register</span>
                </NavLink> */}
              </div>
            </div>

            <div>
              {profile ? (
                <button onClick={logOut} className={css.login_button}>
                  Log out
                </button>
              ) : (
                <GoogleLogin
                  useOneTap
                  auto_select
                  onSuccess={login}
                  onError={login}
                />
              )}
              {/* <button className={css.login_button}>Login</button> */}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleMenuClose}
        style={{ display: isMenuOpen === true ? "block" : "none" }}
        className={`${css.sidebar}`}
      >
        <div className={css.sidebar_logo_box}>
          <div className={css.siderbar_logo}>LOGO</div>
          <div className={css.menu_close_icon}>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        <div className={css.sidebar_item}>Home</div>
        <div className={css.sidebar_item}>Mentors</div>
        <div className={css.sidebar_item}>About</div>
        <div className={css.sidebar_item}>Contact Us</div>
        <div className={css.sidebar_item}>Talk to Us</div>
        <div className={css.sidebar_btn_box}>
          {profile ? (
            <button onClick={logOut} className={css.login_button}>
              Log out
            </button>
          ) : (
            <GoogleLogin
              useOneTap
              auto_select
              onSuccess={login}
              onError={login}
            />
          )}
          {/* <button className={css.login_button}>Login</button> */}
        </div>
      </div>

      <div
        className="overlay"
        onClick={handleMenuClose}
        style={{
          display: isMenuOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 500, // Ensure it's above other content but below sidebar
        }}
      />
    </>
  );
};

export default NavBar;
