import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue='') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value, 
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <input className="input" {...input.bind }/>
      <button className="addButton" type="submit" style={{marginLeft: '.5rem'}}>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo