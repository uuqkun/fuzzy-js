import rules from "./ruleset.js";
function fuzzyInference(kondisi, harga, kelengkapan) {
  let output = { rendah: 0, standar: 0, tinggi: 0 };

  rules.forEach((rule) => {
    let kondisiDegree = kondisi[rule.kondisi] || 0;
    let hargaDegree = harga[rule.hargaPasaran] || 0;
    let kelengkapanDegree = rule.kelengkapan
      ? kelengkapan[rule.kelengkapan] || 0
      : 1;

    let minDegree = Math.min(kondisiDegree, hargaDegree, kelengkapanDegree);

    if (rule.hasil === "rendah") {
      output.rendah = Math.max(output.rendah, minDegree);
    } else if (rule.hasil === "standar") {
      output.standar = Math.max(output.standar, minDegree);
    } else if (rule.hasil === "tinggi") {
      output.tinggi = Math.max(output.tinggi, minDegree);
    }
  });

  return output;
}

export default fuzzyInference;
