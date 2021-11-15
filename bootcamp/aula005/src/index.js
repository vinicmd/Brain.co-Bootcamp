import ReactDOM from 'react-dom'

function Title () {
  return (
    <>
      <h1>Meu app</h1>
      <span>Meu app</span>
    </>
  )
}

ReactDOM.render(
  <Title />,
  document.querySelector('#root')
)