import "./App.css";
import List from "./Components/List";
import Shakes from "./Components/Shakes";
import Breakfast from "./Components/Breakfast";
import Lunch from "./Components/Lunch";
import { data } from "./data";
import {Route,Routes,Link} from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1 className="heading">Our Menu</h1>
        <hr />
        <nav className="menu">
          <ul className="list">
            <li> <Link to="/">All</Link> </li>
            <li> <Link to="/breakfast">Breakfast</Link> </li>
            <li> <Link to="/lunch">Lunch</Link> </li>
            <li> <Link to="/shakes">Shakes</Link> </li>
          </ul>
          
         
         
        </nav>
      </header>
      <div className="flex">
      <Routes>
          <Route exact path='/'  component={List} element={<List/>} />
          <Route exact path='/breakfast' element={<Breakfast/>} />
          <Route exact path='/lunch' element={<Lunch/>} />
          <Route exact path='/shakes' element={<Shakes/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
