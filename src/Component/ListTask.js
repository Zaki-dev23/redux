import React from 'react'
import Task from './Task'

const tasks = [{
  id : 1,
  description : "Lorem ipsum",
  isDone : true 
}]

export default function ListTask() {
  return (
    <React.Fragment>
      <Task id={tasks.id} description={tasks.description} />
    </React.Fragment>
  )
}