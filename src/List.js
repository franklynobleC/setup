import React from 'react'

const List = ({ name, age, image }) => {
  return (
    <div>
      <img src={image} alt='' />
      <h3>{age}</h3>
      <h3> {name}</h3>
    </div>
  )
}

export default List
