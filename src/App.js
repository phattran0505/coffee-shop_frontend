import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Gallery from "./pages/gallery/Gallery";
import Reservation from "./components/reservation/Reservation";
import MenuDetail from "./pages/menuDetail/MenuDetail";
import Footer from "./pages/footer/Footer";
import PayMent from "./components/payment/PayMent";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/menu/:id" element={<MenuDetail />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/checkout" element={<PayMent />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
