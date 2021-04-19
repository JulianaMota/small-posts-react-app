import React from 'react'
import './Button.css'

const Button = ({handleChange}) => {

  return(
    <button className="btn" onClick={() => handleChange()}>Hide</button>
  )
}

export default Button;