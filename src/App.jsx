import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl bg-violet-50 p-5 ">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text" />
          <button>Submit</button>

        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo">

            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
