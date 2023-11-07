import React from 'react';
import css from './Filter.module.scss';

function Filter({ filter, onFilterSearch, clearFilter, stateContactList }) {
  return (
    <div className={css.formRow}>
      <label htmlFor="filter">Find contact by name:</label>
      <input
        className={`input ${css.filterInput}`}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        // disabled={!stateContactList.length && !filter}
        onChange={e => onFilterSearch(e)}
      />
      {filter && (
        <button className={css.clearBtn} type="button" onClick={clearFilter}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Filter;
