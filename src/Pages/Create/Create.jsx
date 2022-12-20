import React from 'react';
import MainTop from '../../Components/MainTop/MainTop';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Selector from '../../Components/Selector/Selector';
import Range from '../../Components/Range/Range';
import DownloadIcon from '../../Assets/Images/download.svg';
import Excel from '../../Assets/Images/excel.jpg';
import AddIcon from '../../Assets/Images/add_circle_outlined.svg';
import CheckIcon from '../../Assets/Images/check.svg';
import CancelIcon from '../../Assets/Images/cancel.svg';

const Create = () => {
  const navigate = useNavigate();
  const logState = (state) => {
    console.log('Toggled:', state);
  };
  return (
    <div className='create'>
      <MainTop />
      <div className='create-container'>
        <div className='create-top'>
          <h2 className='create-title' style={{ margin: '0px' }}>
            Создание документа: Счёт-фактура
          </h2>
          <Button
            title={'button'}
            name={'Назад/Отменить'}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className='contract' style={{ marginBottom: '24px' }}>
          <Selector
            labelFor={'status'}
            label={'Стандарт'}
            selectorWidth={'520px'}
          />
          <div className='create-input'>
            <Input
              inputType={'text'}
              inputPlaceholder={'Номер счет-фактуры '}
              label={'Номер счет-фактуры '}
              inputName={'user-number'}
              labelName={'user-number'}
              inputWidth={'520px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <Input
              inputType={'date'}
              label={'Дата документ'}
              inputPlaceholder={'Дата документа'}
              inputName={'user-date-document'}
              labelName={'user-date-document'}
              inputWidth={'448px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
          </div>
          <div className='create-input'>
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите номер контракта'}
              label={'Введите номер контракта'}
              inputName={'user-number-contract'}
              labelName={'user-number-contract'}
              inputWidth={'520px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <Input
              inputType={'date'}
              label={'Дата до'}
              inputPlaceholder={'Дата документа'}
              inputName={'date-doc'}
              labelName={'date-doc'}
              inputWidth={'448px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
          </div>
        </div>
        <div className='contract info' style={{ marginBottom: '24px' }}>
          <div className='contract-user-info'>
            <h2 className='user-title'>Ваша информация</h2>
            <Selector
              labelFor={'status'}
              label={'ИНН'}
              selectorWidth={'520px'}
            />
            <Input
              inputType={'number'}
              inputPlaceholder={'Введите данные'}
              label={'НДС регистрационный номер'}
              inputName={'user-register-number'}
              labelName={'user-register-number'}
              inputWidth={'520px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <div className='user-info'>
              <Input
                inputType={'number'}
                inputPlaceholder={'Введите данные'}
                label={'Номер счета'}
                inputName={'user-register-num'}
                labelName={'user-register-num'}
                inputWidth={'248px'}
                // inputValue={dona}

                // setInputValue={setDona}
              />
              <Input
                inputType={'number'}
                inputPlaceholder={'Введите данные'}
                label={'Номер счета'}
                inputName={'user-register-num'}
                labelName={'user-register-num'}
                inputWidth={'248px'}
                // inputValue={dona}

                // setInputValue={setDona}
              />
            </div>
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите данные'}
              label={'Адрес'}
              inputName={'user-register-number'}
              labelName={'user-register-number'}
              inputWidth={'520px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <div className='user-info'>
              <Input
                inputType={'text'}
                inputPlaceholder={'Введите данные'}
                label={'Директор'}
                inputName={'user-director'}
                labelName={'user-director'}
                inputWidth={'248px'}
                // inputValue={dona}
                // setInputValue={setDona}
              />
              <Input
                inputType={'text'}
                inputPlaceholder={'Введите данные'}
                label={'Главный бухгалтер'}
                inputName={'user-bugalter'}
                labelName={'user-bugalter'}
                inputWidth={'248px'}
                // inputValue={dona}
                // setInputValue={setDona}
              />
            </div>
          </div>
          <div className='contract-tidy-info'>
            <h2 className='user-title'>Информация о подрядчике</h2>
            <div className='user-top-info'>
              <Input
                inputType={'number'}
                inputPlaceholder={'Введите данные'}
                label={'Номер счета'}
                inputName={'user-register-num'}
                labelName={'user-register-num'}
                inputWidth={'248px'}
                // inputValue={dona}
                required={true}
                // setInputValue={setDona}
              />
              <div className='user-toggle'>
                <p>Односторонний счет?</p>
                <Range toggled={true} onClick={logState} />
              </div>
            </div>
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите данные'}
              label={'Компания-партнер'}
              inputName={'user-register-number'}
              labelName={'user-register-number'}
              inputWidth={'520px'}
              // inputValue={dona}
              // setInputValue={setDona}
            />
            <div className='user-info'>
              <Input
                inputType={'number'}
                inputPlaceholder={'Введите данные'}
                label={'Номер счета'}
                inputName={'user-register-num'}
                labelName={'user-register-num'}
                inputWidth={'248px'}
                // inputValue={dona}
                // setInputValue={setDona}
              />
              <Input
                inputType={'number'}
                inputPlaceholder={'Введите данные'}
                label={'МФО'}
                inputName={'user-register-num'}
                labelName={'user-register-num'}
                inputWidth={'248px'}
                // inputValue={dona}
                // setInputValue={setDona}
              />
            </div>
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите данные'}
              label={'Адрес'}
              inputName={'user-register-number'}
              labelName={'user-register-number'}
              inputWidth={'520px'}
              // inputValue={dona}
              // setInputValue={setDona}
            />
            <div className='user-info'>
              <Input
                inputType={'text'}
                inputPlaceholder={'Введите данные'}
                label={'Директор'}
                inputName={'user-director'}
                labelName={'user-director'}
                inputWidth={'248px'}
                // inputValue={dona}
                // setInputValue={setDona}
              />
              <Input
                inputType={'text'}
                inputPlaceholder={'Введите данные'}
                label={'Главный бухгалтер'}
                inputName={'user-bugalter'}
                labelName={'user-bugalter'}
                inputWidth={'248px'}
                // inputValue={dona}
                // setInputValue={setDona}
              />
            </div>
          </div>
        </div>
        <div
          className='contract'
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '24px',
          }}
        >
          <div
            style={{ display: 'flex', gap: '28px', margin: '0 0 13px 40px' }}
          >
            <div className='contract-upload'>
              <img src={DownloadIcon} alt='Upload Icon' />
              Загрузить из Excel
            </div>
            <div className='contract-upload'>
              <img src={DownloadIcon} alt='Upload Icon' />
              Скачать шаблон
            </div>
          </div>
          <img src={Excel} alt='img' className='excel' />
          <div className='Sum'>
            <p>Итого: 0.00</p>
            <div>
              <p>Добавить строку</p>
              <img src={AddIcon} alt='add Icon' />
            </div>
          </div>
        </div>

        <div className='contract' style={{ marginBottom: '40px' }}>
          <div className='pw-attorney'>
            <h2 className='pw-attorney-title'>Доверенность</h2>
            <Selector labelFor={'status'} selectorWidth={'709px'} />
          </div>
          <div className='pw-attorney-inputs'>
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите номер контракта'}
              label={'Введите номер контракта'}
              inputName={'user-number-contract'}
              labelName={'user-number-contract'}
              inputWidth={'248px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите номер контракта'}
              label={'Введите номер контракта'}
              inputName={'user-number-contract'}
              labelName={'user-number-contract'}
              inputWidth={'248px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите номер контракта'}
              label={'Введите номер контракта'}
              inputName={'user-number-contract'}
              labelName={'user-number-contract'}
              inputWidth={'248px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
            <Input
              inputType={'text'}
              inputPlaceholder={'Введите номер контракта'}
              label={'Введите номер контракта'}
              inputName={'user-number-contract'}
              labelName={'user-number-contract'}
              inputWidth={'248px'}
              // inputValue={dona}

              // setInputValue={setDona}
            />
          </div>
        </div>
        <div className='footer-inputs'>
          <div style={{display: 'flex', gap: '16px'}}>
            <Button
              title={'cancel-button'}
              name={'Отменить'}
              image={CancelIcon}
            />
            <Button
              title={'button'}
              name={'Показать документ'}
              image={CheckIcon}
            />
          </div>
          <div style={{display: 'flex', gap: '16px'}}>
            <Button title={'button'} name={'Сохранить'} />
            <Button title={'button'} name={'Подписать'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
