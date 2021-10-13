const person = {
  name: 'Vinicius',
  surname: 'Duarte',
  age: 25
}

const personUpdated = {
  ...person,
  age: 26
}

const personWithBirthYear = {
  ...person,
  birthyear: 1995
}

console.log('person: ', person)
console.log('personUpdated: ', personUpdated)
console.log('personWithBirthYear', personWithBirthYear)

const arr = [10, 20, 30]
//const arr2 = arr.concat(40)
const arr2 = [
  ...arr,
  40
]

console.log('arr: ', arr)
console.log('arr2: ', arr2)

const str = 'Vinicius'
//const arrStr = str.split('')
const arrStr = [...str]

console.log('str: ', str)
console.log('arrStr: ', arrStr)

// const newPerson = {
//   ...personWithBirthYear,
// }

// delete newPerson.age

const newPerson = {
  ...personWithBirthYear,
}

console.log('newPerson', newPerson)