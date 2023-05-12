function spinWords(string) {
  let finalString = '';
  string.split(' ').forEach((element) => {
    if (element.length >= 5) {
      let inverted = element.split('').reverse().join('');
      finalString += inverted + ' ';
    } else {
      finalString += element + ' ';
    }
  });
  return finalString.trim();
}

spinWords('Hey fellow warriors');

function spinWords2(string) {
  return string
    .split(' ')
    .map((w) => (w.length < 5 ? w : w.split('').reverse().join('')))
    .join(' ');
}

const result = spinWords2('Hey fellow warriors');

console.log;
