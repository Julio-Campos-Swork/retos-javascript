function wrapping(gifts) {
    return gifts.map((gift) => {
        const length = gift.length
        const fill = '*'.repeat(length + 2)
        return `${fill}\n*${gift}*\n${fill}`
      })
   }
   
   const gifts = ['book', 'game', 'socks'];
   const wrapped = wrapping(gifts);
   console.log(wrapped)


console.log("one\ntwo");