import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='d-flex justify-content-center bg-dark align-items-center' style={{height:'100vh'}}>
           <Counter/>
     </div>
    </>
  )
}

export default App
