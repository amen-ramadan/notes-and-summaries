import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Cart from "./components/Cart";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}