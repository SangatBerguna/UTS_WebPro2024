import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Selamat Datang di Websiteku</h1>} />
        <Route path="/about" element={<h1>Ini Tentang Saya</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;