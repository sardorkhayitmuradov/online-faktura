import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Input/Input';
import Selector from '../../Selector/Selector';
import Table from '../../Table/Table';
import TableHead from '../../Table/TableHead/TableHead';
import TableData from '../../Table/TableData/TableData';
import { tableElements } from '../../../TableElements';
import Status from '../../Status/Status';
import StatusInfo from '../../StatusInfo/StatusInfo';
import Button from '../../Button/Button';
import FilterIcon from '../../../Assets/Images/filter.svg';
import CheckIcon from '../../../Assets/Images/check.svg';
import CancelIcon from '../../../Assets/Images/cancel.svg';
import Pagination from '../../Pagination/Pagination';
import UploadIcon from '../../../Assets/Images/upload_outlined.svg'
import './ContractTab.css';

const ContractTab = () => {
  const [data] = useState(tableElements);
  const [renderElemens, setRenderElements] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const render = () => {
    setRenderElements(currentRecords);
  };

  const navigate = useNavigate();

  useEffect(() => {
    render();
  });
  return (
    <>
      <div className='contract'>
        <div className='contract-functions'>
          <h2 className='contract-title'>Фильтр</h2>
          <p className='contract-cancel-filter'>Сбросить фильтр</p>
        </div>
        <div className='contract-filter'>
          <Input
            inputType={'text'}
            inputPlaceholder={'Номер документа'}
            label={'Номер документа'}
            inputName={'user-number'}
            labelName={'user-number'}
            inputWidth={'256px'}
            // inputValue={dona}
            required={true}
            // setInputValue={setDona}
          />
          <Selector
            label={'Статус документа'}
            labelFor={'status'}
            selectorWidth={'256px'}
          />
          <Input
            inputType={'text'}
            inputPlaceholder={'Поиск по контрагенту'}
            label={'Поиск по контрагенту'}
            inputName={'user-search'}
            labelName={'user-search'}
            inputWidth={'256px'}
            // inputValue={dona}
            required={true}
            // setInputValue={setDona}
          />
          <Input
            inputType={'date'}
            label={'Дата с'}
            inputPlaceholder={'01.01.2020'}
            inputName={'user-date-from'}
            labelName={'user-date-to'}
            inputWidth={'120px'}
            // inputValue={dona}
            required={true}
            // setInputValue={setDona}
          />
          <Input
            inputType={'date'}
            label={'Дата до'}
            inputPlaceholder={'01.01.2020'}
            inputName={'user-date-from'}
            labelName={'user-date-to'}
            inputWidth={'120px'}
            // inputValue={dona}
            required={true}
            // setInputValue={setDona}
          />
        </div>
        {/* <Button name={'Подписать'} title={'cancel'} image={CancelIcon} /> */}
      </div>
      <div className='contract contract-table'>
        <div className='table-topside'>
          <div className='table-top'>
            <h2 className='table-title'>Таблица</h2>
            <StatusInfo statusName={'cancel'}>Отменен</StatusInfo>
            <StatusInfo statusName={'success'}>Подписано</StatusInfo>
            <StatusInfo statusName={'pending'}>В ожидании</StatusInfo>
            <StatusInfo statusName={'draft'}>Черновик</StatusInfo>
          </div>
          <div className='top-btns'>
            <Button
              title={'button'}
              name={'Открыть в Exсel'}
              onClick={()=> navigate('/create')}
              style={{ padding: '3px 8px' }}
            />
            <Button
              title={'button'}
              name={'Фильтр таблицы'}
              style={{ padding: '3px 8px' }}
              image={FilterIcon}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <TableHead
                className={'table-head'}
                title={
                  <Input
                    inputType={'checkbox'}
                    inputWidth={'16px'}
                    // inputValue={dona}
                    required={true}
                    // setInputValue={setDona}
                  />
                }
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Статус'}
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Тип документа'}
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Дата обновления'}
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Контрагент'}
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Номер и дата документа'}
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Номер и дата договора'}
              />
              <TableHead
                scope={'col'}
                className={'table-head bg-primary text-light'}
                title={'Стоимость поставки'}
              />
            </tr>
          </thead>
          <tbody>
            {renderElemens.map((element) => {
              return (
                <tr key={element.id}>
                  <TableData>
                    <Input
                      inputType={'checkbox'}
                      inputWidth={'16px'}
                      // inputValue={dona}
                      required={true}
                      // setInputValue={setDona}
                    />
                  </TableData>
                  <TableData>
                    <Status status={element.status} />
                  </TableData>
                  <TableData
                    className={'table-data fw-bold'}
                    text={`${element.document_type}`}
                  />
                  <TableData
                    className={'table-data'}
                    text={element.announcement_date}
                  />
                  <TableData
                    className={'table-data'}
                    text={element.counterparty}
                  />
                  <TableData
                    className={'table-data fw-bold'}
                    text={`${element.document_number_date}`}
                  />
                  <TableData
                    className={'table-data'}
                    text={element.contract_number_date}
                  />
                  <TableData
                    className={'table-data'}
                    text={element.delivery_cost}
                  />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className='contract-footer'>
        <div className='contract-footer-buttons'>
          <Button title={'button'} name={'Подписать'} image={CheckIcon} />
          <Button
            title={'cancel-button'}
            name={'Отменить'}
            image={CancelIcon}
          />
          <div className='contract-sync'>
            <Selector
              labelFor={'status'}
              innerText={'Показать по: '}
              selectorWidth={'182px'}
            />
            <div className='sync'>
              <p>Синхронизация с ГНК</p>
            </div>
            <div className='restr'>
              <p>Реестр</p>
              <img src={UploadIcon} alt='Upload Icon' />
            </div>
          </div>
        </div>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default ContractTab;
