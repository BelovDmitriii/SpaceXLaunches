import React from "react";
import Navigation from "./components/Navigation/navigation.jsx";
import MainPage from "./components/MainPage/mainPage.jsx";
import { Provider } from "react-redux";
import { store } from "./reducers/store.js";
import './App.css';

const App = () =>{
  return (
    <Provider store={store}>
      <div className="main_page__wrapper">
        <Navigation />
        <MainPage />
      </div>
    </Provider>
  )
}

export default App