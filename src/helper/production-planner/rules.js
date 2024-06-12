function applyRules(fuzzyDemand, fuzzySupply) {
  const rules = [
    {
      condition: Math.min(fuzzyDemand.low, fuzzySupply.high),
      production: "decrease",
    },
    {
      condition: Math.min(fuzzyDemand.low, fuzzySupply.low),
      production: "decrease",
    },
    {
      condition: Math.min(fuzzyDemand.high, fuzzySupply.high),
      production: "increase",
    },
    {
      condition: Math.min(fuzzyDemand.high, fuzzySupply.low),
      production: "increase",
    },
  ];
  return rules;
}


export default {
  applyRules,
};