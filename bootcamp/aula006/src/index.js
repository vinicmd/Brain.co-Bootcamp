import ReactDOM from 'react-dom'

function Title ({text}) {
  return (
    <h1 className='titulo'>{text}</h1>
  )
}

ReactDOM.render(
  <Title text="Vinicius" />,
  document.querySelector('#root')
)