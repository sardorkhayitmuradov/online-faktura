import React, { useState } from 'react';
import ActTab from './ActTab/ActTab';
import AttorneyTab from './AttorneyTab/AttorneyTab';
import ContractTab from './ContractTab/ContractTab';
import InvoiceTab from './InvoiceTab/InvoiceTab';
import TTN from './TTNTab/TTN';
import TabContent from './TabContent/TabContent';
import './DocumentTabs.css';

const DocumentTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  console.log(activeTab);
  return (
    <div>
      <div className='Tabs'>
        <ul className='nav'>
          <li
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            Договора
          </li>
          <li
            className={activeTab === 2 ? 'active' : ''}
            onClick={() => setActiveTab(2)}
          >
            Счет фактуры
          </li>
          <li
            className={activeTab === 3 ? 'active' : ''}
            onClick={() => setActiveTab(3)}
          >
            Акт
          </li>
          <li
            className={activeTab === 4 ? 'active' : ''}
            onClick={() => setActiveTab(4)}
          >
            Доверенность
          </li>
          <li
            className={activeTab === 5 ? 'active' : ''}
            onClick={() => setActiveTab(5)}
          >
            ТТН
          </li>
        </ul>
        <div className='outlet'>
          <TabContent id={1} activeTab={activeTab}>
            <ContractTab id='contract' />
          </TabContent>
          <TabContent id={2} activeTab={activeTab}>
            <InvoiceTab id='invoice' />
          </TabContent>
          <TabContent id={3} activeTab={activeTab}>
            <ActTab id='act' />
          </TabContent>
          <TabContent id={4} activeTab={activeTab}>
            <AttorneyTab id='attorney' />
          </TabContent>
          <TabContent id={5} activeTab={activeTab}>
            <TTN id='ttn' />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default DocumentTabs;
