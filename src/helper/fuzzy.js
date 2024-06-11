// Levenshtein distance function
function levenshteinDistance(a, b) {
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(null));

  for (let i = 0; i <= an; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= bn; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 0; i < an; i += 1) {
    for (let j = 0; j < bn; j += 1) {
      const cost = a[i] === b[j] ? 0 : 1;
      matrix[i + 1][j + 1] = Math.min(
        matrix[i][j + 1] + 1, // deletion
        matrix[i + 1][j] + 1, // insertion
        matrix[i][j] + cost // substitution
      );
    }
  }

  return matrix[an][bn];
}

// Fuzzy search function
export function fuzzySearch(query, data, keys) {
  const results = [];

  data.forEach((item) => {
    let minDistance = Infinity;

    keys.forEach((key) => {
      const value = item[key];
      if (value) {
        const distance = levenshteinDistance(
          query.toLowerCase(),
          value.toLowerCase()
        );
        if (distance < minDistance) {
          minDistance = distance;
        }
      }
    });

    results.push({ item, score: minDistance });
  });

  return results.sort((a, b) => a.score - b.score).slice(0, 10);
}
