import React, { useState } from 'react'

function Header({ addTodo }) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  return (
    <div className='header'>
      <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={desc}
        placeholder='Description'
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        type='submit'
        onClick={() => {
          addTodo({ id: Date.now(), name: name, description: desc })
          setName('')
          setDesc('')
        }}
      >
        Add ToDo
      </button>
    </div>
  )
}

export default Header
