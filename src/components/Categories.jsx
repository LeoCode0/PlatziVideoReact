import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='Categories'>
    <h2 className='categories__titles'>{title}</h2>
    {children}
  </div>
);

export default Categories;
