import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import QuiSommeNous from "./pages/QuiSommeNous"
import Prestations from "./pages/Prestations"
import Tarifs from "./pages/Tarifs"
import Contact from "./pages/Contact"

import { Routes, Route } from 'react-router-dom';





function App() {
  return (
  <div>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<QuiSommeNous />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
  </div>
  );
}

export default App