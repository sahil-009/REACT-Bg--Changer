import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>
      <button onClick={() => setColor("red")}
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        RED
      </button>
    </div>
    <div className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>
      <button onClick={() => setColor("green")}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
        GREEN
      </button>
    </div>
    <div className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>
      <button onClick={() => setColor("blue")}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        BLUE
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default App
