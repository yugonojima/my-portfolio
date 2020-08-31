import React, { useReducer } from "react";
import "./App.css";
import pageState from "./reducers/pageState";
import AppContext from "./contexts/Appcontext";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header'
const App = () => {
  const [state, dispatch] = useReducer(pageState, [
    true,
    false,
    false,
    false,
    false,
  ]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div >
        <Router>
          <Header />
        </Router>
        <div className="top">YUGO NOJIMA</div>
        <div className="About-area"></div>
        <div className="Thought-area"></div>
        <div className="Works-area"></div>
        <div className="Contact-area"></div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
