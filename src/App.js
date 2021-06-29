import { Fragment } from "react";
import Header from './Components/Layout/Header'
import Meal from "./Components/Meals/Meal";

function App() {
  return (
    <Fragment>
     <Header/>
     <Meal></Meal>
    </Fragment>
  );
}

export default App;
