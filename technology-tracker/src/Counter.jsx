import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <div className='counter'>
        <h2>Счетчик: {count}</h2>
        <button onClick={increment}>Плюс</button>
        <button onClick={decrement}>минус</button>
        <button onClick={reset}>Сброс</button>
    </div>
  )
}

export default Counter