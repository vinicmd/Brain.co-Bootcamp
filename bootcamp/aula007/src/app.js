function App () {
  return (
    <Title>
      <i>Título Itálico</i>
      Título Normal
    </Title>
  )
}

function Title ({children}) {
  return (
    <h1 className='titulo'>{children}</h1>
  )
}

export default App