import React from 'react'
import MainTop from '../../Components/MainTop/MainTop';
import DocumentTabs from '../../Components/DocumentTabs/DocumentTabs';

const Settings = () => {
  return (
    <div className='create'>
      <MainTop />
      <div className='create-container'>
        <h2 className='create-title'>Документы</h2>
        <DocumentTabs />
      </div>
    </div>
  )
}

export default Settings