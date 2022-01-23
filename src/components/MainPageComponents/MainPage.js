import './mainPage.less';

import React from "react";
import Links from './LinksComponents/Links';
import {
    MAIN_PAGE_LINKS,
    MAIN_PAGE_CARDS_TITLES,
    MAIN_PAGE_CARDS_DESCRIPTION
} from '../../assets/constants/constants';

import busIcon from '../../assets/images/bus.svg';
import currencyIcon from '../../assets/images/currency.svg';

const Main = () => {
    const mainPageLinks = [
        {
            card: 'timetable',
            image: busIcon,
            link: MAIN_PAGE_LINKS.TIMETABLE,
            title: MAIN_PAGE_CARDS_TITLES.TIMETABLE,
            description: MAIN_PAGE_CARDS_DESCRIPTION.TIMETABLE
        },
        {
            card: 'currencyes',
            image: currencyIcon,
            link: MAIN_PAGE_LINKS.CURRENCYES,
            title: MAIN_PAGE_CARDS_TITLES.CURRENCYES,
            description: MAIN_PAGE_CARDS_DESCRIPTION.CURRENCYES
        },
    ];

    return (
        <div className='main-page'>
            {mainPageLinks.map(link => 
            <Links
                key={link.title} 
                link={link.link}
                image={link.image}
                title={link.title}
                description={link.description}
            />)}
        </div>
    )
};

export default Main;