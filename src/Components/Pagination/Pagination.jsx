import React from 'react'
import './Pagination.css'
import Button from '../Button/Button';
import LeftIcon from '../../Assets/Images/chevron-left.svg'
import RightIcon from '../../Assets/Images/chevron-right.svg'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination'>
                <li className="page-item prev" onClick={prevPage}>
                    <Button name={'Назад'} style={{padding: '5px 16px'}} title={'button'} image={LeftIcon} >
                    </Button>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage === pgNumber ? 'paginationActive' : ''} `} >

                        <p onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </p>
                    </li>
                ))}
                <li className="page-item next" onClick={nextPage}>
                    <Button name={'Следующая'} style={{padding: '5px 16px'}} title={'button'} image={RightIcon}>
                    </Button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination