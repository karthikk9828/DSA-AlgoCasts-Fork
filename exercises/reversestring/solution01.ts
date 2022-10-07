// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse01(str: string): string {
  return str.split("").reverse().join("");
}

reverse01("hello");

module.exports = reverse01;
