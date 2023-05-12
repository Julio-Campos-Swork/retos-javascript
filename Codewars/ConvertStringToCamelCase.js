/*
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  if (str == '') return '';

  let chain = str.split('');
  chain.forEach((word, index) => {
    if (word == '-' || word == '_') {
      chain[index + 1] = chain[index + 1].toUpperCase();
    }
  });
  return chain.join('').replaceAll('_', '').replaceAll('-', '');
}

// toCamelCase('') //, '', "An empty string was provided but not returned"
toCamelCase('the_stealth_warrior'); //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value"
// toCamelCase("The-Stealth-Warrior") //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value"
// toCamelCase("A-B-C") //, "ABC", "toCamelCase('A-B-C') did not return correct value"
