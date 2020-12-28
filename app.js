// Spread Operator
  // spread operator allows one to spread items in array as individual arguments when used inside of a function call

  const nums = [1, 2, 3, 4, 5, 6];

  // if you wanted ot find the max or min of the nums array, you would have to manually write them or copy only the numbers inside of the fuction call. For example:

  Math.max(1, 2, 3, 4, 5, 6); // output: 6
  Math.max(nums); // output : NaN

  // however, if you use spread "..." and prepend it to the variable nums, it will work

  Math.max(...nums); // output: 6


// you can also spread contents inside of one array and place them in a new array, thus, creating a copy

  const array1 = [1, 2, 3, 4];
  const array2 = [5, 6, 7, 8];

  const array3 = [...array1, ...array2];

  console.log(array3); // output: [1, 2, 3, 4, 5, 6, 7, 8]



  
function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T


// using spread on object literals

const feline = {
  legs: 4,
  family: 'Felidae'

};

const canine = {
  legs: 4,
  family: 'Caninae',
  furry: true,
}

// let's make a new object literal using spread operator

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}

console.log(dog); // output: {legs: 4, family: "Caninae", furry: true, isPet: true, adorable: true}


// the order of spread matters
  // in this example, ...feline overwrites the legs because it comes after the property and updates the property to its own value.

const tripod = {
  legs: 3, 
  ...feline
}
console.log(tripod) // output: {legs: 4, family: "Felidae"}

  // if you wanted to keep the 3 legs property, then you can place that property after the spread operator and the word feline, like so: 

const tripod2 = {
  ...feline,
  legs: 3
}

console.log(tripod2); // output: {legs: 3, family: "Felidae"}
