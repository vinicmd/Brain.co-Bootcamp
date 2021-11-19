function App () {

  function Header () {
    return (
      <header>HEADER</header>
    )
  }

  function Menu () {
    return (
      <ul>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>
    )
  }

  function Sidebar () {
    return (
      <aside>Sidebar</aside>
    )
  }
  
  function Content () {
    return (
      <div>Content</div>
    )
  }

  function Footer () {
    return (
      <footer>Sidebar</footer>
    )
  }

  return (
    <>
      <Header />
      <Menu />
      <Sidebar />
      <Content />
      <Footer />
    </>
  )
}

export default App