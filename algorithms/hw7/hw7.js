function letterFrequency(text) {
  const frequency = {};
  const letters = text.toLowerCase().replace(/[^a-z]/g, '');

  for (const letter of letters) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }

  const total = letters.length;
  const frequencyWithPercentage = {};

  for (const [letter, count] of Object.entries(frequency)) {
    frequencyWithPercentage[letter] = {
      count,
      percentage: ((count / total) * 100).toFixed(2) + '%'
    };
  }

  return frequencyWithPercentage;
}

const sampleText = `
The quick brown fox jumps over the lazy dog.
This pangram contains every letter of the English alphabet.
`;

const result = letterFrequency(sampleText);
const sortedEntries = Object.entries(result).sort(([a], [b]) =>
  a.localeCompare(b)
);

for (const [letter, data] of sortedEntries) {
  console.log(`${letter}: ${data.count} times (${data.percentage})`);
}
