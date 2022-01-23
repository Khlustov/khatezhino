import './links.less';

import React from 'react';
import { Link } from 'gatsby';

const Links = ({link, image, title, description}) => {
  return (
    <Link to={link} className='link-container'>        
        <img src={image} className='link-image' alt={title}/>
        <p className='link-title'>{title}</p>
        <p className='link-description'>{description}</p>        
    </Link>
  )
}

export default Links;