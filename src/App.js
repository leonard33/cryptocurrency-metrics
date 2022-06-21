import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cryptolist from "./components/Cryptolist";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Cryptolist />} />
      </Routes>
    </div>
  );
}

export default App;
