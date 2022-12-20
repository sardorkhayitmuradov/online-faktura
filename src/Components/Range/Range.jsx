import React, {useState} from 'react';
import './Range.css';

const Range = ({ toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }
  return (
    <label htmlFor='range' className='label'>
      <input className='input' type='checkbox' defaultChecked={isToggled} onClick={callback} name='range' />
      <span className='span' />
    </label>
  );
};

export default Range;
