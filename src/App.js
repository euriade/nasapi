import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Example from "./pages/Example";
import { Link, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <ul className="hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
