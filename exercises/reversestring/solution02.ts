// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse02(str: string): string {
  let reversed = "";
  for (const character of str) {
    reversed = character + reversed;
  }
  console.log(reversed);
  return reversed;
}

reverse02("hello");

module.exports = reverse02;
