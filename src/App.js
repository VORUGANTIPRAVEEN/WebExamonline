import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/App.css";
import Exam from "./components/Exam";
import Header from "./components/Header";
import UserData from "./components/UserData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/user" element={<UserData />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
