import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  //In ordet o be able to get the active class when clicking on a link, use the NavLink component. using only Link will not give that active class
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> this below is the same  */}
          <Route index exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
