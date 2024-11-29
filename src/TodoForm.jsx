import React from 'react'

const TodoForm = () => {

    
  return (
    <section className='min-h-screen '>
        <div className='todo-form rounded-md'>
      <form action="">
        <label htmlFor="" className='mb-2'>
            What to do?
        </label>
        <input type="text" 
        placeholder=''
        className='px-2 py-2 rounded-md border border-black text-black'/>

        <div className='todo-form mt-5'>
            <h5 className='mb-5'>My Todo List!</h5>
         <ul className='px-10'>
            <li className='p-2 border-b border-gray-200 mb-1 flex justify-between'>
                Advent
            </li>
            <li className='p-2 border-b border-gray-200 mb-1 flex justify-between'>
                Advent
            </li>
            <li className='p-2 border-b border-gray-200 mb-1 flex justify-between'>
                List
            </li>
         </ul>
        </div>
      </form>
      </div>
    </section>
    
  )
}

export default TodoForm
