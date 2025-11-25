import { useState } from 'react'
import Counter from './COUNTER/Counter'

function App() {
  const [count, setCount] = useState(6)

  return (
    <>
     <Counter/>

    </>
  )
}

export default App
