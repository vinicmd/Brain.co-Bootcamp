import { useEffect, useState } from "react";

function getCepUrl( cep ) {
  return `https://ws.apicep.com/cep.json?code=${cep}`
    
}

function App () {
  const [counter, setCounter] = useState(0)
  const [cep, setCep] = useState(null)

  useEffect( () => {
    console.log('useEffect app')
    function searchCep() {
      if (cep == null){
        return console.log('vazio')
      }

      fetch(getCepUrl(cep))
        .then(result => result.json())
        .then(result => console.log('resultado', result))
    }

    searchCep()

    return () => {
      console.log('clean app')
    }
  }, [cep])

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Cep cep={cep} setCep={setCep} />
    </>
  )
}

function Counter( { counter, setCounter } ) {
  console.log('counter')
 
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((c) => c-1)}>-</button>
      <button onClick={() => setCounter((c) => c+1)}>+</button>
    </>
  )
}

function Cep ( { cep, setCep } ){
  function handleSubmit (event) {
    event.preventDefault()
    setCep(event.target.elements.campoCep.value)
    console.log(event.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="campoCep" />
        <button type="submit" >Buscar CEP</button>
      </form>
    </>
  )
}

export default App;
