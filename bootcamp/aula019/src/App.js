import { useEffect, useState } from "react";
import Counter from './Counter'
import Cep from './Cep'

function getCepUrl( cep ) {
  return `https://ws.apicep.com/cep.json?code=${cep}`
    
}

function App () {
  const [counter, setCounter] = useState(0)
  const [cep, setCep] = useState(null)

  useEffect( () => {
  console.log('cep no app', cep)
  console.log('useEffect app')
    function searchCep() {
      if ((cep === null) || (cep === '') ) {
        return
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

export default App;
