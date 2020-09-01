import React, { useReducer, Component } from "react";
import pageState from "./reducers/pageState";
// import AppContext from "./contexts/Appcontext";
import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header"

const App = () => {
  const [state, dispatch] = useReducer(pageState, [
    true,
    false,
    false,
    false,
    false,
  ]);

  return (
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
  );
};

export default App;
