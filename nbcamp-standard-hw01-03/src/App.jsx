import React from 'react'
import Content from './coponent/Content'
import Counter from './coponent/Counter'
import Footer from './coponent/Footer'
import Header from './coponent/Header'
import Status from './coponent/Status'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [count,setCount] = useState(0);

  const title = "클릭과 함께라면...";
  const year = "2024년!!!"

  return (
    <div className='main-container'>
      <Header title={title}/>
      <Content />
      <Counter 
        count={count} 
        setCount={setCount}
      />
      <Status count={count}/>
      <Footer year={year}/>
    </div>
  )
}

export default App