import React from 'react'
import styles from './AboutPage.module.css'
import Title from '../../components/UI/Title/Title'
import Text from '../../components/UI/Text/Text'
import CustomLink from '../../components/UI/CustomNavLink/CustomNavLink'
import { Navigate, Outlet } from 'react-router-dom'

function AboutPage() {
  return (
    <>
    <Title text="О Нас" size="xl" side="left" m="20"/>
    <Text text="Данная страница служит для демонстрации вложенных роутов."/>
    <div className={styles.info}>
        <div className={styles.iLeft}>
        <CustomLink to="/about/routes" text="Роуты" />
        <CustomLink to="/about/settings" text="Настройки" />
        <CustomLink to="/about/text" text="Текст" />
        <CustomLink to="/about/qst" text="Вопросы" />
        <CustomLink to="/about/end" text="Конец" />
        </div>
        <div className={styles.iRight}>
            <Outlet/>
        </div>
    </div>
    
    </>
  )
}

export default AboutPage