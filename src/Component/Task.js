import React from 'react'

export default function Task({id , description , isDone}) {
  return (
    <>
      <span>{id}</span>
      <p>{description}</p>
      <input type='checkbox' value={true} />
    </>
  )
}