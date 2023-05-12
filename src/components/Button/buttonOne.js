import React from 'react'
import { Link } from 'react-router-dom'
import "./buttonOne.css"
const  Button = ()=> {
  return (
    <Link to="/login" className='btn-action'>Join Now</Link>
  )
}

export default Button