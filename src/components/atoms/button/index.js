import React from 'react'

export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit'
}

function Button (props) {
  const { children, type, onClick } = props 
  return <button type={ type } onClick={ onClick }>{ children }</button>
}

Button.defaultProps = {
  children: '',
  onClick: () => {},
  type: ButtonType.BUTTON
}

export default Button