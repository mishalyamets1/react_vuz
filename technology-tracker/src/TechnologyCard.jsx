import React, { useState } from 'react'
import './TechnologyCard.css'
import QuickActions from './QuickActions'
import FilterButtons from './FilterButtons'

const FILTERS = {
  ALL: 'all',
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
}

function getCounts(list) {
  return list.reduce(
    (acc, t) => {
      acc[FILTERS.ALL] += 1
      if (t.status === 'not-started') acc[FILTERS.NOT_STARTED] += 1
      else if (t.status === 'in-progress') acc[FILTERS.IN_PROGRESS] += 1
      else if (t.status === 'completed') acc[FILTERS.COMPLETED] += 1
      return acc
    },
    { [FILTERS.ALL]: 0, [FILTERS.NOT_STARTED]: 0, [FILTERS.IN_PROGRESS]: 0, [FILTERS.COMPLETED]: 0 }
  )
}

function getFiltered(list, activeFilter) {
  if (activeFilter === FILTERS.NOT_STARTED) return list.filter(t => t.status === 'not-started')
  if (activeFilter === FILTERS.IN_PROGRESS) return list.filter(t => t.status === 'in-progress')
  if (activeFilter === FILTERS.COMPLETED)  return list.filter(t => t.status === 'completed')
  return list
}

const TechnologyCard = () => {
  const [technologies, setTechnologies] = useState([
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
    { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' },
  ])

  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL)

  const values = { completed: 1, 'in-progress': 0.5, 'not-started': 0 }

  const go = (id) => {
    setTechnologies(prev => prev.map(t => t.id === id ? { ...t, status: 'in-progress' } : t))
  }

  const complete = (id) => {
    setTechnologies(prev => prev.map(t => t.id === id ? { ...t, status: 'completed' } : t))
  }

  const completeAll = () => {
    setTechnologies(prev => prev.map(t => ({ ...t, status: 'completed' })))
  }

  const resetAll = () => {
    setTechnologies(prev => prev.map(t => ({ ...t, status: 'not-started' })))
  }

  const handleRandomSelect = () => {
    const notCompleted = technologies.filter(t => t.status !== 'completed')
    if (notCompleted.length === 0) return alert('Все технологии уже выполнены!')
    const random = notCompleted[Math.floor(Math.random() * notCompleted.length)]
    alert(`Следующая технология: ${random.title}`)
  }

  const total = technologies.reduce((sum, t) => sum + (values[t.status] ?? 0), 0)
  const procent = technologies.length ? Math.round((total / technologies.length) * 100) : 0

  const counts = getCounts(technologies)
  const filtered = getFiltered(technologies, activeFilter)

  return (
    <div className="technology-card">
      <FilterButtons
        active={activeFilter}
        onChange={setActiveFilter}
        counts={counts}
        FILTERS={FILTERS}
      />

      {filtered.map(item => (
        <div className='item_tech' key={item.id}>
          <p className='item_tech-title'>{item.title}</p>
          <p className='item_tech-description'>{item.description}</p>
          <p
            className='item_tech-status'
            style={item.status === 'completed' ? { color: 'green' } : { color: 'red' }}
          >
            {item.status}
          </p>
          <div className='btn-box'>
            {(
              <div className='button-go' onClick={() => go(item.id)}>Приступить</div>
            )}
            { (
              <div className='button-completed' onClick={() => complete(item.id)}>Выполнено</div>
            )}
          </div>
        </div>
      ))}

      <div className='tech'>
        {/* QuickActions — без изменений API */}
        <QuickActions
          completeAll={completeAll}
          resetAll={resetAll}
          handleRandomSelect={handleRandomSelect}
        />
        <h3>Прогресс изучения: {procent}%</h3>
        <div className='progress'>
          <div className='progress-bar' style={{ width: `${procent}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyCard
