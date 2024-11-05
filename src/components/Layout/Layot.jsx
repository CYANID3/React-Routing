import React from "react";
import styles from "./Layout.module.css";
import Nav from "../Nav/Nav";
import CustomLink from "../UI/CustomNavLink/CustomNavLink";

function Layot(props) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Nav>
              <CustomLink to="/" text="Главная" />
              <CustomLink to="/info" text="Информация" />
              <CustomLink to="/about" text="О нас" />
            </Nav>
          </div>
          <main className={styles.main}>
            {props.children}
          </main>
        </div>
      </div>
    </>
  );
}

export default Layot;
