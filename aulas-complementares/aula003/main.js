const person = {
  name: 'Vini',
  age: '25'
}

const { name, age } = person
console.log('name: ', name)
console.log('age: ', age)

const doors = 4
const color = 'red'

const car = { doors, color }
const { 
  doors: doorsRenamed, 
  color: colorRenamed 
} = car

console.log('car: ', car)
console.log('door renamed: ', doorsRenamed)
console.log('color renamed: ', colorRenamed)

const cords = [ 100, 200 ]

/* const x = cords[0]
const y = cords[1] */

const [x, y] = cords

console.log('x: ', x)
console.log('y: ', y)

// function getCoords (coords) {
//   return {
//     x: coords[0],
//     y: coords[1]
//   }
// }

function getCoords ([x, y]) {
  return { x, y }
}

console.log(getCoords([100, 200]))

// function getConfig (obj) {
//   return obj.config
// }

function getConfig ({config}) {
  return config
}
console.log(getConfig({config: true})) 