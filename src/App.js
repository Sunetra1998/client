import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Hire from "./components/home/hire/Hire";
import Apply from "./components/home/apply/Apply";
import Candidate from "./components/home/candidate/Candidate";
import ResultSignUp from "./components/home/resultSignUp/ResultSignUp";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/resultSignup" element={<ResultSignUp />} />
      </Routes>
    </div>
  );
}
