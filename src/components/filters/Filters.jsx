import React from 'react';
import classNames from 'classnames';

import './Filters.scss';

const Filters = ({ filter, setFilter }) => { 
  return (
    <div className="filters">
      <h2 className="filters__header">
        Filter The List:
      </h2>
        <span
          className={classNames({ 
            filters__filter: true, 
            active: filter === "all" })}
          onClick={() => setFilter("all")}
        >
          All
        </span>
        <span
          className={classNames({ 
            filters__filter: true, 
            active: filter === "completed" })}
          onClick={() => setFilter("completed")}
        >
          Completed
        </span>
        <span
          className={classNames({ 
            filters__filter: true, 
            active: filter === "unfinished" })}
          onClick={() => setFilter("unfinished")}
        >
          Unfinished
        </span>
    </div>
  )
}

export default Filters;
