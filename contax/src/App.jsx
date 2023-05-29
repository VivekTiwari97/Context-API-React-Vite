import React, { createContext } from 'react'
import ComD from './assets/Component/ComD'

const document= createContext()
const document1= createContext()
const App = () => {
  let laptop= "dell";
  let genration= "I3 10th generation";
  return (
    <div>
      <document.Provider value={laptop}>
      <document1.Provider value={genration}>
      <ComD/>
      </document1.Provider>
      </document.Provider>
    </div>
  )
}

export default App
export{document,document1}

