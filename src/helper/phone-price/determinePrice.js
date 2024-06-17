import defuzzifikasi from "./defuzzification.js";
import fuzzyInference from "./inferences.js";
import { hargaPasaran, kelengkapan, kondisiFisik } from "./membership.js";

function tentukanHargaJual(kondisiValue, hargaValue, kelengkapanValue) {
  let kondisiMembership = kondisiFisik(kondisiValue);
  let hargaMembership = hargaPasaran(hargaValue);
  let kelengkapanMembership = kelengkapan(kelengkapanValue);

  let inferenceResult = fuzzyInference(
    kondisiMembership,
    hargaMembership,
    kelengkapanMembership
  );

  return defuzzifikasi(inferenceResult);
}

export default tentukanHargaJual;
