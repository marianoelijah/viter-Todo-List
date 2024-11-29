import React from 'react'
import TodoList from './Todo-List'

const App = () => {
  return (
    <section className='min-h-screen bg-gray-800 flex justify-center items-center text-white'>
      <div className='max-w-[400px] w-full bg-blue-300 rounded-md p-4 h-[500px]'>
        <form action="" className='text-black text-xl'>
          <label htmlFor="" className='block'> Title
            <input type="text" placeholder='' className='w-[350px] h-[50px] border outline-none'/>
          </label>

          <label htmlFor="" className='block'> Name
            <input type="text" placeholder='' className='w-[350px] h-[50px] border outline-none'/>
          </label>
        </form>
        
        <div className='list'>
           <ul className='text-xl items-center'>
              <li className=''>Get a trip</li>
              <li>Go to museum</li>
              <li>Go to club</li>
              <li>Make some money</li>
           </ul>
        </div>
      </div>
    </section>

    
  )
}

export default App

