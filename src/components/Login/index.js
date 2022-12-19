import React from 'react'

import './index.css'

function Login() {
  return (
    <div className='login'>
      <form>
        <h2>Sign in to your account</h2>
        <input type="text" placeholder='Email/Phone number' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login