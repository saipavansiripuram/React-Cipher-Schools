import './App.css';
import Display from './components/Display';
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Movie from './components/Movie';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Home></Home>}/>
          <Route path={"/disp"} element={<Display></Display>}/>
          <Route path={"/movie"} element={<Movie></Movie>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
