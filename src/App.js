import { Routes, Route } from "react-router-dom";
import "./App.css";
import Coinsdetails from "./components/Coinsdetails";
import Cryptolist from "./components/Cryptolist";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Cryptolist />} />
        <Route path="/cryptocoin/:coinid" element={<Coinsdetails />} />
      </Routes>
    </div>
  );
}

export default App;
