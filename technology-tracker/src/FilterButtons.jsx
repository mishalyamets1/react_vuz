import React from 'react'
import './FilterButtons.css'
const FILTERS = {
        ALL: 'all',
        NOT_STARTED: 'not-started',
        IN_PROGRESS: 'in-progress',
        COMPLETED: 'completed'
    }
    const tabs = [
        { id: FILTERS.ALL, label: 'Все' },
        { id: FILTERS.NOT_STARTED, label: 'Не начаты' },
        { id: FILTERS.IN_PROGRESS, label: 'В процессе' },
        { id: FILTERS.COMPLETED, label: 'Выполнены' },
    ]
const FilterButtons = ({active, onChange, counts}) => {
    
  return (
    <div>
        <div className='filter-title'>Фильтры</div>
        {tabs.map(t => {
            const isActive = active ===t.id;
            return (
                <button className='filter-btn'
                key={t.id}
                onClick = {() => onChange(t.id)}
                >
                    {t.label}
                </button>
            )
        })}
    </div>
  )
}

export default FilterButtons
export {FILTERS}