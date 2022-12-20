import React from 'react'
import './TableHead.css'

const Thead = ({className, title , scope}) => {
  return (
      <th scope={scope} className={className}>{title}</th>
  )
}

export default Thead
