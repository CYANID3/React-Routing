import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Layot from "./components/Layout/Layot";
import InfoPage from "./Pages/InfoPage/InfoPage";
import PersonPage from "./Pages/PersonPage/PersonPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Info from "./components/Info/Info";
import Title from "./components/UI/Title/Title";

function App() {
  const [text, setText] = useState([])
  useEffect(() => {
    fetch("/database/other.json")
    .then(response => response.json())
    .then(data => {
      setText(data.text)
    })
  }, [])

  return (
    <>
      <Layot>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/info" element={<InfoPage/>} />
          <Route path="/info/:personId" element={<PersonPage/>} />
          <Route path="/about" element={<AboutPage/>}>
          <Route index element={<Navigate to="/about/routes" replace/>}/>
            {
              text.map(e => (
                <Route key={e.url} path={e.url} element={<Info title={e.title} text={e.text}/>} />
              )
            )
          }
          </Route>
          <Route path="/*" element={<Title text="Cтраница не найдена" size="xl" side="center" m="20"/>} />
        </Routes>
      </Layot>
    </>
  );
}
export default App;
