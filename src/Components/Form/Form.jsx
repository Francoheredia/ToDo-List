import React, { useState, useId } from 'react';

const Form = ({ setTaskListElemente, taskListElemente }) => {
  const [formValue, setFormValue] = useState({
    task: '',
    id: 1,
  });

  const { task, id } = formValue;

  const handleOnChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormValue({ ...formValue, id: id + 1 });
    setTaskListElemente([...taskListElemente, formValue]);
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Add Task..."
            name="task"
            onChange={handleOnChange}
            value={task}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
