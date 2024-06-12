function fuzzyDemand(demand) {
  const low = Math.max(0, Math.min(1, (7000 - demand) / (7000 - 4600)));
  const high = Math.max(0, Math.min(1, (demand - 4600) / (7000 - 4600)));
  return { low, high };
}

function fuzzySupply(supply) {
  const low = Math.max(0, Math.min(1, (1200 - supply) / (1200 - 600)));
  const high = Math.max(0, Math.min(1, (supply - 600) / (1200 - 600)));
  return { low, high };
}

function fuzzyProduction(production) {
  const decrease = Math.max(
    0,
    Math.min(1, (7000 - production) / (7000 - 4500))
  );
  const increase = Math.max(
    0,
    Math.min(1, (production - 4500) / (7000 - 4500))
  );
  return { decrease, increase };
}

export default {
  fuzzyDemand,
  fuzzySupply,
  fuzzyProduction,
};
