import React from 'react';

const TabContent = ({ id, activeTab, children }) => {
    console.log(id);
  return activeTab === id ? <div className='TabContent'>{children}</div> : null;
};

export default TabContent;
