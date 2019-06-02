import React from 'react'

export const InputType = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password'
}

function Input (props) {
  const { place, type, onChange } = props 
  return <input className='input' type={ type } onChange={ onChange } placeholder={ place } />
}

Input.defaultProps = {
  place: '',
  type: InputType.TEXT,
  onChange: () => {},
}

export default Input