import React, { useState } from 'react';
import Form from '../Form/Form';
import Nav from '../Nav/Nav';
import TaskList from '../TaskList/TaskList';
import s from './Card.module.css';
const Card = () => {
  const [taskListElemente, setTaskListElemente] = useState([]);
  return (
    <div className={s.containerCard}>
      <div className="">
        <Nav />
      </div>
      <div className="">
        <h1>ToDo List </h1>
      </div>
      <div className="">
        <Form
          setTaskListElemente={setTaskListElemente}
          taskListElemente={taskListElemente}
        />
      </div>
      <div className="">
        <TaskList taskListElemente={taskListElemente} />
      </div>
    </div>
  );
};

export default Card;
