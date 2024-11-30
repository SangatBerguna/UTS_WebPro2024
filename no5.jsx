import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Mendapatkan parameter dinamis dari URL
  return <h1>Detail Produk untuk ID Produk: {id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;