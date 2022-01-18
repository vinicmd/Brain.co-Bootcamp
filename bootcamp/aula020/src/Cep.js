import styled from 'styled-components'

function Cep ( { cep, setCep, color } ){
  function handleSubmit (event) {
    event.preventDefault()
    setCep(event.target.elements.campoCep.value)
    console.log(event.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="campoCep" color={color}/>
        <button type="submit" >Buscar CEP</button>
      </form>
    </>
  )
}

const Input = styled.input`
  background-color: ${ ( props ) => props.color };
`



export default Cep