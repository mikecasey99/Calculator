import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CalcNum from './components/CalcNum'

function App() {

  const elements = ['C', '±', '%','÷', 
                     7,   8,   9, 'X', 
                     4,   5,   6, '-', 
                     1,   2,   3, '+', 
                     0,       '.', '='
                   ];

  const allElements = elements.map((item) => {
    return <CalcNum 
              number={item} 
              keys={item}
            />
  })

  return (
    <div className="App">
      <div className="btn-container">
        <div className="display">
          <p>31.456778</p>
        </div>
        <section className="buttons">
        {allElements}
        </section>
      </div>
    </div>
  )
}

export default App
