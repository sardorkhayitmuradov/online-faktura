import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavItems = (props) => {
  return (
    <div className={props.tel ? 'sidebar--item top-space' : 'sidebar--item'}>
      <NavLink
        to={props.link}
        className={(
          { isActive } /// isActive
        ) => (isActive ? 'activeLink' : 'nav-link')}
      >
        <span
          className={props.spanClass}
          width='30px'
          height='30px'
          style={{ display: 'block' }}
        >
          <img src={props.icon} alt='link-icon' width='20' height='20' />
        </span>
        <div>
          <div className={props.spanClassName}>{props.itemName}</div>
          {props.tel ? <span className='tel'>{props.tel}</span> : ''}
        </div>
      </NavLink>
    </div>
  );
};

export default NavItems;
