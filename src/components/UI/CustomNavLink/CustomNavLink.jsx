import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CustomNavLink.module.css";

function CustomLink(props) {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)}
        to={props.to}>
          
          {props.text}
          
          </NavLink>
    </>
  );
}

export default CustomLink;
