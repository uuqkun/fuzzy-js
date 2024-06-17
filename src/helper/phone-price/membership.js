// Fungsi Keanggotaan
function kondisiFisik(x) {
  return {
    kurang: Math.max(0, Math.min(1, (60 - x) / 60)),
    cukup: Math.max(0, Math.min((x - 50) / 30, (80 - x) / 30, 1)),
    bagus: Math.max(0, Math.min((x - 70) / 30, 1))
  };
}

function hargaPasaran(x) {
  return {
    rendah: Math.max(0, Math.min(1, (2750 - x) / 2750)),
    standar: Math.max(0, Math.min((x - 1500) / 1500, (4500 - x) / 1500, 1)),
    tinggi: Math.max(0, Math.min((x - 3500) / 1500, 1))
  };
}

function kelengkapan(x) {
  return {
    kurang: Math.max(0, Math.min(1, (40 - x) / 40)),
    cukup: Math.max(0, Math.min((x - 30) / 50, (80 - x) / 50, 1)),
    lengkap: Math.max(0, Math.min((x - 65) / 35, 1))
  };
}


function hargaJual(x) {
  return {
    rendah: Math.max(0, Math.min(1, (2500 - x) / 2500)),
    standar: Math.max(0, Math.min((x - 1500) / 2500, (4000 - x) / 2500)),
    tinggi: Math.max(0, Math.min((x - 3000) / 2000, 1)),
  };
}

export { kondisiFisik, hargaPasaran, kelengkapan, hargaJual };
