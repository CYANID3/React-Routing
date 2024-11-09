import React, { useEffect, useState } from 'react'
import styles from './InfoPage.module.css'
import Title from '../../components/UI/Title/Title'
import Text from '../../components/UI/Text/Text'
import List from '../../components/List/List'

function InfoPage() {
    const [person, setPerson] = useState([])
    useEffect(() => {
        fetch('/database/info.json')
        .then(response => response.json())
        .then(data => {
            setPerson(data.person)
        })
    }, [])
  return (
    <>
    <div className={styles.content}>
    <Title text="Динамические маршруты" size="xl" side="left" m="20"/>
    <Text text="Данная страница служит для демонстрации динамических роутов. Например у нас есть список работников."/>
    <List arr={person}/>
    </div>
    </>
  )
}

export default InfoPage