import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { User } from "./User";
import { GoToHome } from "./GoToHome";

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
          {/* <Route path="/*" element={<GoToHome />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GoToHome />
      </BrowserRouter>
    </div>
  );
}

export default App;
