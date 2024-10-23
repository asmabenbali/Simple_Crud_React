import { useState } from 'react'

import './Component/styles.css'
import Crud from './Component/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Crud /> 
    </div>
  )
}

export default App
