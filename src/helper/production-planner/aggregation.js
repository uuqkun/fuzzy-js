import membership from "./membership.js";

function defuzzify(rules) {
  let numerator = 0;
  let denominator = 0;

  rules.forEach((rule) => {
    const fuzzyProductionValues = membership.fuzzyProduction(
      rule.production === "decrease" ? 4500 : 7000
    );
    const productionValue = rule.production === "decrease" ? 4500 : 7000;

    const degree = rule.condition;
    numerator += degree * productionValue;
    denominator += degree;
  });

  const result = numerator / denominator;
  return Math.round(result);
}

export default { defuzzify };
