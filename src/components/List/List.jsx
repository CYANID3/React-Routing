import React from 'react'
import styles from './List.module.css'
import LinkBtn from '../UI/LinkBtn/LinkBtn'

function List(props) {

  return (
    <ul className={styles.list}>
        {
            props.arr.map(element => (
                <li key={element.id} className={styles.list__item}>
                    <h1 className={styles.item__name}>{element.name}</h1>
                    <LinkBtn text="Подробнее >>" to={`/info/${element.id}`}/>
                </li>
            ))
        }
    </ul>
  )
}

export default List