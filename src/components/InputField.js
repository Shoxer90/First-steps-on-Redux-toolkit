import React from 'react'

export default function InputField({text, setText, addTask}) {

  return (
    <div>
        <input type = "text"
            value ={text}
            onChange = {(e) =>  setText(e.target.value)} />
            <button onClick ={addTask}>
                Add
            </button>
    </div>
  )
}
