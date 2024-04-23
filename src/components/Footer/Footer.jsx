// Footer.js
import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footer_part_section}>
          <h1 className={css.logo}>Logo</h1>
          <p className={css.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            illo vitae neque impedit natus assumenda quidem in, dolor, suscipit
            quod, nihil id modi ratione cupiditate consequuntur amet fugiat
            placeat deleniti.
          </p>
        </div>
        <div className={css.footer_part_section}>
          <h1 className={css.footer_title}>Pages</h1>

          <div className={css.footer_page_box}>
            <NavLink div className={css.page_item} to="/">
              <span>Home</span>
            </NavLink>
            <NavLink className={css.page_item} to="mentor">
              <span>Mentor</span>
            </NavLink>
            <NavLink className={css.page_item} to="about">
              <sp>About</sp>
            </NavLink>
            <NavLink className={css.page_item} to="contact-us">
              <span>Contact Us</span>
            </NavLink>
            <NavLink className={css.page_item} to="talk">
              <span>Talk</span>
            </NavLink>
          </div>
        </div>
        <div className={css.footer_part_section}>
          <h1 className={css.footer_title}>Contact us</h1>
          <p>Email: sriram@unimitra.in</p>
          <p>Phone: 8794321078</p>
        </div>
      </div>
      <p>© 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
