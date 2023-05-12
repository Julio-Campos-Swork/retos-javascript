function parseInt(string) {
    const numbers = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90
    };
  
    let result = 0;
    const words = string.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (numbers.hasOwnProperty(word)) {
        if (word === "hundred") {
          result *= 100;
        } else {
          result += numbers[word];
        }
      }
    }
  
    return result;
  }

  console.log(parseInt("two hundred forty-six"))