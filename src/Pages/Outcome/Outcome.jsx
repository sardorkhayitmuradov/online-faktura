import React from 'react';
import MainTop from '../../Components/MainTop/MainTop';
import './Outcome.css';
import Button from '../../Components/Button/Button';
import DownLoadIcon from '../../Assets/Images/download_light.svg';
import PrinctIcon from '../../Assets/Images/print.svg';
import StatusImage from '../../Assets/Images/info.jpg';
import UploadIcon from '../../Assets/Images/upload_outlined.svg';
import CheckIcon from '../../Assets/Images/check.svg';
import CancelIcon from '../../Assets/Images/cancel.svg'

const Outcome = () => {
  return (
    <div className='create'>
      <MainTop />
      <div className='create-container outcome-container'>
        <span className='sum-title'>
          Документы {'>'}{' '}
          <span style={{ color: '#2B63C0' }}>
            Счет-фактура №03-60378 от 31.03.2021
          </span>
        </span>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div className='sum'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 className='sum-heading'>Счет-фактура</h2>
              <p className='sum-text'>Статус документа в ГНК</p>
            </div>
            <p className='sum-number'>№03-60378 от 31.03.2021</p>
            <p className='sum-tel'>566800736</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                marginBotto: '8px',
              }}
            >
              <h4 className='messenger'>Отправитель:</h4>
              <p className='messenger-info'>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "VENKON GROUP"
              </p>
            </div>
            <div className='sum-dates'>
              <h4 className='sume-date'>Дата:</h4>
              <span>2021-04-09 12:40:13</span>
              <div className='sum-btns'>
                <Button
                  title={'button'}
                  name={'Скачать '}
                  image={DownLoadIcon}
                  style={{ padding: '5px 17px' }}
                />
                <Button
                  title={'button'}
                  name={'Печать'}
                  image={PrinctIcon}
                  style={{ padding: '5px 17px' }}
                />
              </div>
            </div>
          </div>
          <div className='sum-status'>
            <div className='status-top'>
              <h4 className='top-title'>Статус:</h4>
              <p className='sum-text'>
                <img src={UploadIcon} alt='Upload' />
                Прикрепить файл
              </p>
            </div>
            <p>ОЖИДАЕТ ВАШЕЙ ПОДПИСИ</p>
            <div className='status-btns'>
              <Button title={'success-button'} name={'Подписать'} image={CheckIcon} />
              <Button
                title={'cancel-button'}
                name={'Отменить'}
                image={CancelIcon}
              />
            </div>
          </div>
        </div>
        <div className='contract' style={{textAlign: 'center'}} >
        
          <img src={StatusImage} alt='Status'/>

        </div>
      </div>
    </div>
  );
};

export default Outcome;
