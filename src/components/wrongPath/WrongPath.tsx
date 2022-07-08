import React, { FC } from 'react';

import s from './wrongPath.module.scss'

const WrongPath: FC = () => {
  return (
    <div className={s.wrong} >
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={s.description}>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default WrongPath
