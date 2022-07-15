import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Registration from "./components/Registration";
import Services from "./components/Services";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
