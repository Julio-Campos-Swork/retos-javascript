const countBits = function(n) {
    // Program Me
    let coun = 0;
    n.toString(2).split("").forEach(num => {
        if(num == "1") coun++;
    })
    return coun;
  };


  //cualquiera funciona
  
  const countBits2 = n => n.toString(2).split('0').join('').length;
  console.log(countBits2(4))