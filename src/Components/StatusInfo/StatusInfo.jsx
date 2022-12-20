import React from 'react'
import Status from '../Status/Status'
import './StatusInfo.css'

const StatusInfo = ({statusName , children}) => {
  return (
    <div className='status-info'>
        <Status status={statusName} />
        {children}
    </div>
  )
}

export default StatusInfo