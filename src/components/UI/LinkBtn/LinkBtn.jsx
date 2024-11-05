import React from "react";
import styles from './LinkBtn.module.css'
import { Link } from "react-router-dom";

function LinkBtn(props) {
  return (
    <>
      <Link className={styles.link__btn} to={props.to}>{props.text}</Link>
    </>
  );
}

export default LinkBtn;
