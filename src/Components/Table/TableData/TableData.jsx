import React from 'react';
import './TableData.css'

const TableData = ({ className, text , children }) => {
  return <td className={className}>{typeof text === "string" ? text : children}</td>
};

export default TableData;