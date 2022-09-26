const lookSay = number => {
  let result = ''
  const numberIn = {}
  const numtostring = number.toString()
  const numtoarray = numtostring.split('')
  console.log(numtoarray)
  numtoarray.forEach((element) => {
    if (Number(element) == 0) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 1) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 2) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 3) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 4) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 5) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 6) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 7) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 8) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
    if (Number(element) == 9) {
      if(numberIn[`${element}`]) {
        numberIn[`${element}`] += 1
      } else {
        numberIn[`${element}`] = 1
      }
    }
  })
  for (const key in numberIn) {
    if(key === numtoarray[0]) {
      const convert = numberIn[key].toString()
      result += convert
      result += key
    }
    
  }
  for (const key in numberIn) {
    if(!(key === numtoarray[0])) {
      const convert = numberIn[key].toString()
      result += convert
      result += key
    }  
  }
  console.log(numberIn)
  return result
};