import React from 'react'
import FetchComponents from './components/FetchComponents/FetchComponents'
import TextComponents from './components/TextComponents/TextComponents'
import'./App.css'
const App=() => {
  return (
    <React.Fragment>
      <FetchComponents/>
      <TextComponents/>
    </React.Fragment>
  )
}

export default App