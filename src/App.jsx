import { Routes, Route } from "react-router-dom";
import Home from "./pages/AppHome/index";
import Blog from "./pages/Blog/index";
import * as C from "./styles/styleApp";

function App() {
  return (
    <C.Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </C.Container>
  );
}

export default App;
