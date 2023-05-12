function getMiddle(s){
  
    if((s.length %= 2) == 1){
        return s[(Math.round(s.length / 2))-1]
    }else{
        
        return s[(Math.round(s.length / 2))-1]+s[(Math.round(s.length / 2))]
    }
}
console.log(getMiddle("middle"))