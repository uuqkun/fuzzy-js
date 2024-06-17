import React, { useState } from "react";
import tentukanHargaJual from "../helper/phone-price/determinePrice.js";

const PonselBekasForm = () => {
  const [kondisi, setKondisi] = useState(75);
  const [harga, setHarga] = useState(3000);
  const [kelengkapan, setKelengkapan] = useState(70);
  const [hasil, setHasil] = useState(0);

  const hitungHargaJual = () => {
    const hargaJual = tentukanHargaJual(kondisi, harga, kelengkapan);
    setHasil(hargaJual.toFixed(2));
  };

  return (
    <div>
      <h1>Penentuan Harga Jual Ponsel Bekas</h1>
      <label>
        Kondisi:
        <input
          type="number"
          value={kondisi}
          onChange={(e) => setKondisi(e.target.value)}
        />
      </label>
      <br />
      <label>
        Harga Pasaran:
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
      </label>
      <br />
      <label>
        Kelengkapan:
        <input
          type="number"
          value={kelengkapan}
          onChange={(e) => setKelengkapan(e.target.value)}
        />
      </label>
      <br />
      <button onClick={hitungHargaJual}>Hitung Harga Jual</button>
      <h2>Harga Jual: Rp {hasil}</h2>
    </div>
  );
};

export default PonselBekasForm;
