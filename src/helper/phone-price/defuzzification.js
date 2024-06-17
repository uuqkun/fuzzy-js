import { hargaJual } from "./membership.js";

function defuzzifikasi(output) {
  let numerator = 0;
  let denominator = 0;

  for (let x = 0; x <= 5000; x += 100) {
    let degree = Math.max(
      Math.min(output.rendah, hargaJual(x).rendah),
      Math.min(output.standar, hargaJual(x).standar),
      Math.min(output.tinggi, hargaJual(x).tinggi)
    );

    numerator += x * degree;
    denominator += degree;
  }

  if (denominator === 0) {
    return 0; // Atau nilai default yang diinginkan jika denominator adalah 0
  }

  return numerator / denominator;
}

export default defuzzifikasi;
