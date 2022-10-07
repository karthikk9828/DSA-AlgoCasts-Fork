// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse03(str: string): string {
  const reversed = str.split("").reduce((reveresed, character) => {
    return character + reveresed;
  }, "");
  console.log(reversed);
  return reversed;
}

reverse03("hello");

module.exports = reverse03;
