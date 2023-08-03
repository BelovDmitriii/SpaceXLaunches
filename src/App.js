import React from "react";
import Navigation from "./components/Navigation/navigation.jsx";
import MainPage from "./components/MainPage/mainPage.jsx";
import { Provider } from "react-redux";
import { store } from "./reducers/store.js";

const App = () =>{
  return (
    <Provider store={store}>
      <div style={{textAlign:"center"}}>
        <Navigation />
        <MainPage />
      </div>
    </Provider>
  )
}

export default App