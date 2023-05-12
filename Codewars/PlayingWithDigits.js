// function digPow(n, p){
//     // ...
//     let nums = (n).toString();
//     console.log(nums)
//     let incrementPow = p;
//     let elevated  = "";
//     let total =0;
//     nums.split("").forEach(element => {
//         let newElement = parseInt(element, 10)
//         elevated = Math.pow(newElement, incrementPow)
//         console.log("numero ",newElement, "elevado a ", incrementPow, "= ", elevated)
//         incrementPow++;
//         total +=elevated;
//     });
//     console.log(total)

//     let k = getK(n, total);
//     console.log("valor K",k)
    
// }
function digPowReduce(n,p){
let result =  String(n).split("").reduce((s,d,i) => s + Math.pow(d, p +i),0);
console.log("result", result, "n ", n, "Result / n" , (result / n))
return result % n ? -1 : result / n;
}
function digPow(n, p){
    // ...
      let nums = (n).toString();
      let incrementPow = p;
      let elevated  = "";
      let total =0;
      nums.split("").forEach(element => {
          let newElement = parseInt(element, 10)
          elevated = Math.pow(newElement, incrementPow)
          incrementPow++;
          total +=elevated;
      });
      
    
        for(let aux = 1; aux<=total; aux++ ){
  
            if(n * aux <= total){
                if(n * aux == total){
                    return aux;
                    break;
                  }
              }else{
                  return -1;
                  break;
              }
          }
  }

console.log(digPow(89, 1))
console.log(digPowReduce(46288, 3))

function getK(n, total){
      let aux = 1;
      for(aux; aux<=total; aux++ ){

          if(n * aux <= total){
              if(n * aux == total){
                  return aux;
                  break;
                }
            }else{
                return -1;
                break;
            }
        }
   
  }