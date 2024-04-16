import "./App.css";
import { Route, Routes, router } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
