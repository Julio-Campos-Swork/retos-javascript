console.log("bigest number")

/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1


*/

function nextBigger(n){
    // Crear Array del numero ingresado para poder tratarlo
    let caracteres = n.toString().split('');
    console.log('caracteres',caracteres)
    let i = caracteres.length-1;
    // verificamos que si el ultimo numero del arreglo es mayor 
    // que el anterior, si es que si, rompemos el ciclo
    while(i > 0) {
      if (caracteres[i]>caracteres[i-1]) break;
      i--;
    }
    // si el valor de i llegó a zero, no tiene solucion y se retorna -1
    if (i == 0) return -1;
    // extraemos los numeros de la coincidencia
    let newArray = caracteres.splice(i).sort();
    let resto = caracteres[caracteres.length-1];
    console.log(resto)
    for (i = 0; i < newArray.length; ++i) {
      if (newArray[i] > resto) break;
    }
    // hacemos una comparacion y volteamos los valores que se van a cambiar
    // el que se extrajo y el que sobra
    caracteres[caracteres.length-1] = newArray[i]
    newArray[i] = resto;
    let result = caracteres.concat(newArray);
    let num = parseInt(result.join(''));
    // concatenamos y convertimos a numero
    return num;
  }

  console.log(nextBigger(144))