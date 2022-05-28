import React from 'react';
import Card from './Components/Card/Card';
import s from './ToDo.module.css';

const ToDo = () => {
  return (
    <div className={s.container}>
      <Card />
    </div>
  );
};

export default ToDo;
