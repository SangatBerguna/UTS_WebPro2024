import React from "react";

// Atom: Input Box
function InputBox() {
  return <input type="text" placeholder="Masukkan teks..." />;
}

// Atom: Button
function Button() {
  return <button>Kirim</button>;
}

// Molecule: Form (Gabungan InputBox dan Button)
function Form() {
  return (
    <div>
      <InputBox />
      <Button />
    </div>
  );
}

// App Component (Menggunakan Form)
function App() {
  return (
    <div>
      <h1>Contoh Atomic Design</h1>
      <Form />
    </div>
  );
}

export default App;