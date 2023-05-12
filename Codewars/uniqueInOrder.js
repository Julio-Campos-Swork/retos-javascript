const uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  console.log(iterable);
  let outPut = [];
  if (typeof iterable == "string") {
    iterable.split("").forEach((element, index) => {
      if (index == 0) {
        outPut.push(element);
      } else {
        if (outPut[outPut.length - 1] == element) {
          console.log("repetido");
        } else {
          outPut.push(element);
        }
      }
    });
  } else {
    iterable.forEach((element, index) => {
      if (index == 0) {
        outPut.push(element);
      } else {
        if (outPut[outPut.length - 1] == element) {
          console.log("repetido");
        } else {
          outPut.push(element);
        }
      }
    });
  }
  return outPut;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));


var uniqueInOrder2=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

console.log(uniqueInOrder2([1, 2, 2, 3, 3]));


function uniqueInOrder3(it) {
    let result = []
    let last
    
    for (let i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }

console.log(uniqueInOrder3([1, 2, 2, 3, 3]));
