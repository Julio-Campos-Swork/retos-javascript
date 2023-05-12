/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


*/
function solution(str, ending) {
  let res = str.slice(str.length - ending.length);
  if (res == ending) return true;
  else return false;
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false
