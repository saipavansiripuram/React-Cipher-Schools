import "./App.css";
//This is the parent component
//Create a child component under app.js file pass company name and all navigation text for buttons using props

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";
import About from "./components/About";
import AboutId from "./components/AboutId";
import Home from "./components/Home";


function App() {
  //defining an object name //used for props
  //Lifecycle of React 
  //Mounting: Birth to component//componentDidMount()
  // render 
  //Updating:to update the component
  //Unmountig: destroying/death
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
