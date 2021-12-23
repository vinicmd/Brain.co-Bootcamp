const menu = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Sobre',
    link: '/sobre'
  }
]

function App () {
  return (
    <ul>
      {menu.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default App