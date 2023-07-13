import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import TestimoniPage from "./pages/TestimoniPage";
import KetenPage from "./pages/KetenPage";
import FaqPage from "./pages/FaqPage";
import PaketHampers from './pages/PaketHampers';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Menu" Component={MenuPage} />
        <Route path="/Testimoni" Component={Login} />
        <Route path="/Faq" Component={FaqPage} />
        <Route path="/Keten" Component={KetenPage} />
        <Route path="/Paket" Component={PaketHampers} />
        <Route path="/Login" Component={TestimoniPage} />
        <Route path="/Register" Component={Register} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App
