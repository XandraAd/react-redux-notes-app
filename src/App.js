import React, { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import noteReducer from "./store/noteReducer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

const store = createStore(noteReducer);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <Provider store={store}>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Header handleToggleDarkMode={handleToggleDarkMode} />
        <NotesList />
      </div>
    </Provider>
  );
};

export default App;
