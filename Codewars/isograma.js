function isIsogram(str){
    //...
   const result = str.toLowerCase().split("").filter((c,i,a) => a.indexOf(c) !== i).length;
   if(result == 0){
return true;
   }else{
    return false;
   }
}

  console.log(isIsogram("moose"));


  function isIsogram2(str){
    //new set no permite datos repeditos
    console.log(new Set(str.toLowerCase()))
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram2("moose"));
