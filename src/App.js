import React, { useState } from 'react'
import data from './data'
import List from './List'
function App () {
  const [users, setUsers] = useState(data)

  console.log(users)

  const handleClear = () => {
    setUsers([])
  }

  return (
    <div>
      Number of users Birthday {users.length}
      {users.map(user => (
        <div className='person'>
          <List
            key={user.id}
            image={user.image}
            name={user.name}
            age={user.age}
          />
        </div>
      ))}
      {users.length > 0 && (
        <div>
          <button className='container button' onClick={handleClear}>
            clear all suers
            <span> Number of users Birthday {users.length}</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default App
