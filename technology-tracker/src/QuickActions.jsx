import React from 'react'
import './QuickActions.css'
const QuickActions = ({handleRandomSelect,resetAll,completeAll}) => {
  return (
    <div>
            <h2 className='action-title'>Быстрые действия</h2>
        <div className='actions-box'>
            <div className='completed-all' onClick={completeAll}>  Отметить все как выполненные</div>
            <div className='reset-all' onClick={resetAll}>Сбросить все статусы</div>
            <div className='random' onClick={handleRandomSelect}>Случайный выбор следующей технологии</div>
        </div>
    </div>
  )
}

export default QuickActions