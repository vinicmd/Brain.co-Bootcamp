import { useState } from 'react'

function App () {
  const [inputValue, setInputValue] = useState('')
  console.log('inputValue: ' + inputValue)

  function handleChange( event ) {
    console.log('inputValue handle: ' + event.target.value)
    setInputValue(event.target.value.replace(/\D+/g, ''))
  }
  return (
    <form>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App