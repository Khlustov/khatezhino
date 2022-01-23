import './errorPage.less';

import React from 'react';
import webImage from '../../assets/images/web.svg';
import { Link } from 'gatsby';
import { MAIN_PAGE_LINKS } from '../../assets/constants/constants';

const ErrorComponent = () => {
    return (
        <div className='error-page'>
            <img src={webImage} alt='search' className='error-page-image'/>
            <p className='error-page-text'>Что-то пошло не так😲. Возможно страница, которую Вы ищете еше в разработке</p>
            <Link to={MAIN_PAGE_LINKS.MAIN} className='error-page-link'>ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
        </div>
    )
};

export default ErrorComponent;