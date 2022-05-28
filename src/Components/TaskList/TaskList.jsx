import React from 'react';

const TaskList = ({ taskListElemente }) => {
  return (
    <div>
      <ul>
        {taskListElemente?.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
