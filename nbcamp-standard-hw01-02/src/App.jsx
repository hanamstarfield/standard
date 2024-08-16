import React from 'react'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'

const App = () => {
  const title = "타이틀~~";
  const year = `2024년도!`;

  return (
    <>
    <Header title={title}/>
    <Content />
    <Footer year={year}/>

    </>
  )
}

export default App