import style from './cep.module.css'
function Cep ( { cep, setCep } ){
  function handleSubmit (event) {
    event.preventDefault()
    setCep(event.target.elements.campoCep.value)
    console.log(event.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="campoCep" className={style.input}/>
        <button type="submit" >Buscar CEP</button>
      </form>
      <h1>Resultado:</h1>
    </>
  )
}

export default Cep