import styled from 'styled-components'

const Input = styled.input`
    background-color: red;
    color: white;

`

function Counter( { counter, setCounter } ) {
  console.log('counter')
 
  return (
    <>
      <h1>{counter}</h1>
      <Input type="text" className={'input'} />
      <button onClick={() => setCounter((c) => c-1)}>-</button>
      <button onClick={() => setCounter((c) => c+1)}>+</button>
    </>
  )
}

export default Counter