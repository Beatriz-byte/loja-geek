import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
