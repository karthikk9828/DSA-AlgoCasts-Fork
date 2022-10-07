// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA: string, stringB: string): boolean {
  let charCountMapStringA = buildCharCountMap(stringA);
  let charCountMapStringB = buildCharCountMap(stringB);

  if (charCountMapStringA.size !== charCountMapStringB.size) {
    return false;
  }

  for (const key in charCountMapStringA.keys) {
    if (!charCountMapStringB.has(key)) return false;
    const countInStringA = charCountMapStringA.get(key);
    const countInStringB = charCountMapStringB.get(key);

    if (countInStringA !== countInStringB) return false;
  }

  console.log(true);

  return true;
}

function buildCharCountMap(str: string): Map<String, number> {
  const formattedString = str.replace(/[^\w]/g, "").toLowerCase();
  let map = new Map<String, number>();

  for (const char of formattedString) {
    if (map.has(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

anagrams("rail safety", "fairy tales");
anagrams("RAIL! SAFETY!", "fairy tales");
anagrams("Hi there", "Bye there");

module.exports = anagrams;
