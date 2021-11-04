//Function declarativa

function sum1 (a, b) {
  return a + b
}

console.log('sum1(1, 2):', sum1(1, 2))

//expressão com função
const sum2 = function(a, b) {
  return a + b
}

console.log('sum2(1, 2):', sum2(1, 2))

//arrow function
const sum3 = (a, b) => {
  return a + b
}

console.log('sum3(1, 2):', sum3(1, 2))

//na arrow function o retorno é implicito.
const mult = (a, b) => a * b 

console.log('mult(2, 3):', mult(2, 3))

//outro exemplo: (como só tenho um argumento, não é necessário os parênteses)

const plusOne = a => a + 1 

console.log('plusOne(2):', plusOne(2))

//Como retornar objeto com retorno implícito.
const getOject = () => (
  {
    name: 'Vini'
  }
)