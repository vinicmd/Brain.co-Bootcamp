import { useState } from 'react'

function App () {
  const [inputValue, setInputValue] = useState('')
  console.log('inputValue: ' + inputValue)

  const obj = {
    a: 1
  }

  const obj2 = {
    ...obj,
    b: 2,
    c: 3,
    d: 4
  }

  console.log('obj: ', obj)
  console.log('obj2: ', obj2)

  const arr = [1, 2, 3]
  const arr2 = arr.concat(10)

  console.log('arr: ', arr )
  console.log('arr2: ', arr2 )

  function handleChange( event ) {
    console.log('inputValue handle: ' + event.target.value)
    setInputValue(event.target.value.replace(/\D+/g, ''))
  }
  return (
    <Form inputValue={inputValue} handleChange={handleChange} />
  )
}

function Form ( {inputValue, handleChange}) {
  
  return (
    <form>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App