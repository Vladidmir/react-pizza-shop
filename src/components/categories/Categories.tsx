import React, { useState, FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxWith';
import { setCategoryId } from '../../store/slices/filterSlice/filterSlice';


import './categories.scss';

const Categories: FC = () => {

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const { categoryId } = useAppSelector((state) => state.filterReducer)
  const dispatch = useAppDispatch()

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }



  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={index === categoryId ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
