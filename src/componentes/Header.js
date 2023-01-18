import React, { useContext } from 'react'
import { Contexto } from '../contexto/contexto'
import "./header.css"


function Header() {
    const {} = useContext(Contexto)
    return (
      <header>
        <img src="../mateosShoesFakeLogo.jpg" alt='Mateos shoes logo' />
        <div className='users-profile-and-cart'>
            <div className='icon-container'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M19.6515 19.4054C20.2043 19.2902 20.5336 18.7117 20.2589 18.2183C19.6533 17.1307 18.6993 16.1749 17.4788 15.4465C15.907 14.5085 13.9812 14 12 14C10.0188 14 8.09292 14.5085 6.52112 15.4465C5.30069 16.1749 4.34666 17.1307 3.74108 18.2183C3.46638 18.7117 3.79562 19.2902 4.34843 19.4054C9.39524 20.4572 14.6047 20.4572 19.6515 19.4054Z" fill="#222222"/>
                    <circle cx="12" cy="8" r="5" fill="#222222"/>
                </svg>
                <span>Cuenta</span>
            </div>
            <div className='icon-container'>
                <span className='cart-counter'>{"{0}"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <circle cx="10" cy="19" r="1.5" stroke="#000000"/>
                    <circle cx="17" cy="19" r="1.5" stroke="#000000"/>
                    <path d="M3.5 4H5.5L9.00446 15H17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.22445 12.5L6.29862 6.5H18.8063C19.1476 6.5 19.3885 6.83435 19.2806 7.15811L17.614 12.1581C17.5459 12.3623 17.3548 12.5 17.1396 12.5H8.22445Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Carrito</span>
            </div>
        </div>
      </header>
    )  
}

export default Header