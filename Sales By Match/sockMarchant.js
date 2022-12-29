function sockMerchant(n, ar) {
  // Write your code here
  let distinctSocks = new Set(ar);
  let sockspairs = [...ar]
  let numberOfSockPair = 0
  distinctSocks.forEach((value) => {
      let count = 0
      sockspairs.forEach((socks) => (socks === value && count++))
      if (count % 2 === 0) {
          numberOfSockPair += (count / 2)
      } else {
          count -= 1
          numberOfSockPair += (count / 2)
      }
  })
  return numberOfSockPair

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
