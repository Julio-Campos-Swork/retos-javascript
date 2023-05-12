function isPrime(num) {
    //TODO
    if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
    
  }

  console.log(isPrime(2))
  

//   let result = true;
//   if (num < 2){
//     return false;
//   } else if (num === 2) {
//     return true;
//   }
//   if (num % 2 === 1){
//     for (let i=2; i<=Math.ceil(Math.sqrt(num)); i++){
//       if(num % i === 0){
//         result = false;
//         break;
//       }
//     }
//   } else {
//     result = false;
//   }
//   return result;
  