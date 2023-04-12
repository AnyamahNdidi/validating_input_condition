import React from 'react'
import "./CourseGoalList.css"
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'

const CourseGoalList = (props) => {
  return (
      <div>
          <ul className="goal-list">
              
              {
                  props.item.map((data) => (
                      <CourseGoalItem
                       key={data.id}
                          id={data.id}
                          ondelete={props.deleteGoalHandler}
                      >
                  {data.text}
              </CourseGoalItem>
                  ))
              }
             
          </ul>
      </div>
  )
}

export default CourseGoalList