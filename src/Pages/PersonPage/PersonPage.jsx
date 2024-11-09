import React, { useEffect, useState } from "react";
import styles from "./PersonPage.module.css";
import { useParams } from "react-router-dom";
import LinkBtn from "../../components/UI/LinkBtn/LinkBtn";

function PersonPage() {
  const { personId } = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetch("./database/info.json")
      .then((response) => response.json())
      .then((data) => {
        const item = data.person.find((e) => e.id == personId);
        setPerson(item);
      });
  }, []);
  return (
    <>
      <div className={styles.person__block}>
        <h3 className={styles.id}>Идентификационный номер: {person.id}</h3>
        <h1>Имя: {person.name}</h1>
        <h2>Возраст: {person.age} лет</h2>
        <h2>Должность: {person.prof}</h2>
        <h2>Оклад: {person.okl} сом</h2>
        <h2>Страховка: {person.str ? "Есть" : "Нет"}</h2>

        <LinkBtn text="<< Назад" to="/info" />
      </div>
    </>
  );
}

export default PersonPage;
