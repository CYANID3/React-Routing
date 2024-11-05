import React from 'react'
import styles from './Title.module.css'

function Title(props) {
    let custom = {
        fontSize: `var(--${props.size})`,
        textAlign: props.side,
        margin: `${props.m}px ${props.m/1.5}px`
    }


  return (
    <h1 style={custom} className={styles.title}>{props.text}</h1>
  )
}

export default Title