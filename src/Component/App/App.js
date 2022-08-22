import { Route, Routes } from "react-router-dom"

import Header from "../Header/Header"
import Home from "../../page/Home"
import Cart from "../../page/Cart"

import "../../scss/app.scss"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
