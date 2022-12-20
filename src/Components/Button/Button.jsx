import React from 'react'
import './Button.css'

const Button = ({name , image , title , style , onClick}) => {
  return (
    <button className={title} style={style} onClick={onClick}>
        {
            image ? <><img src={image} className='button-img' alt="Button icon" />{name}</> : name
        }
    </button>
  )
}

export default Button