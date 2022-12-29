function countingValleys(steps, path) {
  // Write your code here
  let remainSteps = 0;
  let valleyCount = 0;
  let mountainCount = 0;
  let numValley = 0
  let pathArray = path.split('')
  for (let i = 0; i < steps; i++) {
      if (pathArray[i] === 'U') {
          if (valleyCount !== 0) {
              valleyCount += 1;
              if (valleyCount === 0) {
                  numValley += 1
              }
          } else {
              mountainCount += 1
          }
      }
      if (pathArray[i] === 'D') {
          if (mountainCount === 0) {
              valleyCount -= 1
              
          } else {
              mountainCount -= 1
          }
      }
  }
  return numValley
}
