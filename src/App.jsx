import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import QuiSommeNous from "./pages/QuiSommeNous"
import Prestations from "./pages/Prestations"
import Tarifs from "./pages/Tarifs"
import Contact from "./pages/Contact"
import CGU from "./pages/CGU"
import CGV from "./pages/CGV"
import MentionsLegales from "./pages/MentionsLegales"

import { Routes, Route } from 'react-router-dom';





function App() {
  return (
  <div>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<QuiSommeNous />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    <Footer />
  </div>
  );
}

export default App