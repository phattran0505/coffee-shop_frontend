import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Menu from "./pages/menu/Menu";
import Gallery from "./pages/gallery/Gallery";
import Offer from "./components/offer/Offer";
import Chefs from "./pages/chefs/Chefs";
import Reservation from "./components/reservation/Reservation";
import Testimonials from "./pages/testimonials/Testimonials";
import Footer from "./pages/footer/Footer";
import Order from "./pages/order/Order";

import { Route, Routes } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <Offer />
      <Chefs />
      <Reservation />
      <Testimonials />
      <Footer />
      <Routes>
        <Route path="/order" element={<Order/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
