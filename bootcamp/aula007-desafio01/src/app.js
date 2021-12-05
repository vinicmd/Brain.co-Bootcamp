function App () {

  function Header () {
    return (
      <header>HEADER</header>
    )
  }

  function Menu () {
    return (
      <nav>
        Menu
      </nav>
    )
  }

  function Sidebar () {
    return (
      <aside>Sidebar</aside>
    )
  }
  
  function Content () {
    return (
      <section>Content</section>
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