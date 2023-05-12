function isValidWalk(walk) {
  //insert brilliant code here
  let ns = 0
    let ew = 0;
  const min = 10;
  if (walk.length == min) {
    walk.forEach((element) => {
      if (element == "n") ns += 1;
      if (element == "s") ns -= 1;
      if (element == "w") ew += 1;
      if (element == "e") ew -= 1;
    });
    console.log("ns", ns, "ew", ew)
    if (ns == 0 && ew == 0)return true;
    else return false;

  } else {
    return false;
  }
}

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e']));
