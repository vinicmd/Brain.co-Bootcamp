import { useEffect } from 'react'

// eslint-disable-next-line
const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App() {
  useEffect( () => {
    async function getCep() {
      console.log('Buscando CEP...')
      const response = await fetch(url.replace('[CEP]', '74333-170'))
      const json = await response.json()
      console.log('cep:', json)
    }

    getCep()
  })
  
  return (
    <button >Buscar CEP</button>
  )
}

export default App;
