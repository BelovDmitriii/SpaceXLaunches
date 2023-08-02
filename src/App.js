import React from "react";
import Navigation from "./components/Navigation/navigation.jsx";
import MainPage from "./components/MainPage/mainPage.jsx";

const App = () =>{
    return (
      <div style={{textAlign:"center"}}>
        <Navigation />
        <MainPage />
      </div>
    )
}

export default App