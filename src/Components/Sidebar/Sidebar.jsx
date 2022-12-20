import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItems from '../Navbar/Navbar';
import Logo from '../../Assets/Images/logo.svg';
import CreateIcon from '../../Assets/Images/create.svg';
import IncomeIcon from '../../Assets/Images/income.svg';
import OutcomeIcon from '../../Assets/Images/outcome.svg';
import SaveIcon from '../../Assets/Images/save.svg';
import DeleteIcon from '../../Assets/Images/delete.svg';
import ContactIcon from '../../Assets/Images/contact.svg';
import SettingsIcon from '../../Assets/Images/settings.svg';
import LogOut from '../../Assets/Images/logout.svg';
import CopyrightIcon from '../../Assets/Images/copyright.svg';
import './Sidebar.css';

const Sidebar = ((props) => {
  return (
    <>
      <div className='min-hight'>
        <div className='navigation'>
          <ul className='sidebar-list'>
            <li>
              <div className='sidebar-logo'>
                <NavLink to={'/'} className='nav-logo'>
                  <img src={Logo} alt='Logo' width='120' height='40' />
                </NavLink>
              </div>
              <NavItems
                spanClass='icon'
                icon={CreateIcon}
                spanClassName='title'
                itemName='Создать'
                link='/create'
              />
              <NavItems
                spanClass='icon'
                icon={IncomeIcon}
                spanClassName='title'
                itemName='Входящие (2)'
                link='/income'
              />
              <NavItems
                spanClass='icon'
                icon={OutcomeIcon}
                spanClassName='title'
                itemName='Исходящие (3)'
                link='/outcome'
              />
              <NavItems
                spanClass='icon'
                icon={SaveIcon}
                spanClassName='title'
                itemName='Сохраненные (0)'
                link='/save'
              />
              <NavItems
                spanClass='icon'
                icon={DeleteIcon}
                spanClassName='title'
                itemName='Сохраненные (0)'
                link='/delete'
              />
            </li>
            <li>
              <NavItems
                spanClass='icon'
                icon={ContactIcon}
                spanClassName='title'
                itemName='Тех поддержка:'
                tel='+998 99 999 99 99'
                link='/contact'
              />
              <NavItems
                spanClass='icon'
                icon={SettingsIcon}
                spanClassName='title'
                itemName='Настройки'
                link='/settings'
              />
              <NavItems
                spanClass='icon'
                icon={LogOut}
                spanClassName='title'
                itemName='Выйти'
                link='/#'
              />
              <div className='copyright'>
                <img
                  src={CopyrightIcon}
                  alt='CopyRight Icon'
                  className='copyright-img'
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
