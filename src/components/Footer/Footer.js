import './footer.less';

import React from 'react';

import telegramIcon from '../../assets/icons/telegram.svg';
import emailIcon from '../../assets/icons/email.svg';

const Footer = () => (
    <footer className='footer'>
        <div className='author'>
            <p className='author-text'>
                © Khlustov, 2022
            </p>
        </div>
        <div className='links'>
            <a href='https://t.me/AlexanderKhlustov' className='link'>
                <img src={telegramIcon} alt='telegram' className='link-icon'/>
            </a>
            <button type='button' className='link link__button'>
                <img src={emailIcon} alt='email' className='link-icon'/>
            </button>            
        </div>
    </footer>
)

export default Footer