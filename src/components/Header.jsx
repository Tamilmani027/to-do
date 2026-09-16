import React, { useState } from 'react'

function Header({ dispatch }) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const Addtodo=(name,desc) => {
          dispatch({ type: 'ADD_TODO', payload: { name:name,desc:desc} });
          setName('')
          setDesc('')
        };

  return (
    <div className='header'>
      <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        className='input1'
      />
      <input
        type='text'
        value={desc}
        placeholder='Description'
        onChange={(e) => setDesc(e.target.value)}
        className='input1'

      />
      <button
        type='submit'
        onClick={()=>Addtodo(name,desc)}
      >
        Add ToDo
      </button>
    </div>
  )
}

export default Header
