import React, { useState } from 'react'

import Input, { InputType } from './../../atoms/input'
import Button, { ButtonType } from './../../atoms/button'

function Login () {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const regexEmail = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')

  async function handleSubmit (e) {
    e.preventDefault();

    if(email.length === 0)
      return await setError('E-mail inválido')

    if(regexEmail.test(email) === false)
      return await setError('E-mail não está correto')
    
    await setError('')
    return console.log(error)
  }



  async function handleEmail (e) {
    return await setEmail(e.target.value)
  }

  async function handlePassword (e) {
    return await setPassword(e.target.value)
  }

  return (
    <div className='login-container'>
      { error }
      <form>
        <div className='input-container'>
          <Input type={ InputType.EMAIL } place='EMAIL' onChange={handleEmail} />
          <Input type={ InputType.PASSWORD } place='SENHA' onChange={handlePassword} />

          <Button type={ ButtonType.SUBMIT } onClick={handleSubmit} >LOGIN</Button>
        </div>
      </form>
    </div>
  )
}

export default Login