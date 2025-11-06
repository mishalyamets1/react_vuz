import React from 'react'

const UserCard = ({ name, role, avatarUrl, isOnline }) => {
  return (

    <div className='user-card'>
      <div className='avatar-section'>
        <img src={avatarUrl} alt={`аватар: ${name}`}/>
        <p>Статус: {isOnline ? 'online':'не в сети'}</p>
      </div>
      <div className='user-info'>
        <h3>{name}</h3>
       <p>{role}</p>
      </div>
       
       </div>
  )
}

export default UserCard