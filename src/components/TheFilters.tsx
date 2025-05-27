import { useState } from 'react';
import useCatalogStore from '@/stores/catalogStore';
import IconArrowUp from '../icons/IconArrowUp';

export default function TheFilters() {
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

  const {category, categoryMap, setCategory, sort, sortMap, setSort, order, setOrder} = useCatalogStore();

  const optionsClick = (value: string) => {
    setSort(value);
    setOptionsVisible(false);
  };

  const sortSelectLabel = sortMap.find((item: { value: string; label: string }) => item.value === sort)?.label;

  function arrowClick() {
    setOrder(order === 'ascending' ? 'descending' : 'ascending');
  }

  return (
    <>
      <aside className="filters">
        <div className="filters__btns">
          {categoryMap.map((item: { id: number; value: string; label: string }) => (
            <button key={item.id} onClick={() => setCategory(item.value)} className={`filters__btn ${item.value === category ? 'active' : ''}`}>{item.label}</button>
          ))}
        </div>
        <div className="filters__sort">
          <button className="filters__sort-arrow-btn" onClick={arrowClick}>
            <IconArrowUp rotate={order === 'descending'} />
          </button>
          <p className="filters__sort-label">Сортировка по:</p>
          <div className="filters__sort-select" onClick={() => setOptionsVisible(!optionsVisible)}>
            {sortSelectLabel}
            {optionsVisible && (
              <ul className="filters__sort-options">
                {sortMap.map((item: { id: number; value: string; label: string }) => (
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