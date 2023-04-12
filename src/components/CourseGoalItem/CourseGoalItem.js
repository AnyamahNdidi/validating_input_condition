import React from 'react'
import "./CourseGoalItem.css"

const CourseGoalItem = (props) => {

    const onDeleteHandler = () => {
        props.ondelete(props.id)
    }
  return (
      <li className="goal-item" onClick={onDeleteHandler}>{props.children}</li>
  )
}

export default CourseGoalItem