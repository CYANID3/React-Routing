import React from 'react'
import styles from './Nav.module.css'

function Nav(props) {
  return (
    <>
    <nav className={styles.nav}>
        <ul className={styles.nav__links}>
        {props.children}
        </ul>
    </nav>
    </>
  )
}

export default Nav