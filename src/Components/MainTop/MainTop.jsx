import React from 'react';
import { NavLink } from 'react-router-dom';
import CashIcon from '../../Assets/Images/cash.svg';
import NotificationIcon from '../../Assets/Images/notification.svg';
import HelpOutlinedIcon from '../../Assets/Images/help_outlined.svg';
import SettingIcon from '../../Assets/Images/setting.svg';
import './MainTop.css';

const MainTop = (props) => {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-user'>
          <h4 className='user-name'>YaTT SOBIROV JAMSHID DAVRON O'G'LI</h4>
          <p className='user-number'>566800736</p>
        </div>
        <div className='main-cash'>
          <div className='cash-info'>
            <img src={CashIcon} alt='cash Icon'  />
            <div className='cash-text'>
              <p className='cash-title'>Ваш баланс:</p>
              <p className='cash-paragraph'>150.000 сум</p>
            </div>
          </div>
          <NavLink to={'/active'} className='active-btn'>Активировать тариф</NavLink>
        </div>
        <div className='main-icons'>
          <img src={NotificationIcon} alt='Notification Bell Icon' />
          <img src={HelpOutlinedIcon} alt='HelpOutlinedIcon Bell Icon' />
          <img src={SettingIcon} alt='SettingIcon Bell Icon' />
        </div>
      </div>
    </div>
  );
};

export default MainTop;
