import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./views/home/Home";
import Events from "./views/events/Events";
import EventDetail from "./views/events/EventDetail";
import OpeningHours from "./views/open/OpeningHours";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kalender" element={<Events />} />
        <Route path="/events/nat-paa-museet" element={<EventDetail />} />
        <Route path="/aabningstider" element={<OpeningHours />} />
        <Route path="/aabningstider" element={<OpeningHours />} />
        <Route path="/kalender" element={<Events />} />
        <Route path="/events/:slug" element={<EventDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;