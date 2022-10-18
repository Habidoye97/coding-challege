
// Pure functions are functions that follows the three rules:
// - The function should take in at least one argument.
// - The function should return a value or another function
// - The function should not change or mutate any of its arguments
// e.g

const fredrick = {
  name: 'Frederick Douglass',
  canRead: true,
  canWrite: true
}

// this function takes an argument (person) 

const selfEducate = person => ({
  ...person, // spread operator to make copy of the object
  canRead: false,
  canWrite: false
})

console.log(selfEducate(fredrick))
console.log(fredrick)

