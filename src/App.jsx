import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { User } from "./components/User";
import { GoToHomeBTN } from "./components/GoToHomeBTN";

const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <GoToHomeBTN />
      </BrowserRouter>
    </div>
  );
}

export default App;
