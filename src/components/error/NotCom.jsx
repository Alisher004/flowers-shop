import React from 'react'
import { Link } from 'react-router-dom'
import "./Eror.scss"

function NotCom() {
  return (
    <div className='eror'>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button>Back to home page</button>
    </div>
  )
}

export default NotCom
