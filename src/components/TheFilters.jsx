import { useState } from 'react';
import useCatalogStore from '@/stores/catalogStore.js';

export default function TheFilters() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const {category, categoryMap, setCategory, sort, sortMap, setSort, order, setOrder} = useCatalogStore();

  const optionsClick = (value) => {
    setSort(value);
    setOptionsVisible(false);
  };

  const sortSelectLabel = sortMap.find((item) => item.value === sort).label;

  const arrowIsDown = order === 'ascending' ? '' : 'down';

  function arrowClick() {
    setOrder(order === 'ascending' ? 'descending' : 'ascending');
  }

  return (
    <>
      <aside className="filters">
        <div className="filters__btns">
          {categoryMap.map((item) => (
            <button key={item.id} onClick={() => setCategory(item.value)} className={`filters__btn ${item.value === category ? 'active' : ''}`}>{item.label}</button>
          ))}
        </div>
        <div className="filters__sort">
          <button className="filters__sort-arrow-btn" onClick={arrowClick}>
            <img className={`filters__sort-arrow-img ${arrowIsDown}`} src="/icons/arrow-up.svg" alt="arrow-up" />
          </button>
          <p className="filters__sort-label">Сортировка по:</p>
          <div className="filters__sort-select" onClick={() => setOptionsVisible(!optionsVisible)}>
            {sortSelectLabel}
            {optionsVisible && (
              <ul className="filters__sort-options">
                {sortMap.map((item) => (
                  <li
                    className={`filters__sort-option ${sort === item.value ? 'active' : ''}`}
                    key={item.id}
                    onClick={() => optionsClick(item.value)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
