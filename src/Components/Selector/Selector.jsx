import React from 'react';
import './Selector.css'

const Selector = ({label , labelFor , selectorWidth , innerText}) => {
  return (
    <div className={`${innerText ? 'inner' : 'selector'}`} style={{width: `${selectorWidth}`}}>
      {
        innerText ? <p className='selector-text'>
        {innerText}
      </p> : <label className='selector-label' htmlFor={labelFor}>{label}</label>
      }

      <select className={`${innerText ? 'innerSelect' : 'select'}`} name={labelFor}>
        <option value='none' defaultValue disabled>
            {label ? label: 12}
        </option>
        <option value='male'>pending</option>
        <option value='female'>draft</option>
        <option value='other'>success</option>
      </select>
    </div>
  );
};

export default Selector;
