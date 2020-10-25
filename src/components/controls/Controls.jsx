import React from 'react';

import './Controls.scss';

const Controls = ({ deleteCompleted, markAllAsCompleted }) => {
  return (
    <div className="controls">
      <button
        type="button"
        className="controls__completeButton"
        onClick={() => markAllAsCompleted()}
      >
        Mark All Tasks As Completed
      </button>
      <button
        type="button"
        className="controls__deleteButton"
        onClick={() => deleteCompleted()}
      >
        Delete All Completed Tasks
        </button>
    </div>
  )
}

export default Controls;
